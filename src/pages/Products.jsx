//import React from 'react'
import { Link,Outlet } from "react-router-dom"
const Products = () => {
  return (
    <div className="products">
        <h2>este es el componente de productos</h2>
        <nav>
            <Link to='male'>Male</Link>
             <Link to='female'>Female</Link>

        </nav>
        
        <Outlet/>
    </div>
  )
}

export default Products