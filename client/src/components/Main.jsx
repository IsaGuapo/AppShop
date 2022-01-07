import React from 'react'
import Search from './Search';
import './Main.css'
import Products from './Products';
// import axios from 'axios';

const Main = () => {

// const getProducts = async () => {
//     const url = '/api/products'
//     const resp = await axios.get(url)
//     //accedemos a nuestros productos que estan en data- dentro de data- y luego products
//     const products = resp.data.data.products
//     console.log(products)
// }
// getProducts();
    return (
        <main>
            <div className='container_home'>
                <p className='text_home'> "Si no escalas la montaña, jamás disfurtarás de su paisaje"</p>
            </div>
           <Search/>
           <Products/>
        </main>
    )
}

export default Main
