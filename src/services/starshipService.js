const BASE_URL = 'https://swapi.dev/api';

const index = async () => {
    try {
        const res = await fetch(`${BASE_URL}/starships/`);

        if (!res.ok) {
            // Throw an error if we get a response that doesn't 
            // hold valid starship data.
            throw new Error('Failed to fetch starships.');
        }

        const data = await res.json();
        return data.results;
    } catch (error) {
        console.error("Error fetching starships:", error);
        throw error; // Re-throw to allow handling in the component
    }
};

export { index };