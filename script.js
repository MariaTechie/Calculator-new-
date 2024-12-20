//selector 

const output = document.querySelector(".output");
const result = document.querySelector(".result");
const keys = document.querySelectorAll("button");

//eventlistener
keys.forEach(key=>{
    key.addEventListener("click",calculate);
});

function calculate(){
    let buttonText = this.innerText;
    switch (buttonText) {
        case "AC":
        output.innerText = "";
        result.innerText = "0";
        result.style.animation = "";
        output.style.animation = "";
        break;
    

    case "DEL":
            output.textContent = output.textContent.substr(0, output.textContent.length - 1);
            break;
    

  
    case "=":
        try {
        result.innerText = eval(output.innerText);
        result.style.animation = "big 0.5s ease-in-out";
        output.style.animation = "small 0.5s ease-in-out";
        result.style.animationFillMode = "forwards";
        output.style.animationFillMode = "forwards";
    }
catch {
    result.innerText = "Error";
}
break;    

    default:
        output.textContent += buttonText;
        break;
}


}
