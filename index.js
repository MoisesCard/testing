const button = document.getElementById("button");


const showTxt = () => {
    
    const node = document.createElement("p");
    const textnode = document.createTextNode("hi");
    node.appendChild(textnode);
    document.getElementById("text").appendChild(node);
}

button.addEventListener("click", showTxt);  

// retrieve from DOM
// try to make it show new stuff on #text area