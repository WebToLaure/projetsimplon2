function selectname (){
let names= [ "Johann","Pierre","Jean Christophe","Jean Sébastien","Sokunthy","Terry","Jessie","Kevin","Jean Francois","Stéphane","Delphine","Arnaud","Sandrine","Laure","Alexandre"];
var rand=Math.floor(Math.random()*16);
document.getElementById("random").textContent=names[rand];
setTimeout(reset,3000);
}


function reset(){
document.getElementById("random").textContent="RANDOM APPRENANT";
}
