function doSomething(){
    console.log('I am coding JS');
}

console.log('First: I am the 1st one');
console.log('Second: I am the 2nd');
// setTimeout(doSomething, 5000);
setTimeout(() => {
    console.log('I am using vscode');
}, 5000);
setTimeout(() => {
    console.log('Exploring MDN articles');
}, 4000);
console.log('Third: I am the 3rd');
console.log('Fourth: I am the 4th');

// settimeout asynchronous vabe kaj kore