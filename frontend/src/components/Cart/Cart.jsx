import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { CartContext } from "../../Contexts/CartContext";
import './index.css'
const Cart = () => {
    const {myCart, total, addToCart, setTotal} = useContext(CartContext)
    const navigate = useNavigate()
    //home: navigation



    const handleCheckOut = ()=>{
        //console.log('test');
        setTotal(0)
        addToCart([{}])

    }

    const handleHome = ()=>{
        //console.log('test');
        navigate("/")
    }
    return ( 

        <>
            <section className="cart-container">
                <div className="cart-header">
                    Thanh Toán:
                </div>
                <div className="cart-items">
                    {myCart.slice(1).map((item) => {
                        return(
                            <div className="cart-item">
                                <img src={item.imageUrl} className='cart-item-img' />
                                    {item.name} : {item.price}$
                            </div>
                        )
                    })}
                    <div className="cart-total">
                        Tổng tiền: {total}$
                    </div>
                </div>
                
                <button className="cart-checkout" onClick={handleCheckOut}>
                    Xóa
                </button>
                <button className="cart-gohome" onClick={handleHome}>
                    Về trang chủ
                </button>
                
            </section>
        </>
     );
}
 
export default Cart;