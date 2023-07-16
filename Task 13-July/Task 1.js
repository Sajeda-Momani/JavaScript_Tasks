const name= ["Sajeda_Momani", "Amer_Momani", "Islam_Momani", "Alaa_Momani"]
const age= [25, 24, 26,27]

for (let i = 0; i <= 4; i++){

let contaner=document.createElement("div");
contaner.textContent = "";
contaner.style.border = "solid 2px black"
contaner.style.backgroundColor= "gray"
let namesection = document.createElement("h2");
namesection.textContent = name [i];

let agesection = document.createElement("h3");
agesection.textContent = age[i];

var image = document.createElement("img");
image.src = "cat.jpg";
image.alt = "My Image";
image.width = 200;
image.height = 150;

document.body.appendChild(contaner)
contaner.appendChild(namesection);
contaner.appendChild(agesection);
contaner.appendChild(image);
}