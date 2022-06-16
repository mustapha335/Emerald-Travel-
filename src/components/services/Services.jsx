import React from "react";
import "./service.css";
import SendOutlinedIcon from "@mui/icons-material/SendOutlined";
import OtherHousesOutlinedIcon from "@mui/icons-material/OtherHousesOutlined";
import ConfirmationNumberOutlinedIcon from "@mui/icons-material/ConfirmationNumberOutlined";
const Services = () => {
  return (
    <div>
      <div className='service-title'>Our Services</div>
      <div className='services'>
        <div className='item'>
          <ConfirmationNumberOutlinedIcon className='icon' />
          <h4 className='item-title'>Ticket Booking</h4>
          <h5 className='item-desc'>
            We book all kind of national or international ticket for your
            destinaion.
          </h5>
        </div>

        <div className='item'>
          <OtherHousesOutlinedIcon className='icon2' />
          <h4 className='item-title'>Hotel Booking</h4>
          <h5 className='item-desc'>
            You can easily book your according to your budget hotel by our
            website.
          </h5>
        </div>

        <div className='item'>
          <SendOutlinedIcon className='icon3' />
          <h4 className='item-title'>Tour Plan</h4>
          <h5 className='item-desc'>
            We provide you the best plan within a short time explore more.
          </h5>
        </div>
      </div>
    </div>
  );
};

export default Services;
