
import './index.css'
import ProductItem from '../ProductItem'

const productItemDetailsList = [
    {
        id : 1,
        productName : 'Monsterra',
        productDescription : 'Indoor Plant, Low maintenance',
        productImage : 'https://res.cloudinary.com/dhoeemazz/image/upload/v1729403110/e1ce63ff429a0c018fd6e2e5dd614458_s2dprv.png',
        productPrice : '359',
        productSellingPrice: '299',
        productRating : '4.9',
        isLike : false,
    },
    {
        id : 2,
        productName : 'Monsterra',
        productDescription : 'Indoor Plant, Low maintenance',
        productImage : 'https://res.cloudinary.com/dhoeemazz/image/upload/v1729403099/7973d62829a030074ad8b6ad34_wmpcpc.png',
        productPrice : '359',
        productSellingPrice: '299',
        productRating : '4.9',
        isLike : false,
    },
    {
        id : 3,
        productName : 'Monsterra',
        productDescription : 'Indoor Plant, Low maintenance',
        productImage : 'https://res.cloudinary.com/dhoeemazz/image/upload/v1729403095/daa994fdb511faa82ea79a5ef58fbb1a_v5mqox.png',
        productPrice : '359',
        productSellingPrice: '299',
        productRating : '4.9',
        isLike : false,
    },
    {
        id : 4,
        productName : 'Monsterra',
        productDescription : 'Indoor Plant, Low maintenance',
        productImage : 'https://res.cloudinary.com/dhoeemazz/image/upload/v1729403110/e1ce63ff429a0c018fd6e2e5dd614458_s2dprv.png',
        productPrice : '359',
        productSellingPrice: '299',
        productRating : '4.9',
        isLike : false,
    },
    {
        id : 5,
        productName : 'Monsterra',
        productDescription : 'Indoor Plant, Low maintenance',
        productImage : 'https://res.cloudinary.com/dhoeemazz/image/upload/v1729403099/7973d62829a030074ad8b6ad34_wmpcpc.png',
        productPrice : '359',
        productSellingPrice: '299',
        productRating : '4.9',
        isLike : false,
    },
    {
        id : 6,
        productName : 'Monsterra',
        productDescription : 'Indoor Plant, Low maintenance',
        productImage : 'https://res.cloudinary.com/dhoeemazz/image/upload/v1729403095/daa994fdb511faa82ea79a5ef58fbb1a_v5mqox.png',
        productPrice : '359',
        productSellingPrice: '299',
        productRating : '4.9',
        isLike : false,
    },
    {
        id : 7,
        productName : 'Monsterra',
        productDescription : 'Indoor Plant, Low maintenance',
        productImage : 'https://res.cloudinary.com/dhoeemazz/image/upload/v1729403110/e1ce63ff429a0c018fd6e2e5dd614458_s2dprv.png',
        productPrice : '359',
        productSellingPrice: '299',
        productRating : '4.9',
        isLike : false,
    },
    {
        id : 8,
        productName : 'Monsterra',
        productDescription : 'Indoor Plant, Low maintenance',
        productImage : 'https://res.cloudinary.com/dhoeemazz/image/upload/v1729403099/7973d62829a030074ad8b6ad34_wmpcpc.png',
        productPrice : '359',
        productSellingPrice: '299',
        productRating : '4.9',
        isLike : false,
    },
    {
        id : 9,
        productName : 'Monsterra',
        productDescription : 'Indoor Plant, Low maintenance',
        productImage : 'https://res.cloudinary.com/dhoeemazz/image/upload/v1729403095/daa994fdb511faa82ea79a5ef58fbb1a_v5mqox.png',
        productPrice : '359',
        productSellingPrice: '299',
        productRating : '4.9',
        isLike : false,
    },
    {
        id : 10,
        productName : 'Monsterra',
        productDescription : 'Indoor Plant, Low maintenance',
        productImage : 'https://res.cloudinary.com/dhoeemazz/image/upload/v1729403110/e1ce63ff429a0c018fd6e2e5dd614458_s2dprv.png',
        productPrice : '359',
        productSellingPrice: '299',
        productRating : '4.9',
        isLike : false,
    },
    {
        id : 11,
        productName : 'Monsterra',
        productDescription : 'Indoor Plant, Low maintenance',
        productImage : 'https://res.cloudinary.com/dhoeemazz/image/upload/v1729403099/7973d62829a030074ad8b6ad34_wmpcpc.png',
        productPrice : '359',
        productSellingPrice: '299',
        productRating : '4.9',
        isLike : false,
    },
    {
        id : 12,
        productName : 'Monsterra',
        productDescription : 'Indoor Plant, Low maintenance',
        productImage : 'https://res.cloudinary.com/dhoeemazz/image/upload/v1729403095/daa994fdb511faa82ea79a5ef58fbb1a_v5mqox.png',
        productPrice : '359',
        productSellingPrice: '299',
        productRating : '4.9',
        isLike : false,
    },
    {
        id : 13,
        productName : 'Monsterra',
        productDescription : 'Indoor Plant, Low maintenance',
        productImage : 'https://res.cloudinary.com/dhoeemazz/image/upload/v1729403110/e1ce63ff429a0c018fd6e2e5dd614458_s2dprv.png',
        productPrice : '359',
        productSellingPrice: '299',
        productRating : '4.9',
        isLike : false,
    },
    
]


const Products = () => {
    return(
        <div className='product-section-container'>
            <div className='lg-product-count-and-select'>
                <p>300 Products</p>
                <select className='filter-select'>
                    <option id="SortBy" className='filter-option'>SORT BY</option>
                    <option id="NewestFirst" className='filter-option'>NEWEST FIRST</option>
                    <option id="Popular" className='filter-option'>POPULAR</option>
                    <option id="HighToLow" className='filter-option'>HIGH TO LOW</option>
                    <option id="LowToHigh" className='filter-option'>LOW TO HIGH</option>
                </select>
            </div>

            <ul className='product-item-main-container'>
                {productItemDetailsList.map(eachProduct => (
                    <ProductItem productDetails={eachProduct} key={eachProduct.id} />
                ))}
            </ul>
        </div>
    )
}

export default Products