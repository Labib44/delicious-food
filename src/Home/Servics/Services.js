import React, { useEffect, useState } from 'react';
import ServicesCard from './ServicesCard';
import serviceBg from '../../Assets/img/services-bg.jpg'
import { Link } from 'react-router-dom';

const Services = () => {
    const [services, setServices] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/Menu')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])
    return (
        <div className='bg-orange-50'>
            <img className='h-96 w-full' src={serviceBg} alt="" />
            <div className='-mt-72'>
                <h1 className='text-2xl text-center font-serif font-bold text-white p-10'>DELICIOUS MENU</h1>
            </div>
            <div className='max-w-7xl mx-auto'>
                <div  className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 p-10'>
                    {
                        services.map(service => <ServicesCard
                            key={service.id}
                            service={service}
                        ></ServicesCard>)
                    }
                </div>
                <div className="card-actions justify-center p-10">
                    <Link to={'/more'} className="btn  btn-outline btn-primary">More Menu</Link>
                </div>
            </div>
            
        </div>
    );
};

export default Services;