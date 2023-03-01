import React from 'react';
import food from '../../Assets/img/food.jpg'
import courier from '../../Assets/img/Courier.png'
import support from '../../Assets/img/support.jpg'
import CareCard from './CareCard';

const Care = () => {
    const CaresData = [
        {
            id: 1,
            taitle: 'The Best Food',
            comment: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. ',
            icon: food,
        },
        {
            id: 2,
            taitle: 'The Best Courier',
            comment: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. ',
            icon: courier,
        },
        {
            id: 3,
            taitle: '24/7 Support',
            comment: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
            icon: support,
        }
    ]
    return (
       <div className='py-10 bg-base-200'>
        <div className='mx-auto max-w-7xl '>
            <h1 className='text-xl font-serif font-bold text-center'>WHY DELICIOUS DEFOOD?</h1>
        <h1 className='text-4xl font-serif font-bold text-center p-3'>We Care for Your Precious Time.</h1>
         <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  '>
            {
                CaresData.map(careData=> <CareCard
                key={careData.id}
                careData={careData}
                ></CareCard>)
            }
        </div>
       </div>
       </div>
    );
};

export default Care;