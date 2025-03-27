import { useState, useEffect } from 'react';
import StarshipSearch from './components/StarshipSearch/StarshipSearch';
import StarshipList from "./components/StarshipList/StarshipList";
import * as starshipService from './services/starshipService';




const App = () => {
  const [starshipData, setStarshipData] = useState([]);
  const [displayedStarships, setDisplayedStarships] = useState([]);

  // Fetch starships when component mounts
  useEffect(() => {
    const fetchStarships = async () => {
      try {
        const ships = await starshipService.index();
        setStarshipData(ships); // Save the original data
        setDisplayedStarships(ships); // Set the same data to displayed ships initially
      } catch (error) {
        console.error("Error fetching starships:", error);
        // add error handling here?
      }
    };

    fetchStarships();
  }, []); // Empty dependency array means this runs once when component mounts


  // Single function to handle both search and reset
  const handleSearch = (term) => {
    // Filter starships based on the search term
    // An empty string will match all starships (used for reset)
    const filteredStarships = starshipData.filter((ship) =>
      ship.name.toLowerCase().includes(term.toLowerCase())
    );

    // Update the displayed starships with filtered results
    setDisplayedStarships(filteredStarships);
  };


  return (
    <main>
      <h1>Star Wars Starships</h1>
      <StarshipSearch
        onSearch={handleSearch}
        displayedStarships={displayedStarships}
      />
      <StarshipList starships={displayedStarships} />
    </main>
  );
}

export default App;
