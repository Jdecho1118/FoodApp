import Restaurantcard from "./Restaurantcard";
//import data from "../utils/config";
import masterData from '../utils/dummyData';

const Cardcontainer = () =>{
  // const{imgURL, name, rating, deliveryTime,cuisines,location} = data[0];
  // console.log("data",data[0]);
  console.log("restaurantCollection",masterData[0]?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);

  const collection= masterData[0]?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants;
    return(
      <div className="container d-flex justify-content-between  flex-wrap mt-4 gap-4">
        {/* <Restaurantcard url={imgURL} name={name} rating={rating} deliveryTime={deliveryTime} cuisines={cuisines} location={location}/>
        <Restaurantcard url={imgURL} name={name} rating={rating} deliveryTime={deliveryTime} cuisines={cuisines} location={location}/>
        <Restaurantcard url={imgURL} name={name} rating={rating} deliveryTime={deliveryTime} cuisines={cuisines} location={location}/>
        <Restaurantcard url={imgURL} name={name} rating={rating} deliveryTime={deliveryTime} cuisines={cuisines} location={location}/>
        <Restaurantcard url={imgURL} name={name} rating={rating} deliveryTime={deliveryTime} cuisines={cuisines} location={location}/> */}
        {
          collection.map((card, index)=>{
            return(
              // <Restaurantcard
              //   key={card?.deliveryTime}
              //   imgURL={card?.imgURL}
              //   name={card?.name}
              //   rating={card?.rating}
              //   deliveryTime={card?.deliveryTime}
              // />
              <Restaurantcard
              key={index}
              
                imgURL ={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" +card?.info?.cloudinaryImageId}
                name ={card?.info?.name}
                rating ={card.info?.avgRating}
                deliveryTime ={card?.info?.sla?.deliveryTime}
                cuisines={card?.info?.cuisines.join(", ")}
                location={card?.info?.areaName}    
              />
            )
          })
        }
      </div>
    );
};
export default Cardcontainer;