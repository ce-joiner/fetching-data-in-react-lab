import StarshipCard from "../StarshipCard/StarshipCard.jsx"; 

const StarshipList = ({ starships }) => {
    return (
        <section>
            <ul>
                {starships.map(starship => (
                    // For each starship, render a StarshipCard component
                    // key prop is required by React for efficient list rendering
                    // starship prop passes the entire starship object to the card component
                    <StarshipCard key={starship.name} starship={starship} /> 
                ))}
            </ul>
        </section>
    );
};

export default StarshipList;