
function SectionContainer({title, content}){
    return (
        <div className="section-container">
            <h2>{title}</h2>
            <div className="content-container">
                {content}
            </div>
        </div>
    );
}

export default SectionContainer;