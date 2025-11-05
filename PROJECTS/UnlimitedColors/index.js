let intervalId, stopper;  // store the interval ID here

const boddy = document.querySelector('.boddy');

function changeColor() {
    const randomColor = `rgb(${Math.floor(Math.random() * 256)}, 
                             ${Math.floor(Math.random() * 256)}, 
                             ${Math.floor(Math.random() * 256)})`;
    boddy.style.backgroundColor = randomColor;
}

document.querySelector('#start').addEventListener('click', function() {
    console.log("Start was clicked");

    // Change color every 1 second
    intervalId = setInterval(changeColor, 1000);
});

document.querySelector('#stop').addEventListener('click', function() {
    console.log("Stopped was clicked");
    clearInterval(intervalId);

    // Optional delayed stop message and color reset
    stopper = setTimeout(function() {
        console.log("Interval stopped");
        boddy.style.backgroundColor = "rgba(214, 194, 194, 1)";
    }, 5000);
});
