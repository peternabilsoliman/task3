// create header
let head = document.createElement("header");
head.style.cssText = "display:flex; padding: 30px; background-color: rgb(245,245,245); justify-content: align-items : center;";
document.body.appendChild(head);


// create logo
let logo = document.createElement("div");
logo.style.cssText = "font-weight: bold; color:rgb(0, 0, 0); font-size: 25px;";
logo.innerHTML = "acadimey";
head.appendChild(logo);

// ul
let ul = document.createElement("ul");
let headEle = ["Home", "About", "Service", "Contact"];
let aheadEle = ["#Home", "#About", "#Service", "#Contact"];
for (i= 0;i< headEle.length;i++ ){
    let a = document.createElement("a");
    a.style.margin = "5px";
    a.style.width = "150px"
    a.style.padding = "5px";
    a.style.color = "rgb(255 ,0 ,0)";
    a.style.fontSize = "20px";
    a.style.textDecoration = "none";
    a.style.fontFamily = "sans-serif ";
    a.innerHTML = headEle[i];
    a.href = aheadEle[i];
    ul.appendChild(a);
}

ul.style.cssText = "paddig: 0px; margin: 0px; display: flex; list-style: none;";
head.appendChild(ul);

// body

// content
let content = document.createElement("div");
document.body.appendChild(content);
content.style.cssText = "display: flex; padding: 20px; flex-wrap: wrap;  gap: 15px; ";



// product
for(i= 0;i< 15;i++){
    let product = document.createElement("div");
    product.style.cssText = "padding: 20px; background-color: rgb(245, 245, 245); border: 2px solid rgb(210, 210, 210); width: calc((100% - 50px) / 3); box-sizing: border-box; text-align: center; color: rgb(30, 30, 30); border-radius: 7px; font-Family :sans-serif;";
    let span = document.createElement("span");
    span.style.cssText = "font-size: 35px; color: rgb(30, 30, 30) ; font-weight:normal ; display: block; margin:10px; ";
    span.textContent = i+1;
    product.appendChild(span);
    product.append("Product");
    content.appendChild(product);
}

// footer
let foot = document.createElement('footer');
foot.style.cssText = "background-color: rgb(0,0,0); font-size: 26px; text-align: center; margin:20px; padding: 20px; color: rgb(255,255,255);";
document.body.appendChild(foot);
let footer = document.createElement('div')
foot.appendChild(footer)
footer.style.cssText = "font-weight: bold; color:rgb(255, 0, 0); font-size: 25px;";
footer.innerHTML ="thank you for visit this webside";