import React, { useState } from 'react'
import product from './data.js'
import Navbar from '../Component/Navbar.jsx';
import Card from '../Component/Card.jsx'


<Component />


const Dashboard = (product) => {
    const [productState, setProductState] = useState(product);
    return (
        <>
            <Navbar />



            <div className='container'>
                <div className='row'>
                    {productState.map((product, index) => (
                        <div className='col-12 col-md-6 col-lg-3' key={index}>
                            <Card product={product} />
                        </div>

                    ))}
                </div>
            </div>

        </>
    )
}

export default Dashboard