import React from "react";
import "./packages.css";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import { packages } from "../../data";
const Packages = () => {
  return (
    <div>
      <span className='p__title'>Best Packages For You</span>
      <div className='p__item'>
        {packages.map((item) => (
          <div className='p__wrapper' key={item.id}>
            <div className='p__top'>
              <img src={item.img} alt='japan' className='p_img' />
            </div>
            <div className='p__mid'>
              <div className='p__mid-top'>
                <span className='p__stay'>3 Days, 2 Nights</span>
                <span className='p__price'>£500/Person</span>
              </div>
              <span className='p__text'>
                Explore the Beauty of the island for 3 days and 2 nights with
                our travel agency
              </span>
            </div>
            <div className='p__bottom'>
              <div className='p__destination-wrapper'>
                <LocationOnOutlinedIcon sx={{ fontSize: "18px" }} />
                <span className='p__destination'>Indonesia</span>
              </div>
              <a href='http://' className='p__link'>
                Know more
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Packages;
