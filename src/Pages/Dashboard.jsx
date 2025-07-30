import React, { useState } from 'react'
import product from './data.js'

import Card from '../Component/Card.jsx'





const Dashboard = () => {
    const [productState, setProductState] = useState(product);
    return (
        <>
        



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