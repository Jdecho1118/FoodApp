import Restaurantcard from "./Restaurantcard";
//import data from "../utils/config";
import masterData from '../utils/dummyData';
import Carousel from "./Carousel";
import { useState } from "react";
// import { IMG_URL } from "../utils/config";
import { useEffect } from "react";
import { RES_URL } from "../utils/config";

const Cardcontainer = () =>{
  // console.log("restaurantCollection",masterData[0]?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
  // console.log("collection",masterData[0]?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
  const [restaurant, setRestaurant] = useState([]);
  // const[count, setCount] = useState(0);
  const[filterData, setFilterData] = useState([]);
  const [CarouselData, setCarouselData] = useState([])
  // const restaurants = masterData[0]?.data?.cards[0]?.card?.card?.imageGridCards?.info;
  // const[text, setText]= useState("Sample text");
  // const[number, setNumber ] = useState(0);



  // const collection= masterData[0]?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants;


  const getData = async() => {
    try{
    const data = await fetch(RES_URL)
    const json = await data.json();
    console.log("responseData", json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    setRestaurant(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    setFilterData(masterData[0]?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    setCarouselData(json?.data?.cards[0]?.card?.card?.imageGridCards?.info);
    }
    catch(err){
      console.log("error", err);
    }
  }
  // const handleCount = () =>{
  //   setCount(count+1);
  // }
  
  useEffect(()=>{
    console.log("useEffect called");
    getData();
  },[]);
  
  const[searchText,setSearchText]=useState([])
  console.log("component renderd");

  const search=()=>{
    console.log(searchText);
    const filteredData = restaurant.filter(resitem => resitem?.info?.name);
    const masterData = filteredData.filter(resitem => resitem?.info?.name.toLowerCase().includes(searchText.toLowerCase()))
    setRestaurant(filteredData);
    setFilterData(masterData);
  }

    return(
      <>
      <input type="text" placeholder="Search for.." value={searchText} onChange={(e)=>setSearchText(e.target.value)}/>
      <button onClick={search}>Search</button>
      {/* <button onClick={handleCount}>Increase Count</button>
      <h1>count is {count}</h1> */}
      <div className="container pt-4 d-flex imgscroll">
  {
    CarouselData.map((card) => {
      return (
        <Carousel
          img={card?.imageId}
        />
      )
    })
  }
</div>

      <div className="container d-flex justify-content-between  flex-wrap mt-4 gap-4">
      
        {
          filterData.map((card, index)=>{
            return(
             
              <Restaurantcard
              key={card?.info?.id}
              {...card?.info}
                
              />
            )
          })
        }
      </div>
      </>
    );
};
export default Cardcontainer;