import React,{ useState,useEffect,useContext }  from 'react'
import AddIcon from '@material-ui/icons/Add';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Aos from 'aos';
import "aos/dist/aos.css";
import { Link } from "react-router-dom";
import context from "../Context/context";

const Home = ()=> {

    const {globalState,globalDispatch} = useContext(context);

    useEffect(()=>{
        Aos.init({duration:2000})
    },[])

    const [products, setProduct] = useState([{
        
    name: "Playstation 5",
    price: 500,
    img:"https://games4u.pk/wp-content/uploads/2021/06/Sony-PlayStation-5-Disc-Edition.png",
    sale:450.99,
    manufactorer:"Sony",
        atribute:{
            name:"Storage",
            value:"1tb"
        },
        description:"The PlayStation 5 (PS5) is a home video game console developed by Sony Interactive Entertainment. Announced in 2019 as the successor to the PlayStation 4, the PS5 was released on November 12, 2020"


},
/*Hidden*/ 

{
   name: "Cannon 5D MK IV",
    price: 900.50, 
    img:"http://www.ibserviss.lv/623-thickbox_default/canon-eos-5d-mark-iv.jpg",
    sale:0,
    manufactorer:"Sony",
        atribute:{
            name:"Storage",
            value:"1tb"
        },
        description:"The PlayStation 5 (PS5) is a home video game console developed by Sony Interactive Entertainment. Announced in 2019 as the successor to the PlayStation 4, the PS5 was released on November 12, 2020"

},
{
   name: "Google Home mini",
    price: 99.99,
    img:"https://lh3.googleusercontent.com/7pq6Fhyz_qUGO8ORh6y0Bn6g7lRSBg3yHkNBXmt51g-mc2Viuv6LMjk4E0NXZGI7Rk4",
    sale:45.55,
    manufactorer:"Sony",
        atribute:{
            name:"Storage",
            value:"1tb"
        },
        description:"The PlayStation 5 (PS5) is a home video game console developed by Sony Interactive Entertainment. Announced in 2019 as the successor to the PlayStation 4, the PS5 was released on November 12, 2020"

},
{
    name: "Xbox One",
    price: 320.99,
    img:"https://news.microsoft.com/wp-content/uploads/sites/439/2016/12/XboxOneS_CnsleCntrllr_Hrz_FrntTlt_TransBG_RGB.png",
    sale:300.99,
    manufactorer:"Sony",
        atribute:{
            name:"Storage",
            value:"1tb"
        },
        description:"The PlayStation 5 (PS5) is a home video game console developed by Sony Interactive Entertainment. Announced in 2019 as the successor to the PlayStation 4, the PS5 was released on November 12, 2020"


},
{
   name: "Nintento Switch",
    price: 225.99, 
    img:"https://m.media-amazon.com/images/I/41aaQR4AxkL.jpg",
    sale:180.99,
    manufactorer:"Sony",
        atribute:{
            name:"Storage",
            value:"1tb"
        },
        description:"The PlayStation 5 (PS5) is a home video game console developed by Sony Interactive Entertainment. Announced in 2019 as the successor to the PlayStation 4, the PS5 was released on November 12, 2020"

},
{
   name: "NVIDIA RTX 2080 Ti",
    price: 9999.99,
    img:"https://m.media-amazon.com/images/I/8188NNMGDOL._AC_SL1500_.jpg",
    sale:0,
    manufactorer:"Sony",
        atribute:{
            name:"Storage",
            value:"1tb"
        },
        description:"The PlayStation 5 (PS5) is a home video game console developed by Sony Interactive Entertainment. Announced in 2019 as the successor to the PlayStation 4, the PS5 was released on November 12, 2020"

}]);


    return (
        <div className="main-box">
            <div className="content-box">
                <h2 className="sale-text">AUTUMN SALE</h2>
                    <hr className="content_seperator_line"/>
                    <div className="sale-description " style={{paddingTop:"6rem"}}>
                        <h3 >UP TO 50%</h3>
                        <h3 style={{paddingBottom:"2rem"}}>SEE THE DEALS BELLOW</h3>
                        <div style={{paddingBottom:"5rem"}}>
                            <ExpandMoreIcon className="svg_icons"/>
                        </div>
                    </div>
                        <div data-aos="fade-up" className="grid-4 py-3">
                            {products.map((product) => {
                                return(
                                <Link to = {`/product/${product.name}`} onClick={()=> globalDispatch({type:"SELECT_ITEM",payload:{product}})}>
                                    <div className="product-card ">
                                        <div className="card_content flex-collumn">
                                            <div className="all-center">
                                                <img src={product.img} alt="" className="product-img "/>
                                            </div>
                                                <div className="card_info_box">
                                                    <div className="card_discription">
                                                        <h2 className="prdouct-name">{product.name}</h2>
                                                        <div className="flex-row">
                                                            {product.sale>0?
                                                            <h3 className="prdouct-price" style={{textDecoration:"line-through red"}}>$ {product.price}</h3>
                                                            :
                                                            <h3 className="prdouct-price">$ {product.price}</h3>
                                                            }
                                                            {product.sale>0?<h3 className="prdouct-price-sale" style={{paddingLeft:"1rem"}}>$ {product.sale}</h3>:<h3> </h3>}
                                                        </div>
                                                    </div>
                                                    <div className="card_add_product">
                                                        <AddIcon color="secondary" fontSize="large" />
                                                    </div>
                                                </div>
                                            
                                        </div>
                                    </div>
                                </Link>)
                                
                            })}
                    </div>
            </div>
        </div>
    )
}

export default Home
