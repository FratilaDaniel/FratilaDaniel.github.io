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

                    {/* <div className="decorations"> */}
                        <div className="decorative-div">
                            <div className="image-div">
                                <img src="/dani.png" alt="Daniel Fratila"/>
                            </div>
                        </div>
                        {/* <div className="decorative-div-2"> random</div> */}
                    {/* </div> */}

            </div>

        </div>
    );
}

export default BannerSection;
