import "./reuseable.css"


function Card ({Title, Author, Content ,Date, styles}) {
    return ( 
        <div className={`card-details ${styles}`}>
           <h1>{Title}</h1>
           <h2>{Author}</h2>
           <p>{Content}</p>
           <p>{Date}</p>
        </div>
     );
};
 
export default Card;