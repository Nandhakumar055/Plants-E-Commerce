
import './index.css'
import { useState } from 'react';
import { LuUser2 } from "react-icons/lu";
import { CiSearch } from "react-icons/ci";
import { PiPlantFill } from "react-icons/pi";
import { GiHamburgerMenu } from "react-icons/gi";
import { BsCart3 } from "react-icons/bs";

const Header = () => {
   

   
    return(
        <div className='header-section-container'>
            <div className='top-header'>
                <p>Free Shipping on orders above 999/-</p>
                <p>call us on +919958287272</p>
            </div>
            <div className='bottom-header-container'>
                
                <img src='https://res.cloudinary.com/dhoeemazz/image/upload/v1729348159/Group_59_jngmod.png' className='logo-image' alt='logo' />
                
                <div className='header-nav-item-container heaader-lg-view'>
                    <div className='nav-item'>
                        <p>Home</p>
                        <p>Plants & Pots</p>
                        <p>Tools</p>
                        <p>Our Services</p>
                        <p>Blog</p>
                        <p>Our Story</p>
                        <p>FAQs</p>
                    </div>
                    <div className='search-container'>
                        <CiSearch size={25}/>
                        <input type='search' placeholder='Search Plant' />
                        <PiPlantFill size={25}/>
                    </div>
                </div>
                <div className='profile-and-cart-container' >
                    <div className='profile-and-cart'>
                        <LuUser2 size={21}/>
                        <p>My Profile</p>
                    </div>
                    <div className='profile-and-cart'>
                        <BsCart3  size={21}/>
                        <p>Cart</p>
                    </div>
                    
                    <div className='side-bar'>
                        {/* <!-- drawer init and show --> */}
                        
                        <button className="focus:outline-none" type="button" data-drawer-target="drawer-navigation" data-drawer-show="drawer-navigation" aria-controls="drawer-navigation">
                            <GiHamburgerMenu size={25} color='black'/>
                        </button>
                        

                        {/* <!-- drawer component --> */}
                        <div id="drawer-navigation" className="fixed top-0 left-0 z-40 w-64 h-screen p-4 overflow-y-auto transition-transform -translate-x-full bg-[#c8ffa3]" tabindex="-1" aria-labelledby="drawer-navigation-label">
                            <h5 id="drawer-navigation-label" className="text-base font-semibold text-gray-500 uppercase dark:text-gray-400">Menu</h5>
                            <button type="button" data-drawer-hide="drawer-navigation" aria-controls="drawer-navigation" className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 absolute top-2.5 end-2.5 inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white" >
                                <svg aria-hidden="true" className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                                <span className="sr-only">Close menu</span>
                            </button>
                            <div className="py-4 overflow-y-auto">
                                <ul className="space-y-2 font-medium">
                                    <li>
                                        <a href="#" className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
                                        <span className="ms-3">Home</span>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#" className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
                                        <span className="flex-1 ms-3 whitespace-nowrap">Plants & Pots</span>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#" className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
                                        <span className="flex-1 ms-3 whitespace-nowrap">Tools</span>
                                        <span className="inline-flex items-center justify-center w-3 h-3 p-3 ms-3 text-sm font-medium text-blue-800 bg-blue-100 rounded-full dark:bg-blue-900 dark:text-blue-300">3</span>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#" className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
                                        <span className="flex-1 ms-3 whitespace-nowrap">Our Services</span>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#" className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
                                        <span className="flex-1 ms-3 whitespace-nowrap">Blog</span>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#" className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
                                        <span className="flex-1 ms-3 whitespace-nowrap">Our Story</span>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#" className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
                                        <span className="flex-1 ms-3 whitespace-nowrap">FAQs</span>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#" className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
                                        <div className='search-container'>
                                            <CiSearch size={25}/>
                                            <input type='search' placeholder='Search Plant' />
                                            <PiPlantFill size={25}/>
                                        </div>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>


                </div>
            </div>
            
           
        </div>
    )
}

export default Header
