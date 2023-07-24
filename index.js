//SELECTEURS
//document.querySelector('h4').style.background = "yellow";

//const baliseHTML =document.querySelector("h4");

//console.log(baliseHTML);
//baliseHTML.style.background = "yellow"

//Click event
const questionContainer = document.querySelector(".click-event");
const btn1 = document.querySelector("#btn-1");
const btn2 = document.getElementById("btn-2");
//console.log(btn1, btn2);
const response = document.querySelector("p");
//console.log("response");

//console.log(questionContainer);

//questionContainer.style.borderRaduis = "150px";

questionContainer.addEventListener("click", () => {
  //console.log("Click !");
 // questionContainer.style.background = "red";
  //questionContainer.classList.border = "3px solid teal";
  questionContainer.classList.toggle("question-clicked");
});
btn1.addEventListener("click", () =>  {
    //console.log("click !");
   // response.style.visibility = "visible"
    response.classList.add("show-response");
    response.style.background = "green";
});

btn2.addEventListener("click", () =>  {
    //console.log("click !");
    //response.style.visibility = "visible"
   response.classList.add("show-response");
    response.style.background = "red";
});
 /*<div> > #id > .class > baliseHTML*/
//----------------------------------------------------
//Mous Events
const mousemove = document .querySelector(".mousemove");
//console.log(mousemove);

window.addEventListener("mousemove", (e) => {
    //console.log("MOUSEMOVE !!!");
    //console.log(e.target);
    mousemove.style.left = e.pageX + "px";
    mousemove.style.top = e.pageY + "px";
    //console.log(x);
});
window.addEventListener("mousedown", () => {
    //console.log("test");
    mousemove.style.transform = "scale(2) translate(-25%, -25% )";
});
window.addEventListener("mouseup", () => {
    //console.log("test");
    mousemove.style.transform = "scale(1) translate(-50%, -50% )";
    mousemove.style.border = "2px solid teal";
});
questionContainer.addEventListener("mouseenter", () => {
    questionContainer.style.background = "rgba(0,0,0,0.6)";
} );
questionContainer.addEventListener("mouseout", () => {
    //console.log("mouseout !");
    questionContainer.style.background = "pink";
});

response.addEventListener("mouseover", () => {
    response.style.transform = "rotate(2deg)";
});
//--------------------------------------------------
//keyPress event

const keypressContainer = document.querySelector(".keypress");
//console.log(keypressContainer);
const key = document.getElementById("key");

//console.log(key);

const ring = (key) =>{
    const audio = new Audio();
    audio.src = key + "z.mp3";
    console.log(audio.src);
    audio.play();
};

document.addEventListener("keypress", (e) =>{
//console.log(e.key);
key.textContent = e.key;
if (e.key === "j") {
    keypressContainer.style.background = "pink";
}else if (e.key === "h") {
    keypressContainer.style.background = "teal";
}else {
    keypressContainer.style.background = "red"

}if (e.key === "z")ring(e.key);
});
//----------------------------------------
//scroll Event
const nav = document.querySelector("nav");

//console.log(nav);
window.addEventListener("scroll", () => {
//console.log(window.scrollY);
if (window.scrollY >120) {
    nav.style.top = 0;
}else{
    nav.style.top = "-50px"
}
});
//-----------------------------------------
//Form Events
const inputName = document.querySelector('input[type="text"]')
//console.log(inputName);
const select = document.querySelector("select");
const form = document.querySelector("form");
let pseudo = "";
//console.log(select);
let language = "";

//console.log(form);


inputName.addEventListener('input', (e) => {
   console.log(e.target.value);
    pseudo = e.target.value;
    console.log(pseudo);
});
select.addEventListener("input", (e) =>{
   // console.log(e.target.value);
    language = e.target.value
});
form.addEventListener('submit', (e) => {
    e.preventDefault();
    //console.log("yes !");
    //console.log(cgv.checked);
    if (cgv.checked) { 
        document.querySelector("form > div").innerHTML = ` 
        <h3>Pseudo : ${pseudo}</h3>
        <h4>Langage prefere : ${language}</h4>
    `;
    } else{
        alert("veuillez accepter les CGV");
    }
});

//-----------------------------------------------
//Load event
window.addEventListener("Load", () => {
    //console.log("Document chargé !");
});
//---------------------------------------------
//ForEach
//const boxes = document.getElementsByClassName("box");
const boxes = document.querySelectorAll(".box");
//console.log(boxes);
boxes.forEach((box) => {
    box.addEventListener("click", (e) => {
        //console.log(e.target);
        e.target.style.transform = "scale(0.7)";
    });
});
//-------------------------------------------
//addEventListener Vs onclick
/*document.body.onclick = () => {
    console.log("Click !");
};
document.body.onscroll = () => {
    console.log("Scroll !");
};*/
//Bubbling => fin (de base l'eventlistener est paramétré en mode Bubbling)
document.body.addEventListener("click", () => {
    console.log("click 1 !");
}, false );

//Usecapture
document.body.addEventListener("click", () => {
    console.log("click 2 !");
}, true );




//https://gomakethings.com/what-is-that-third-argument-on-the-vanilla-js-addeventlistener-method-and-when-do-you-need-it/

//--------------------------------------------------------
//Stop propagation
//questionContainer.addEventListener("click", () => {
   // alert("Test !");
    //e.stopPropagation();
//});
//removeEventListener
//-------------------------------------
//BOM
//console.log(window.innerHeight);
//console.log(window.scrollY);
window.open("http://google.com", "cours js","height=600, width=800" );
//window.close()
//Evenement adosses a window
//window.alert("hello");

//confirm
btn2.addEventListener("click", () => {
    confirm("Voulez vous vraiment vous tromper ?")
});
//prompt
btn1.addEventListener("click", () => {
   let answer = prompt("Entrez votre nom !");
   questionContainer.innerHTML += "<h3>Bravo" +answer + "</h3>"
});
setTimeout(() => {
//Logique à executer
questionContainer.style.borderRaduis = "300px";
}, 2000);

let interval = setInterval(() => {
    document.body.innerHTML +=
    "<div class='box'><h2>Nouvelle Boite !</h2></div>"
}, 1000);
document.body.addEventListener("click", (e)=> {
    console.log(e.target);
clearInterval(interval);
});
//Location 
//console.log(location.href);
//console.log(location.host);
//console.log(location.pathname);
//console.log(location.search);
//location.replace("https://Lequipe.fr");

//window.onload = () => {

   //location.href = "http://twitter.fr"; 
//};
//Navigator
//console.log(navigator.userAgent);
//https:developer.mozilla.org.fr/docs/web/API/GeolocalisationgetCurrentPosition
/*var options ={
    enableHighAccuracy: true,
    timeout: 5000,
    maximumAge: 0,
};
function success(pas){
    var crd = pas.coords;

    console.log("Votre position actuelle est :");
    console.log('Latitude : ${crd.latitude}');
    console.log('Longitude : ${crd.longitude}');
    console.log('La precision est de ${crd.accuracy} metre.');
}
function error(err) {
    console.warn('ERREUR(${err.code}): ${err.message}');
}
navigator.geolocation.getCurrentPosition(success, error, options);*/

//History 
//console.log(history);
//windox.history.back();
//history.go(-2)

//------------------------------------------

//setProperty
    window.addEventListener("mousemove", (e) =>{
        console.log(e);
        nav.style.setProperty("--x", e.LayerX + "px");
         nav.style.setProperty("y", e.LayerY + "px");
    });





