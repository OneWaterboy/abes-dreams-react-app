import FacebookIcon from '../../media/Facebook_Logo_Primary.png';
import InstagramIcon from '../../media/Instagram_Glyph_Gradient.png';

function SocialMediaLinks(){
    return(
        <div className="social-media">
            <a href="https://www.facebook.com/abrahm.rollins" rel="noreferrer" target="_blank"><img src={FacebookIcon} alt="Facebook Logo" /></a>
            <a href="https://www.instagram.com/abes.dreams/" rel="noreferrer" target="_blank"><img src={InstagramIcon} alt="Instagram Logo"/></a>
        </div>
    )
}

export default SocialMediaLinks;