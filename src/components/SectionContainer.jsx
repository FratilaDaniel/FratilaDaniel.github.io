
function SectionContainer({title, content}){
    return (
        <section className="section-container">
            <h2>{title}</h2>
            <div className="content-wrapper">
                {content}
            </div>
        </section>
    );
}

export default SectionContainer;