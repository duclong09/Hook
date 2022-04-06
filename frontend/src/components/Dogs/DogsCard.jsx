import './index.css'
import {useContext, useState} from 'react'
import { CartContext } from '../../Contexts/CartContext'
const DogsCard = (props) => {
    const {id, name, breed, description, price, imageUrl} = props
    const [isAdded,setAdded] = useState(false)

    const {addToCart, setTotal} = useContext(CartContext)


    const handleClick = ()=>{
        setAdded(true)

        const newItems = {
            name: name,
            price: price,
            imageUrl: imageUrl
        }
        addToCart((item)=> [...item, newItems])
        setTotal((total)=> (total += Number(price)))
    }
    return ( 
        <>
            <section className="dogs">
                <div className="dogs-info">
                    <p>{name}</p>
                    <p>{breed}</p>
                </div>

                <div className="dogs-img-container">
                    <img className="dog-img" src={imageUrl} alt={`picture of: ${name}`}/>
                </div>
                <div className="dogs-desc">
                    {description}
                </div>
                <div className="dogs-price">
                    {price} $
                </div>
                {isAdded ? (
                    <button className="dogs-btn-disabled">
                        Vào giỏ hàng
                    </button>
                ) : (
                    <button className="dogs-btn" onClick={handleClick}>
                        Thêm giỏ hàng
                    </button>
                )}
                
                
            </section>
        </>
    );
}
 
export default DogsCard;