const
    listTip = [],
    listTCode = [],
    pointCircle = [],
    tempo = new Date();

document.addEventListener("mousedown", (event) => {
    console.log(event);
    event.target.id || null ?
        mouse(event) :
        console.log("Não possue classe atribuída.");
    let Z = Math.floor(Math.random()*30);
    drawCircle(`${event.clientX}px`,`${event.clientY}px`,Z);
});

/*document.addEventListener("mouseover", (event) => {
    console.log(event);
    let Z = Math.floor(Math.random()*10);
    setInterval(dragCircle(`${event.clientX}px`,`${event.clientY}px`, Z), 1);
});*/

document.addEventListener("keydown", (event) => {
    console.log(`tecla apertada: ${event.key}\nCode de acesso: ${event.code}`);
    keydown(event.code);
});

document.addEventListener("keypress", (event) => {
    keypress(event.code);
});

document.addEventListener("keyup", (event) => {
    console.log(`tecla solta: ${event.key}\nCode de acesso: ${event.code}`);
    keyup(event.code);
    listTip.push([event.key,event.code]);
    listTCode.push(event);
});

function mouse(click){
    removeblue(click.target.id);
}

function drawCircle(x,y,z){
    const div = document.createElement("div");
    div.setAttribute("class", "pointWrite");
    div.style.setProperty("left", x);
    div.style.setProperty("top", y);
    div.style.setProperty("width", `${z}px`);
    div.style.setProperty("height", `${z}px`);
    div.style.setProperty("border-radius", `${z/2}px`);
    document.body.appendChild(div);
    console.log(`Linha: ${x}\nColuna ${y}\nRaio ${z}px`)
}
/*function dragCircle(x,y,z){
    const div = document.createElement("div");
    div.setAttribute("class", "pointBlack");
    div.style.setProperty("left", x);
    div.style.setProperty("top", y);
    div.style.setProperty("width", `${z}px`);
    div.style.setProperty("height", `${z}px`);
    div.style.setProperty("border-radius", `${z/2}px`);
    document.body.appendChild(div);
}*/

function addblue(active){
    document.getElementById(active).classList.add("blue");
}
function removeblue(inactive){
    document.getElementById(inactive).classList.remove("blue");
}

function keydown(tip){
    addblue(tip)
}
function keypress(tip){
    document.getElementById(tip).classList.add("orange");
}
function keyup(tip){
    document.getElementById(tip).classList.remove("orange");
}