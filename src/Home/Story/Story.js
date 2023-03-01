import React from 'react';
import storyimg from '../../Assets/img/story.jpg'
import './Story.css'
import signature from '../../Assets/img/signature.png'

const Story = () => {
    return (
        <div className='bg-orange-50 p-5 '>
            <h1 className='text-4xl text-center font-bold font-serif p-3'>Delicious Of Story</h1>
            <div className="card lg:card-side bg-base-100 shadow-xl max-w-4xl  mx-auto h-96">
                <figure><img src={storyimg} alt="Album" className='story-img' /></figure>
                <div className="card-body w-96 content-center mt-10">
                    <h2 className="card-title font-serif text-xl">We Are Locally Crafted Food</h2>
                    <p className='font-serif mt-3'>In our restaurnant with people who are important to you, conversations that bring you closer to each other.</p>
                    <p className='font-serif'>Traditional dishes with local products of highest quality. including succulent Veal Chops Siciliano, spicy Lobster Fra Diavolo, tender Chicken Contadina.</p>
                    <div className="card-actions justify-end mr-0">
                       <figure>
                       <img src={signature} alt="" className='w-24 h-24'/>
                       </figure>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Story;