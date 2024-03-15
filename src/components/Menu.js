import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Shimmer from "./Shimmer";

const Menu = () => {
  const [menuList, setMenuList] = useState([]);
  const { resId } = useParams();
  const searchParams = useParams();
  const navigate =useNavigate();
  const MENU_URL = `https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=19.1676449&lng=72.9674635&restaurantId=${resId}&catalog_qa=undefined&submitAction=ENTER`;
  const IMG_URL = "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_1024/";

  const getMenu = async () => {
    try {
      const menuData = await fetch(MENU_URL);
      const json = await menuData.json();
      // console.log("menuData", json?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR);
      setMenuList(json?.data?.cards);
    } catch (error) {
      console.log("error", error);
    }
  };

  useEffect(() => {
    getMenu();
  }, []);

  if (menuList.length === 0) {
    return (
      <div className="container d-flex flex-wrap mt-4 gap-4">
        <Shimmer />
      </div>
    );
  } else {
    const { name, cuisines, areaName, feeDetails, avgRating, totalRatingsString } =
      menuList[0]?.card?.card?.info;

    const { itemCards } = menuList[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card;
    const filteredData = menuList[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(listItem =>
      listItem?.card?.card['@type'] === "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );

    const nestedData = menuList[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(listItem =>
      listItem?.card?.card['@type'] === "type.googleapis.com/swiggy.presentation.food.v2.NestedItemCategory"
    );

    console.log("filteredData", filteredData);
    console.log("nestedData", nestedData);
    console.log("Params", searchParams);
    console.log("navigate", navigate);

    return (
      <div className="container-sm mt-4" style={{ width: "60%"}}>
        <div className="d-flex justify-content-between align-items-center pb-4 border-bottom-secondary ">
          <div>
            <h5>{name}</h5>
            <div className="text-secondary">
              {cuisines.join(",")}
            </div>
            <div className="text-secondary">
              {areaName}
            </div>
            <div className="text-secondary">
              🚲{feeDetails?.message}
              
            </div>
          </div>
          <div>
            <h6 className="text-success">{avgRating}⭐</h6>
            <hr className="m-0"></hr>
            <div className="text-success">{totalRatingsString}</div>
          </div>
        </div>
        {filteredData.map(filteredItem =>
          <div className="pt-4" key={filteredItem?.card?.card?.title} style={{ borderBottom: "15px solid #f0f0f0" }}>
            <h5>{filteredItem?.card?.card?.title}</h5>
            {itemCards.map(itemCard =>
              <div className="d-flex justify-content-between align-items-center border-bottom border-secondary p-4 pt-3 mt-4" style={{boxShadow: "rgba(0, 0, 0, 0.16) 0px 10px 36px 0px, rgba(0, 0, 0, 0.06) 0px 0px 0px 1px"}} key={itemCard?.card?.info?.id}>
                <div>
                  <div>{itemCard?.card?.info?.isVeg ? '🟢' : '🔺'}</div>
                  <h6>{itemCard?.card?.info?.name}</h6>
                  <h6 className="fw-normal">₹{itemCard?.card?.info?.price / 100}</h6>
                  <div className="text-secondary fw-light desclimit">{itemCard?.card?.info?.description}</div>
                </div>
                <div className="thumbnail_container">
                  <img src={IMG_URL + itemCard?.card?.info?.imageId} alt="resimage" style={{ width: "118px", height: "96px", objectFit: "cover" }} />
                  <button className="btn btn-light text-success">ADD</button>
                </div>
              </div>
            )}
          </div>
        )}
        {nestedData.map(nestedItem =>
          <div className="pt-4" key={nestedItem?.card?.card?.title}>
            <h4>{nestedItem?.card?.card?.title}</h4>
            {nestedItem?.card?.card?.categories.map((category, index) =>
              <div key={category?.title} style={{ borderBottom: "15px solid #f0f0f0" }}>
                <h6>{index + 1}{category?.title}</h6>
                {category?.itemCards.map(itemCard =>
                  <div className="d-flex justify-content-between align-items-center border-bottom border-secondary pb-4 pt-3" key={itemCard?.card?.info?.id}>
                    <div>
                      <div>{itemCard?.card?.info?.isVeg ? '🟢' : '🔺'}</div>
                      <h6>{itemCard?.card?.info?.name}</h6>
                      <h6 className="fw-normal">₹{itemCard?.card?.info?.price / 100}</h6>
                      <div className="text-secondary fw-light">{itemCard?.card?.info?.description}</div>
                    </div>
                    <div className="thumbnail_container">
                      {itemCard?.card?.info?.imageId ? (
                        <img
                          src={IMG_URL + itemCard?.card?.info?.imageId} alt="resimage"
                          style={{ width: "118px", height: "96px", objectFit: "cover" }}
                        />
                      ) : (
                        <img
                          src="https://st4.depositphotos.com/18657574/22403/v/450/depositphotos_224034930-stock-illustration-food-concept-vector-linear-icon.jpg"
                          alt="noimage" style={{ width: "118px", height: "96px", objectFit: "cover" }}
                        />
                      )}
                      <button className="btn btn-light text-success">ADD</button>
                    </div>
                  </div>
                )}
              </div>
            )}
          </div>
        )}
      </div>
    );
  }
};

export default Menu;
