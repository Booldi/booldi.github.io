const MyHeading = document.querySelector("h1");
//MyHeading.textContent = "Welcome to my first webpage, this text was altered by JavaScript";

document.getElementById("js-message").textContent = 
"If you see this message, I've succesfully altered this page's content with JavaScript."

const imgPepe = document.querySelector("img");

//Make Pepe cry by cliking him
imgPepe.onclick = () => {
    var audio = new Audio("audio/oof.mp3");
    audio.play();
    imgPepe.setAttribute("src", "images/pepe-crying.jpg");
    document.body.style.backgroundColor = "#a93333";
    setTimeout(function (){
        imgPepe.setAttribute("src", "images/pepe.jpg");
        document.body.style.backgroundColor = "#00b542";
        alert("Ouch, pls stop that!!!")
    }, 2000)
}

const buttonDisco = document.getElementById("disco");

//Color-changing disco button
setInterval(function(){
    let rand;
    rand = Math.floor(Math.random() * 6);
    let bgc;
    switch (rand){
        case 0: bgc = "#ff0000";
                break;
        case 1: bgc = "#ffaa00";
                break;
        case 2: bgc = "#ffff00";
                break;
        case 3: bgc = "#00ff00";
                break;
        case 4: bgc = "#0000ff";
                break;
        case 5: bgc = "#aa00aa";
    }
    buttonDisco.style.backgroundColor = bgc;
}, 100)

//Disco mode: Rainbow html background, deepfried wii theme playing on loop
buttonDisco.onclick = () => {

    var wii = new Audio("audio/wii.mp3");
    wii.volume = 0.1;
    wii.loop = true;
    wii.play();

    setInterval(function(){
        let rand;
        rand = Math.floor(Math.random() * 6);
        let bgc;
        switch (rand){
            case 0: bgc = "#ff0000";
                    break;
            case 1: bgc = "#ffaa00";
                    break;
            case 2: bgc = "#ffff00";
                    break;
            case 3: bgc = "#00ff00";
                    break;
            case 4: bgc = "#0000ff";
                    break;
            case 5: bgc = "#aa00aa";
        }
        const htmlDisco = document.getElementById("html1");
        htmlDisco.style.backgroundColor = bgc;
    }, 100)
}

function setUserName (){
    const myName = prompt("Who are you, wanderer?");
    if (!myName){
        setUserName();
    }
    else {
        localStorage.setItem("name", myName);
        MyHeading.textContent = `Welcome ${myName} to my first website that uses Javascript!`;
    }
}

if (!localStorage.getItem("name")){
    setUserName();
}
else{
    const storedName = localStorage.getItem("name");
    MyHeading.textContent = `Welcome ${storedName} to my first website that uses Javascript!`;
}

const changeButton = document.getElementById("user");

changeButton.onclick = () => {
    setUserName();
}
