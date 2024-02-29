import { IMG_URL } from "../utils/config";


const Restaurantcard = ({cloudinaryImageId ,name ,avgRating ,sla,cuisines,areaName}) =>{
  // console.log("props".props);
  // const {url,name} = props;

  return(
      <div className="custom-card">
        <div>
          <img src={IMG_URL + cloudinaryImageId}
          alt="resimage" 
          width="100%"
          style={{height: "200px",
          objectFit: "cover"}}/>
        </div>
        <div className="cuisine">{name}</div>
        <div className="d-flex justify-content-between">
          <div className="bg-success rounded text-white px-2">⭐{avgRating}/5</div>
          <div>🕑{sla?.deliveryTime}min</div>
        </div>
        <div className="text-secondary cuisine">{cuisines}</div>
        <div className="text-secondary">{areaName}</div>
      </div>
    );
}
export default Restaurantcard;