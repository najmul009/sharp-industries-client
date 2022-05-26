import React, { useEffect, useState } from 'react';
import Card from './Card';

const Tools = () => {
    const [items, setItems] = useState([])
    useEffect(() => {
        fetch('https://calm-anchorage-26562.herokuapp.com/tools')
            .then(res => res.json())
            .then(data => setItems(data))
    }, [])
    const revItems = [...items];
    const newItems = revItems.reverse().slice(0,6);
    return (
        <div className='my-20'>
            <h1 className='text-center fnt-os text-6xl font-bold mb-20'>New Products On Market</h1>
            <div className="cards grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 px-4 md:px-20 gap-5">
                {
                    newItems.map(item=> <Card
                    key={item._id}
                    item={item}
                    ></Card>)
                }

            </div>
        </div>
    );
};

export default Tools;