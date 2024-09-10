import {BsInstagram, BsFacebook, BsLinkedin, BsTwitter} from 'react-icons/bs';
import {FaInstagram} from 'react-icons/fa'
import Link from 'next/link';
import {GoMail } from 'react-icons/go';
import {IoIosPhonePortrait} from 'react-icons/io';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { BiLinkExternal } from 'react-icons/bi';

        {/* <p className='footer-contact'><GoMail className='footer-contact-icon' /> info@cleoexteriors.com</p>
        <p className='footer-contact'><IoIosPhonePortrait className='footer-contact-icon' /> (203) 822-2311</p> */}
      //   <div className='footer-links'>
      //   <div className='footer-links-header'><p className='footer-link-header'>Support</p></div>
      //   <div className='footer-link'><Link href='/'>Privacy Policy</Link></div>
      //   <div className='footer-link'><Link href='/'>Terms of Use</Link></div>
      //   <div className='footer-link'><Link href='/'>FAQs</Link></div>
      // </div>
          {/* <div className='footer-copyright'>
      <p className='footer-copyright-content'>Copyright © {new Date().getFullYear()} Brandon Luffman - All Rights Reserved.</p>
    </div> */}
          {/* <div className='footer-links'>
        <p className='footer-contact-content-header footer-link-header'>Contact</p>
      </div> */}
            {/* <div className='footer-socials'>
      </div> */}
            {/* <img src='/logo.png' className='footer-img' alt='Brand Logo'></img> */}


const Footer = () => {
  return (
    <div>
      <div className="footer-container">

          <div className='footer-brand-div'>
          {/* <div className="brand-logo"><img src='/ghost.png'></img></div> */}

            {/* <div className="brand-logo footer-brand-logo"></div> */}
            <Link href="https://www.linkedin.com/in/brandon-luffman10/" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faLinkedin} className='linkedin-icon'/>
            </Link>
            <div className='footer-links'>
                {/* <div className='footer-links-header'><p className='footer-link-header'>General</p></div> */}
                <div className='footer-link'><Link href='/'>Home</Link></div>
                {/* <div className='footer-link'><Link href='#about'>About</Link></div> */}
                <div className='footer-link'><Link href="/Luffman_Resume.pdf" passHref target="_blank">Resume <BiLinkExternal className="resume-icon" /></Link></div>
                <div className='footer-link'><Link href='#portfolio'>Portfolio</Link></div>
                {/* <div className='footer-link'><Link href='/contact'>Contact Me</Link></div> */}
            </div>
          </div>

          {/* <div className='footer-links-container'>
            <div className='footer-links'>
                <div className='footer-links-header'><p className='footer-link-header'>General</p></div>
                <div className='footer-link'><Link href='/'>Home</Link></div>
                <div className='footer-link'><Link href='/about'>About</Link></div>
                <div className='footer-link'><Link href='/resume'>Resume</Link></div>
                <div className='footer-link'><Link href='/contact'>Contact Me</Link></div>
            </div>
          </div> */}

      </div>
    </div>
  )
}

export default Footer;