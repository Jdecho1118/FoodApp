import { useState, useEffect } from "react";
import { RES_URL } from "../utils/config";
import Restaurantcard from "./Restaurantcard";
import Carousel from "./Carousel";
import Title from "./Title";
import Shimmer from "./Shimmer";
import Category from "./Category";

const Cardcontainer = () => {
  const [restaurant, setRestaurant] = useState([]);
  const [filterData, setFilterData] = useState([]);
  const [CarouselData, setCarouselData] = useState([]);
  const[title,setTitle] = useState([]);
  const[title1,setTitle1]= useState([]);
  const [searchText, setSearchText] = useState("");
  const [masterData, setMasterData] = useState([]);
  const [category, setActiveCategory] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const getData = async () => {
    try {
      const data = await fetch(RES_URL);
      const json = await data.json();
      setRestaurant(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
      setFilterData(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
      setCarouselData(json?.data?.cards[0]?.card?.card?.imageGridCards?.info);
      setTitle(json?.data.cards[0]?.card?.card?.header.title);
      setTitle1(json?.data.cards[1]?.card?.card?.header.title);
      setMasterData(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    } catch (err) {
      console.log("Error fetching data:", err);
      setErrorMessage("There is Some Error, Try again");
    }
  };

  const handleRating = () => {
    const filterData = masterData.filter(resItem => resItem?.info?.avgRating > 4.5);
    if (restaurant !== masterData && category === "rating") {
      handleReset();
    } else {
      setRestaurant(filterData);
      setActiveCategory("Rating");
    }
  };

  const handleDeliveryTime = () => {
    const filterData = masterData.filter(resItem => resItem?.info?.sla?.deliveryTime < 30);
    if (restaurant !== masterData && category === "deliveryTime") {
      handleReset();
    } else {
      setActiveCategory("Fastest Delivery");
      setRestaurant(filterData);
    }
  };

  const handleCategory = () => {
    setActiveCategory("Pure Veg");
    const filterData = masterData.filter(resItem => resItem?.info?.veg);
    setRestaurant(filterData);
  };

  const handleReset = () => {
    setActiveCategory("");
    setRestaurant(masterData);
  };

  const handleSearchText = (e) => {
    setSearchText(e.target.value);
  };

  const searchRestaurant = () => {
    const searchTextLowerCase = searchText.toLowerCase();
    const filterData = masterData.filter(
      (resItem) =>
        resItem?.info?.name.toLowerCase().includes(searchTextLowerCase) ||
        (resItem?.info?.id.toString().includes(searchTextLowerCase) && !isNaN(searchText))
    );

    if (filterData.length === 0) {
      setErrorMessage(`No match found for "${searchText}"`);
    } else {
      setErrorMessage("");
    }

    setRestaurant(filterData);
  };

  useEffect(() => {
    console.log("useEffect called");
    getData();
  }, []);

  console.log("Component rendered");

  return (
    <>
      <div className="container text-center mt-4">
        <div className="d-flex gap-2 justify-content-center ">
          <input
            type="text"
            placeholder="Search for restaurants & food"
            value={searchText}
            onChange={(e) => handleSearchText(e)}
            style={{ width: "700px", height: "50px", boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px" }}
          />
          <button
            className="btn btn-sm btn-warning shadow rounded"
            onClick={searchRestaurant}
            style={{ width: "100px", fontSize:"20px"}}
          >
            Search
          </button>
        </div>
        <div className="container">
          <Title title={title}/>
        <div></div>
        </div>

        <div className="container pt-2 d-flex imgscroll">
          {CarouselData.map((card, index) => (
            <Carousel key={index} img={card?.imageId} />
          ))}
        </div>

        <div className="d-flex justify-content-between align-items-center mt-4">
          <Title title={title1}/>
          <div className="btn-container filterbutton">
    <button className="btn btn-medium mx-1" onClick={handleRating}>
        Rating 4.5+
    </button>
    <button className="btn btn-medium mx-1" onClick={handleDeliveryTime}>
        Fast Delivery
    </button>
    <button className="btn btn-medium mx-1" onClick={handleCategory}>
        Pure Veg
    </button>
    {category && (
        <button className="btn btn-medium mx-1" onClick={handleReset}>
            Reset
        </button>
    )}
</div>

        </div>
      </div>

      <div className="container d-flex flex-column align-items-center  gap-4">
        {errorMessage ? (
          <div className="alert alert-danger d-flex align-items-center" role="alert">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="currentColor"
              className="bi bi-exclamation-triangle-fill flex-shrink-0 me-2"
              viewBox="0 0 16 16"
              role="img"
              aria-label="Warning:"
            >
              <path d="M8.982 1.566a1.13 1.13 0 0 0-1.96 0L.165 13.233c-.457.778.091 1.767.98 1.767h13.713c.889 0 1.438-.99.98-1.767L8.982 1.566zM8 5c.535 0 .954.462.9.995l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 5.995A.905.905 0 0 1 8 5zm.002 6a1 1 0 1 1 0 2 1 1 0 0 1 0-2z" />
            </svg>
            <div>Error! {errorMessage}</div>
          </div>
        ) : restaurant.length !== 0 ? (
          <>
            <Category title={category} />
            <div className="container d-flex flex-wrap mt-4 gap-4">
              {restaurant.map((card, index) => (
                <Restaurantcard key={card?.info?.id} {...card?.info} />
              ))}
            </div>
          </>
        ) : (
          <div className="container d-flex flex-wrap mt-4 gap-4">
            <Shimmer />
          </div>
        )}
      </div>
    </>
  );
};

export default Cardcontainer;
