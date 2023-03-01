import React from 'react';
import { FaFacebook,FaTwitterSquare,FaLinkedin } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const ReviewsCard = ({ reData }) => {
    const { id, name, comment, img } = reData;
    return (
        <div>
            

            <div className="flex flex-col justify-center w-full px-8 mx-6 my-12 text-center rounded-md md:w-96 lg:w-80 xl:w-64  bg-orange-200">
                            <img alt="" className="self-center flex-shrink-0 w-24 h-24 -mt-12 bg-center bg-cover rounded-full " src={img} />
                            <div className="flex-1 my-4">
                                <p className="text-xl font-semibold leading-snug">{name}</p>
                                <p>{comment}</p>
                            </div>
                            <div className="flex items-center justify-center p-3 space-x-3 border-t-2">
                                <Link><FaFacebook></FaFacebook></Link>
                                <Link><FaTwitterSquare></FaTwitterSquare></Link>
                                <Link><FaLinkedin></FaLinkedin></Link>
                              
                            </div>
                        </div>
        </div>
    );
};

export default ReviewsCard;