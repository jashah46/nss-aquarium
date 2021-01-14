const fishCollection = [
    {
    name: "Bart",
    food: "crustaceans",
	color: "red",
	home:  "reef",
	species: "Simpson",
    }, 
    {
    name: "Homer",
    food: "squid",
    color: "yellow",
    home:  "Spring River",
    species: "father",
    },
    {
    name: "Iron Man",
    food:  "Thanos",
    color: "red",
    home:  "NYC",
    species: "Avengers",
    },
    {
    name:  "Marlin",
    food: "seafood",
    color: "gray",
    home: "Great Barrier Reef, Australia",
    species: "Amphiprioninae",
    },
    {
    name: "Nemo",
    food: "seafood",
    color: "Red and Yellow",
    home:  "Great Barrier Reef, Australia",
    species: "Amphiprioninae",
}
]
export const useFish = () => {
    return fishCollection.slice()
}