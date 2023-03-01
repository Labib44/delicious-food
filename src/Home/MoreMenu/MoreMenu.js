import React, { useEffect, useState } from 'react';
import MenuCard from './MenuCard';

const MoreMenu = () => {
    const [moreMenus, setMoreMenus] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/moreMenu')
            .then(res => res.json())
            .then(data => setMoreMenus(data))
    }, [])

    return (
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3 p-10 bg-orange-50'>
            {
                moreMenus.map(moreMenu=><MenuCard
                key={moreMenu.id}
                moreMenu={moreMenu}
                ></MenuCard>)
            }
        </div>
    );
};

export default MoreMenu;