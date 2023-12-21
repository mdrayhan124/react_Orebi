import React, { useState } from 'react'
import Product from '../components/Layouts/Product'
import { useParams } from 'react-router-dom'

const SingleProduct = () => {
    const { id } = useParams(Product.id)
    return (
        <div>SingleProduct {id}</div>
    )
}

export default SingleProduct