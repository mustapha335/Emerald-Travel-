import React from "react";
import ArrowForwardIosRoundedIcon from "@mui/icons-material/ArrowForwardIosRounded";
import "./destination.css";
import { destinations } from "../../data";
const Destinations = () => {
  return (
    <div className='destinationContainer'>
      <div className='distinationTitle'>Our Popular Distinations</div>

      <div className='destinationItems'>
        {destinations.map((item) => (
          <div className='destinationItemWrapper' key={destinations.id}>
            <div className='destinationItem'>
              <img src={item.img} alt='' className='destinationImg' />

              <h2 className='itemTitle'>{item.title}</h2>
              <ArrowForwardIosRoundedIcon className='itemIcon' />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Destinations;
