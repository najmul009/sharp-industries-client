import React, { useEffect, useState } from 'react';
import Footer from '../Common/Footer';
import Card from '../Home/Card';

const Products = () => {
    const [items, setItems] = useState([])
    useEffect(() => {
        fetch('https://calm-anchorage-26562.herokuapp.com/tools')
            .then(res => res.json())
            .then(data => setItems(data))
    }, [])
    const revItems = [...items];
    const newItems = revItems.reverse();
    return (
        <div>
            <h1 className='text-center fnt-os text-4xl font-bold mb-20'>All products</h1>
            <div className="cards grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 px-4 md:px-20 gap-5">
                {
                    newItems.map(item=> <Card
                    key={item._id}
                    item={item}
                    ></Card>)
                }

            </div>
            <Footer></Footer>
        </div>
    );
};

export default Products;