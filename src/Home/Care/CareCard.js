import React from 'react';

const CareCard = ({ careData }) => {
    const { taitle, comment, icon } = careData;
    return (
        <div className="card w-96 bg-base-100 shadow-xl">
            <figure className="">
                <img src={icon} alt="Shoes" className=" w-24 h-24 p-3" />
            </figure>
            <div className="card-body items-center text-center">
                <h2 className="card-title">{taitle}</h2>
                <p>{comment}</p>
                
            </div>
        </div>
    );
};

export default CareCard;