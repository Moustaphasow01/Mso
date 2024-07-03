import { useEffect, useState } from 'react';
import './Home.css';
import Product from '../../Component/Product/Product';
import { useNavigate } from 'react-router';

export default function Home(){
    const [listProduct,setListProduct] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        fetch("http://localhost:3000/product")
        .then(result => result.json())
        .then(data => setListProduct(data));
    },[]);

    return(
        <div className='product-list'>
            {
                listProduct.map(product => 
                <Product product={product} onClick={() => navigate(`/product/${product.id}`)} />
                )
            }
        </div>
    )
}