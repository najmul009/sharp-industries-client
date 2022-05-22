import React, { useEffect, useState } from 'react';
import Card from './Card';

const Tools = () => {
    const [items, setItems] = useState([])
    useEffect(() => {
        fetch('fakedata.json')
            .then(res => res.json())
            .then(data => setItems(data))
    }, [])
    const revItems = [...items];
    const newItems = revItems.reverse();
    return (
        <div className='my-20'>
            <h1 className='text-center fnt-os text-6xl font-bold mb-20'>New Products On Market</h1>
            <div className="cards grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 px-4 md:px-20 gap-5">
                {
                    newItems.map((item,index)=> <Card
                    key={index}
                    item={item}
                    ></Card>)
                }

            </div>
        </div>
    );
};

export default Tools;