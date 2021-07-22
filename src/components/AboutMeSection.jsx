import ProfessionSection from "./ProfessionSection";

function AboutMeSection(){
    return (
        <div className="about-me-section">
            <div className="first-name-container">
                <p className="first-name-p">Daniel</p>
            </div>

            <div className="name-details-container">
                    <div className="last-name-container">
                        <p className="last-name-p">Fratila</p>
                        <ProfessionSection/>
                        <h3>About me</h3>
                        <p>Magna adipisicing elit est nostrud. Nisi sint nulla cupidatat sit tempor. Ex veniam nisi commodo voluptate pariatur elit voluptate laboris anim dolor veniam consectetur sunt. Nulla qui labore aliqua sint nulla sit magna voluptate laborum aute exercitation. Nisi amet aliqua incididunt qui cillum nisi consequat dolor proident laboris consectetur aute.</p>
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

export default AboutMeSection;
