import React,{useEffect,useContext} from 'react'
import Axios from 'axios';
import context from "../Context/context";

const ProductInfo = (props) => {

    const {globalState} = useContext(context);
    
    const  product  = globalState.product.product;

    useEffect(() => {
        Axios.get('/api/', )
        return () => {
            
        }
    }, [])

    console.log(product);
    return (
        <div className="main-box">
            <div className="content-box">
               <div className="product-info-box">
                    <div className="product-info-box-atributes">
                        <img src = {product.img} alt="" className="product-info-img"></img>
                        <div className="product-info-atributes-info-box">
                            <h1 className="x-large">{product.name}</h1>
                            <h2 className="product-info-text">{product.manufactorer}</h2>
                            <h2 className="product-info-text">{product.atribute.name} : {product.atribute.value}</h2>
                            <h2 className="product-info-text">Price: $ {product.price}</h2>
                            <div className="add-to-cart">
                                <h2 className="add-to-cart-text">Add to cart</h2>
                            </div>
                        </div>

                        
                    </div>
                    <p className="product-description-text">{product.description}</p>
               </div>
            </div>
        </div>
    )
}

export default ProductInfo
