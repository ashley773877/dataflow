const PI = 3.1415;
const radius = 5
const area = PI * radius * radius
console.log(area)

const minimumspaceperplant = 0.8
const initialplants = 20
   let weeks = 10
const weeklygrowth = weeks * initialplants
console.log(weeklygrowth)
const totalspacerequired = weeklygrowth * minimumspaceperplant
console.log (totalspacerequired, area * 0.8)

try{
 if ( totalspacerequired > area * 0.8 ) {
    throw new error("not enough space to accomodate the plants");
    console.log("plants need to be destryoed")
}   else if (totalspacerequired >= 0.5 * area && totalspacerequired <= 0.8 * area){
    console.log("growth is still being monitored");
} else if (totalspacerequired <= 0.5 * area ){
    console.log(" we have room for more plants")
}
 
// section 2 
let cumulativeArea = 0;
let currentPlants = initialplants;

// calculating cumualtive area and radius for each week
for (let week = 1; week <= weeks; week++) {
    const areaReuqired = currentPlants * minimumspaceperplant;
    cumulativeArea += areaReuqired;
    
    currentPlants *= 2; // double the number of plants for the next week 
}
const expandedRadius = Math.sqrt(cumulativeArea / PI);
const additionalSpace = (100 * minimumspaceperplant) - cumulativeArea;

console.log(`Total cumulative area required after ${weeks} weeks: ${cumulativeArea.toFixed(2)} square meters`);
console.log(`Radius of the expanded garden: ${expandedRadius.toFixed(2)} meters`);
console.log(`Additional space required for 100 plants: ${additionalSpace.toFixed(2)} square meters`);

// starting section 3
} catch (error) {
    console.error(error.message);
}
    console.error(error.message);


