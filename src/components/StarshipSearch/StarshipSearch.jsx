import { useState } from 'react';

const StarshipSearch = ({ onSearch, displayedStarships }) => {
    // State for the current input value
    const [searchTerm, setSearchTerm] = useState("");
    // State to track the previous search term to display to user
    const [prevSearchTerm, setPrevSearchTerm] = useState("");
    // State to track if search is active (for showing reset button and metadata message)
    const [isSearchActive, setIsSearchActive] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();  // Stops the browser from refreshing the page on form submit

        // Only process if the search term contains non-whitespace characters
        if (searchTerm.trim()) { // remove whitespace from beginning and end of the input
            // if there's valid search text, call the search function from App component
            onSearch(searchTerm);

            // Save current search term for reference in the UI
            setPrevSearchTerm(searchTerm);

            // Set search as active to show reset button
            setIsSearchActive(true);

            // Reset input field for next search
            setSearchTerm("");
        }
    };

    const handleReset = () => {
        // Use onSearch with empty string to show all starships
        // This works because filtering with "" matches all items
        onSearch("");

        // Reset search states
        setIsSearchActive(false);  // Hide the reset button
        setPrevSearchTerm(""); // Clear the previous search term
    };

    return (
        <div>
            {/* Search metadata section */}
            <div className="search-meta">
                {/* Always shows the count of current results */}
                <p> Number of results: {displayedStarships.length} </p>
                {/* Conditionally shows either search results info or default message */}
                <p>
                    {isSearchActive
                        ? `Search results for: "${prevSearchTerm}"` // Show this when there's an active search
                        : "Search for a starship:"} {/* show this when no search is active */}
                </p>

            </div>

            {/* Search form */}
            <form onSubmit={handleSubmit}>

                <input
                    type="text"
                    id="starship-search"
                    name="starship-search"
                    placeholder="Search starships..."
                    value={searchTerm} // Value is always synced with state
                    onChange={(e) => setSearchTerm(e.target.value)} // Update state on every keystroke
                />
                <button type="submit">Search</button>

                {/* Only shows the reset button when isSearchActive is true */}
                {isSearchActive && (
                    <button type="button" onClick={handleReset}>Show All Starships</button>
                )}

            </form>
        </div>
    );
};











export default StarshipSearch;