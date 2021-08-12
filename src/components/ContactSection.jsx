import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';

function ContactSection(){
    return (
        <div className="contact-container" id="contact">
            <h2>Contact</h2>

            <p className="contact-info-p">You can contact me anytime via <a href="https://www.linkedin.com/in/daniel-fratila-369910149/">
                    LinkedIn
                </a>
            </p>
            <p className="contact-info-p">Or email: danfratila1997@gmail.com</p>
            <p className="contact-info-p">Check out my <a href="https://github.com/FratilaDaniel">Github</a> profile for more awesome projects!</p>
            
            <p className="git-link-images-container">
                <a href="https://github.com/FratilaDaniel" aria-label="Github">
                    <GitHubIcon fontSize="large"/>
                </a>
                <a href="https://www.linkedin.com/in/daniel-fratila-369910149/" aria-label="LinkedIn">
                    <LinkedInIcon className="contact-li-img" fontSize="large"/>
                </a>
            </p>
            
        </div>
    );
}

export default ContactSection;
