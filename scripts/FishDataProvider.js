const fishCollection = [
    {
    name: "Bart",
    food: "crustaceans",
	color: "red",
	home:  "reef",
    species: "Simpson",
    length: 5,
    }, 
    {
    name: "Homer",
    food: "squid",
    color: "yellow",
    home:  "Spring River",
    species: "father",
    length: 3,
    },
    {
    name: "Iron Man",
    food:  "Thanos",
    color: "red",
    home:  "NYC",
    species: "Avengers",
    length: 7,
    },
    {
    name:  "Marlin",
    food: "seafood",
    color: "gray",
    home: "Great Barrier Reef, Australia",
    species: "Amphiprioninae",
    length: 10,
    },
    { 
    name: "Nemo",
    food: "seafood",
    color: "Red and Yellow",
    home:  "Great Barrier Reef, Australia",
    species: "Amphiprioninae",
    length: 15,
}
]
export const useFish = () => {
    return fishCollection.slice()
}