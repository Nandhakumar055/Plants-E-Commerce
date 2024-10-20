import { Link } from 'react-router-dom';
import './index.css'
import { IoMdHeartEmpty } from "react-icons/io";


const ProductItem = (props) => {
    const { productDetails } = props
    const { productName, productImage, productDescription, productSellingPrice, productPrice, productRating, } = productDetails

    return(
        <li className='product-main-item'>
            <div className='product-item'>
                <div className='product-image-container'>
                    <img src={productImage} alt='product' className='product-image' />
                    <IoMdHeartEmpty size={25} color='gray' className='like-icon'/>
                </div>
                <Link to="/thank-you" className='view-product-btn'>
                    View Product
                </Link>
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
                
                    <button data-modal-target="small-modal" data-modal-toggle="small-modal" class="add-cart-btn text-center" type="button">
                        + Add to cart
                    </button>
                    
                    <div id="small-modal" tabindex="-1" class="card-cart-container fixed top-0 left-0 right-0 z-50 hidden w-full p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-[calc(100%-1rem)] max-h-full">
                        <div class="relative w-full max-w-md max-h-full">
                            
                            <div class="relative bg-white shadow dark:bg-gray-700">
        
                                <div class="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600 w-full">
                                    <h3 class="text-md text-center w-full font-medium text-green-900 dark:text-white">
                                        Your Cart
                                    </h3>
                                    <button type="button" class="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white" data-modal-hide="small-modal">
                                        <svg class="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"/>
                                        </svg>
                                        <span class="sr-only">Close modal</span>
                                    </button>
                                </div>
                            
                                <div className="cart-container">
                                    <h1>Congratulations Order Placed!</h1>
                                    <img src='https://res.cloudinary.com/dhoeemazz/image/upload/v1729443849/plant_1_bqwkre.png' alt='leaf' />
                                    <p>Thank you for choosing Chaperone services.
                                    We will soon get in touch with you!</p>
                                    <button data-modal-hide="small-modal" type="button">CONTINUE SHOPPING</button>
                                    <img src='https://res.cloudinary.com/dhoeemazz/image/upload/v1729447339/Ellipse_41_gv5mcu.png' className='cart-bg-image-1' alt='cart'/>    
                                    <img src='https://res.cloudinary.com/dhoeemazz/image/upload/v1729447326/Ellipse_40_xcb7u8.png' className='cart-bg-image-2' alt='cart'/>   
                                </div>
                            
                            </div>
                        </div>
                    </div>




                    <button type='button' className='buy-on-rent-btn'>Buy on Rent</button>
                </div>
            </div>
        </li>
    )
}

export default ProductItem