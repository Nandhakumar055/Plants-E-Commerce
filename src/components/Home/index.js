import './index.css'
import Header from '../Header'
import Footer from '../Footer'
import { useState } from 'react'
import { LuArrowBigDownDash, LuArrowBigUpDash } from "react-icons/lu";
import Products from '../Products';


const filterCategoriesList = [
    {
        id: 1,
        category: "Type of Plants",
    },
    {
        id: 2,
        category: "Price",
    },
    {
        id: 3,
        category: "Nursery",
    },
    {
        id: 4,
        category: "Ideal Plants Location",
    },
    {
        id: 5,
        category: "Indoor/ Outdoor",
    },
    {
        id: 6,
        category: "Maintenance",
    },
    {
        id: 7,
        category: "Plant Size",
    },
    {
        id: 8,
        category: "Water Schedule",
    },
    {
        id: 9,
        category: "Color",
    },
    {
        id: 10,
        category: "Seasonal",
    },
    {
        id: 11,
        category: "Light Efficient",
    },
];


const nurseryItemList = [
    {
        id: 1,
        image : 'https://res.cloudinary.com/dhoeemazz/image/upload/v1729413617/Ellipse_68_qzujyi.png',
        text : 'Lorem ipsum dolor sit amet. Aut ipsam illum et nostrum   ',
    },
    {
        id: 2,
        image : 'https://res.cloudinary.com/dhoeemazz/image/upload/v1729413578/Ellipse_69_yxvacy.png',
        text : 'Lorem ipsum dolor sit amet. Aut ipsam illum et nostrum   ',
    },
    {
        id: 3,
        image : 'https://res.cloudinary.com/dhoeemazz/image/upload/v1729413555/Ellipse_70_fxzp4t.png',
        text : 'Lorem ipsum dolor sit amet. Aut ipsam illum et nostrum   ',
    },
    {
        id: 4,
        image : 'https://res.cloudinary.com/dhoeemazz/image/upload/v1729413538/Ellipse_71_kjmd6j.png',
        text : 'Lorem ipsum dolor sit amet. Aut ipsam illum et nostrum   ',
    },
    {
        id: 5,
        image : 'https://res.cloudinary.com/dhoeemazz/image/upload/v1729413522/Ellipse_62_vm1nwf.png',
        text : 'Lorem ipsum dolor sit amet. Aut ipsam illum et nostrum   ',
    },
    {
        id: 6,
        image : 'https://res.cloudinary.com/dhoeemazz/image/upload/v1729413617/Ellipse_68_qzujyi.png',
        text : 'Lorem ipsum dolor sit amet. Aut ipsam illum et nostrum   ',
    },
    {
        id: 7,
        image : 'https://res.cloudinary.com/dhoeemazz/image/upload/v1729413578/Ellipse_69_yxvacy.png',
        text : 'Lorem ipsum dolor sit amet. Aut ipsam illum et nostrum   ',
    },
    {
        id: 8,
        image : 'https://res.cloudinary.com/dhoeemazz/image/upload/v1729413555/Ellipse_70_fxzp4t.png',
        text : 'Lorem ipsum dolor sit amet. Aut ipsam illum et nostrum   ',
    },
    {
        id: 9,
        image : 'https://res.cloudinary.com/dhoeemazz/image/upload/v1729413538/Ellipse_71_kjmd6j.png',
        text : 'Lorem ipsum dolor sit amet. Aut ipsam illum et nostrum   ',
    },
    {
        id: 10,
        image : 'https://res.cloudinary.com/dhoeemazz/image/upload/v1729413522/Ellipse_62_vm1nwf.png',
        text : 'Lorem ipsum dolor sit amet. Aut ipsam illum et nostrum   ',
    },
    {
        id: 11,
        image : 'https://res.cloudinary.com/dhoeemazz/image/upload/v1729413617/Ellipse_68_qzujyi.png',
        text : 'Lorem ipsum dolor sit amet. Aut ipsam illum et nostrum   ',
    },
    
]


const Home = () => {
    const [btnToggle, setBtnToggle] = useState(false)
    const [filterToggle, setFilterToggle] = useState(false)

    const onclickBtn = () => {
        setBtnToggle(!btnToggle)
    }

    const onClickFilterToggle = () => {
        setFilterToggle(!filterToggle);
    };

    

    const isUpArrow = filterToggle
        ? (<LuArrowBigUpDash className="arrow-icons" size={20} />)
        : (<LuArrowBigDownDash className="arrow-icons" size={20} />);

    const isDisplayFilterItems = filterToggle
        ? "sm-filter-items-main-container"
        : "not-display-filter-items-conntainer"; 

    return(
        <div className='home-section-container'>
            <Header/>
            <div className='home-container'>
                <div className='button-container'>
                    <button type='button' className={btnToggle ? 'active-btn' : 'non-active-btn'} onClick={onclickBtn}>Plants</button>
                    <button type='button' className={btnToggle ? 'non-active-btn' : 'active-btn' } onClick={onclickBtn}>Pots</button>
                </div>
                <p className='home-description'>Lorem ipsum dolor sit amet. Aut ipsam illum et nostrum quidem aut necessitatibus enim ut internos accusantium a numquam autem ab rerum omnis. Non molestiae ratione et laborum doloribus aut molestiae voluptates ut porro excepturi sit molestiae obcaecati qui quis beatae est voluptatem eius. Et architecto nihil id labore omnis hic iste deleniti et porro aspernatur.</p>
                
                <h1 className='nursery-heading'>Nursery</h1>
                <ul className='nursery-main-container'>
                    {nurseryItemList.map(eachItem => (
                        <li className='nursery-item'>
                            <img src={eachItem.image} alt='nursery'/>
                            <p>{eachItem.text}</p>
                        </li>
                    ))}
                </ul>

                <div className="small-device-filters-section-container">
                    <div className="filter-heading-container" onClick={onClickFilterToggle}>
                        <h1 className='filter-heading-button'>FILTER</h1>
                        {isUpArrow}
                    </div>
                    <div className='filter-select-container'>
                        <select className='filter-select'>
                            <option id="SortBy" className='filter-option'>SORT BY</option>
                            <option id="NewestFirst" className='filter-option'>NEWEST FIRST</option>
                            <option id="Popular" className='filter-option'>POPULAR</option>
                            <option id="HighToLow" className='filter-option'>HIGH TO LOW</option>
                            <option id="LowToHigh" className='filter-option'>LOW TO HIGH</option>
                        </select>
                    </div>
                </div>

                <div className='filter-and-product-section-container'>
                    {/* {'Mobile View'} */}

                    <div className={isDisplayFilterItems}>
                        <ul className="filter-items-container">
                            {filterCategoriesList.map(eachCategory => (
                                <li 
                                    className='filter-item'
                                    key={eachCategory.id} 
                                >
                                    <p>{eachCategory.category}</p>
                                    <p>+</p>
                                </li>
                            ))}
                        </ul>
                    </div>
                    {/* {'Laptop View'} */}

                    <div className='lg-filter-items-main-container'>
                        <div className='filter-items-main-container'>
                            <div className='fiter-item-heading'>
                                <p>Filter</p>
                                <p>CLEAR ALL</p>
                            </div>
                            <ul className="filter-items-container">
                                {filterCategoriesList.map(eachCategory => (
                                    <li 
                                        className='filter-item'
                                        key={eachCategory.id} 
                                    >
                                        <p>{eachCategory.category}</p>
                                        <p>+</p>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                    <Products/>
                </div>

            </div>
            <Footer/>
        </div>
    )
}

export default Home
