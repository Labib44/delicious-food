import React from 'react';
import { Link } from 'react-router-dom';

const MenuCard = ({moreMenu}) => {
    const {_id,title, img, price, details}=moreMenu;
    return (
        <div className="card card-compact w-96 bg-base-100 shadow-xl ">
            <figure><img src={img} alt="" className='imgH w-full' /></figure>
            <div className="card-body">
                <h2 className="card-title">{title}</h2>
                <p className='tect-xl font'>Price: ${price}</p>
                <p>{details}</p>
                <div className="card-actions justify-end">
                    <Link to={`/detail/${_id}`} className="btn  btn-outline btn-primary btn-sm">Details</Link>
                    <button className="btn  btn-outline btn-primary btn-sm">Order</button>
                </div>
            </div>
        </div>
    );
};

export default MenuCard;