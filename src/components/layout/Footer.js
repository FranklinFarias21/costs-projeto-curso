import {FaFacebook, FaInstagram, FaLinkedin} from 'react-icons/fa'
import './Footer.css'

const Footer = () => {
    return (
        <footer className='footer'>
            <ul className='social_list'>
                <li><FaFacebook/></li>
                <li><FaInstagram/></li>
                <li><FaLinkedin/></li>
            </ul>
            <p className='copy_right'><span>Costs</span> &copy; 2023</p>
        </footer>
    )
}

export default Footer