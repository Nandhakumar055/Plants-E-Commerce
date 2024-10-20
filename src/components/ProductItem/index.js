import './index.css'
import { IoMdHeartEmpty } from "react-icons/io";


const ProductItem = (props) => {
    const { productDetails } = props
    const { productName, productImage, productDescription, productSellingPrice, productPrice, productRating, isLike } = productDetails

    return(
        <li className='product-main-item'>
            <div className='product-item'>
                <div className='product-image-container'>
                    <img src={productImage} alt='product' className='product-image' />
                    <button type='button' className='view-product-btn'> View Product</button>
                    <IoMdHeartEmpty size={25} color='gray' className='like-icon'/>
                </div>
                <h1 className='product-name'>{productName}</h1>
                <p className='product-description'>{productDescription}</p>
                <div className='rating-container'>
                    <img src="https://res.cloudinary.com/dhoeemazz/image/upload/v1729408069/image_10_pbalzs.png"alt='star' />
                    <p>{productRating}</p>
                </div>
                <div className='price-container'>
                    <p className='price'>$ {' '} {productPrice}</p>
                    <p className='selling-price'>$ {' '} {productSellingPrice}</p>
                </div>
                <div className='product-btn-container'>
                    <button type='button' className='add-cart-btn'> - Add to cart</button>
                    <button type='button' className='buy-on-rent-btn'>Buy on Rent</button>
                </div>
            </div>
        </li>
    )
}

export default ProductItem