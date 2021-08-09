import ProfessionSection from "./ProfessionSection";
import AboutMeSection from "./AboutMeSection";

function BannerSection(){
    return (
        <div className="about-me-section">
            <div className="first-name-container">
                <p className="first-name-p">Daniel</p>
            </div>

            <div className="name-details-container">
                <div className="last-name-container">
                    <p className="last-name-p">Fratila</p>
                    <ProfessionSection/>
                    <AboutMeSection/>
                </div>


                <div className="profile-image-section">
                    <div className="profile-image-container">
                        <img src="/dani.png" alt="Daniel Fratila"/>
                    </div>
                    <div id="remaining-space-div"></div>
                </div>
            </div>
        </div>
    );
}

export default BannerSection;
