
import './index.css'
import { FiInstagram } from "react-icons/fi";
import { FaFacebook, FaYoutube, FaLinkedin } from "react-icons/fa";
import { BsFillThreadsFill } from "react-icons/bs";

const Footer = () => {
    return(
        <div className='footer-section-container'>
            <div className='footer-main-container'>
                <div className='footer-container'>
                    <div className='footer-nav-item'>
                        <h1>SUBSCRIBE TO OUR NEWSLETTER</h1>
                        <p>Lorem ipsum dolor sit amet. Aut ipsam illum et nostrum quidem aut necesbus enim</p>
                        <input type='email' placeholder='Enter your email address' />
                        <button>SUBSCRIBE</button>
                    </div>
                    <div className='footer-nav-item'>
                        <h1>ABOUT US</h1>
                        <p>Our Story</p>
                        <p>Blogs</p>
                        <p>Careers</p>
                        <p>Contact Us</p>
                        <p>Help & Support</p>
                    </div>
                    <div className='footer-nav-item'>
                        <h1>OUR SERVICEs</h1>
                        <p>Book Maali</p>
                        <p>Plant Day Care</p>
                        <p>Rent Plants</p>
                        <p>Plants & Pots</p>
                        <p>Gardening Tools</p>
                    </div>
                    <div className='footer-nav-item'>
                        <h1>USEFUL LINKS</h1>
                        <p>My Account</p>
                        <p>Orders & Returns</p>
                        <p>Track Order</p>
                        <p>Terms & Conditions</p>
                        <p>Privacy Policy</p>
                        <p>Return, Refund & Replacement Policy</p>
                    </div>
                    <div className='footer-nav-item'>
                        <h1>GET IN TOUCH</h1>
                        <p>Address: F-262, First Floor, Sushant Lok Phase-III, Sector-57, Gurgaon, Haryana, India 122003.</p>
                        <p>Call: +919958287272</p>
                        <p>Email: care@chaperoneplants.com</p>
                    </div>
                </div>
                <h1 className='footer-heading'>
                    CHAPERONE
                </h1>
                <p className='footer-description'>
                    Lorem ipsum dolor sit amet. Aut ipsam illum et nostrum quidem aut necessitatibus enim ut internos accusantium a numquam autem ab rerum omnis. Non molestiae ratione et laborum doloribus aut molestiae voluptates ut porro excepturi sit molestiae obcaecati qui quis beatae est voluptatem eius. Et architecto nihil id labore omnis hic iste deleniti et porro aspernatur.
                </p>
                <h1 className='footer-heading'>
                    Follow us on
                </h1>
                <div className='social-media-container'>
                    <FiInstagram size={20}/>
                    <FaFacebook size={20}/>
                    <BsFillThreadsFill size={20}/>
                    <FaYoutube size={20}/>
                    <FaLinkedin size={20} />
                </div>
                <p className='copy-rights-text'>© 2023, chaperone.com All rights reserved.</p>
            </div>
        </div>
    )
}

export default Footer
