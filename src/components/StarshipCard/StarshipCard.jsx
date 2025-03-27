

 // Using destructuring to directly access the starship prop
 // This means we can use starship.name instead of props.starship.name

const StarshipCard = ({ starship }) => {

    return (
        <li>
            <h2>{starship.name}</h2>
            <div>
                <p>Class: {starship.starship_class}</p>
                <p>Manufacturer: {starship.manufacturer}</p>
                <p>Model: {starship.model}</p>
            </div>
        </li>
    );
};



export default StarshipCard;