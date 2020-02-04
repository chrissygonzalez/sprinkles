const sprinkles = document.getElementById('sprinkles');
const sprinklesWidth = sprinkles.offsetWidth;
const sprinklesHeight = sprinkles.offsetHeight;

const colors = ['#fff', '#5a90dc', '#f6e652', '#eb3dba', '#f90', '#fddeff', '#53cfb2', '#bfd98f'];
const getRandomNumber = (max) => {
    return Math.floor(Math.random() * max);
}

let allSprinkles = [];

class Sprinkle {
    constructor() {
        this.angle = getRandomNumber(181);
        this.color = colors[getRandomNumber(colors.length)];
        this.leftOffset = getRandomNumber(sprinklesWidth);
        this.topOffset = getRandomNumber(sprinklesHeight);
    }
}

Sprinkle.prototype.createSprinkle = function(){
    let newSprinkle = document.createElement('div');
    newSprinkle.classList.add('sprinkle');
    newSprinkle.style.transform=`rotate(${this.angle}deg)`;
    newSprinkle.style.left=`${this.leftOffset - 150}px`;
    newSprinkle.style.top=`${this.topOffset - 30}px`;
    
    let svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
    svg.setAttribute("viewBox", "70.853 230 128.115 40");
    
    let path = document.createElementNS("http://www.w3.org/2000/svg", "path");
    path.setAttribute("d",
        "M70.853 250c0-10.658 8.336-19.368 18.844-19.967V230h91.827v.162c9.839 1.255 17.444 9.658 17.444 19.838 0 10.18-7.605 18.583-17.444 19.838V270H89.697v-.033c-10.508-.599-18.844-9.309-18.844-19.967z");
    path.setAttribute("fill", `${this.color}`);
    
    svg.appendChild(path);
    newSprinkle.appendChild(svg);
    sprinkles.appendChild(newSprinkle);
}

const addSprinkle = () => {
    if (allSprinkles.length >= 100) {
        clearInterval(drawSprinklesID);
        // console.log('done');
    } else {
        let aSprinkle = new Sprinkle;
        aSprinkle.createSprinkle();
        allSprinkles.push(aSprinkle);
    }
}

let drawSprinklesID = window.setInterval(addSprinkle, getRandomNumber(1000));

