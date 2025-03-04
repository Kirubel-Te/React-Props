import "./Entry.css"

export default function Entry(props){
    return(
        <article className="article">
            <div className="img-container">
            <img className="main-img"src={props.img.src}alt={props.img.alt}/>
            </div>
            
            <div className="Info-wrapper">
                <img src="src/assets/marker.png" alt="location"/>
                <span>{props.country}</span>
                <a href={props.googleMapsLink}> Our Google map</a>
                <br/><br/>
                <h2>{props.title}</h2><br/>
                <p>{props.dates}</p><br/>
                <p>{props.text}</p>
            </div>
        </article>
    )
}