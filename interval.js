console.log('First: I am the 1st one');
// setInterval(()=>{
//     console.log('Third');
// }, 3000)

let seconds = 0;
const timeIntervalId = setInterval(()=>{
 console.log(seconds++);
 if(seconds>7){
     clearInterval(timeIntervalId);
 }
}, 1000)
console.log('Second: I am the 2nd');

// setinterval bar bar choltei thake. settimeout er moto ekbar cholei off hoye jaay naa. setinterval ekta jinis return kore. etake bola hoy time-id. ei id taake kno ekta condition use kore interval er process k off kora jaay clearInterval function er maddhome.