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

if ( totalspacerequired > area * 0.8 ) {
    console.log("plants need to be destryoed")
}   else if (totalspacerequired >= 0.5 * area && totalspacerequired <= 0.8 * area){
    
    console.log("growth is still being monitored")
} else if ( totalspacerequired <= 0.5 * area ){
    console.log(" we have room for more plants")
}
 
// section 2 
//decalre const var





