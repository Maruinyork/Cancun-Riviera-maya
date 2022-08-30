import React from 'react';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import '../styles/Footer.css';


function Footer() {
    return (
        <div className='footer'>
            <div className='socialMedia'>
                <a href='https://www.instagram.com/' target='blank'><InstagramIcon /></a>
                <a href='https://www.twitter.com/' target='blank'><TwitterIcon /></a>
                <a href='https://www.facebook.com/' target='blank'><FacebookIcon /></a>
                <a href='https://www.linkedin.com/' target='blank'><LinkedInIcon /></a>
            </div>
            <p>&copy; 2022 Cancun-Riviera Maya | Hotel | Todos los derechos reservados</p>
        </div>
    );
}
export default Footer;