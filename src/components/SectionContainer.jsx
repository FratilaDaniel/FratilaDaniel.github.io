
function SectionContainer({title, content}){
    return (
        <section className="section-container">
            <h2>{title}</h2>
            <div className="content-wrapper">
                <div className="content-container">
                    {content}
                </div>
            </div>
            
        </section>
    );
}

export default SectionContainer;