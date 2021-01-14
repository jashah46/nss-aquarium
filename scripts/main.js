console.log("Hello and welcome to Martin's Aquarium")

import {FishList} from './fishList.js'
import {useFish} from './FishDataProvider.js'


const allTheFish = useFish()
console.log("arrays of fish objects", allTheFish)
for (const fish of allTheFish) {
    console.log(fish)
}

FishList()

