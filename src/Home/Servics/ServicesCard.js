import React from 'react';
import './service.css'

const ServicesCard = ({service}) => {
    const {id,title, img, price, details}=service;
    return (
        <div className="card card-compact w-96 bg-base-100 shadow-xl ">
            <figure><img src={img} alt="" className='imgH w-full' /></figure>
            <div className="card-body">
                <h2 className="card-title">{title}</h2>
                <p className='tect-xl font'>Price: ${price}</p>
                <p>{details}</p>
                <div className="card-actions justify-end">
                    {/* <button className="btn  btn-outline btn-primary btn-sm">Details</button> */}
                    <button className="btn  btn-outline btn-primary btn-sm">Order</button>
                </div>
            </div>
        </div>
    );
};

export default ServicesCard;