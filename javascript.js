function test(){
    console.log("Hey")
}

document.addEventListener('keydown', function(event) {
    var theCLI = document.getElementById("CLI");
    var thePast1 = document.getElementById("Past1");
    var thePast2 = document.getElementById("Past2");
    var thePast3 = document.getElementById("Past3");
    var thePast4 = document.getElementById("Past4");
    var thePast5 = document.getElementById("Past5");
    var thePast6 = document.getElementById("Past6");
    var thePast7 = document.getElementById("Past7");
    var thePast8 = document.getElementById("Past8");
    var Blinker = document.getElementById("blink");
    if (event.keyCode == 9 || event.keyCode == 16 || event.keyCode == 9 || event.keyCode == 27 || event.keyCode == 39 || event.keyCode == 37 || event.keyCode == 38 || event.keyCode == 40 || event.keyCode == 17 || event.keyCode == 18 || event.keyCode == 20)
    {
        console.log ("pressed a key I dont like");
    }
    else if (event.keyCode == 8)
    {
        var MCon = theCLI.textContent;
        if (MCon != ">"){
            MCon = MCon.substring(0, MCon.length - 1);
            var content = document.createTextNode(MCon);
            console.log (content);
            theCLI.innerHTML = "";
            theCLI.appendChild(content);
            Blinker.style.left = Blinker.offsetLeft - 55 + "px";
        }
    }
    else if(event.key != "Enter" && Blinker.offsetLeft < document.body.offsetWidth) {
        var content = document.createTextNode(event.key);
        theCLI.appendChild(content);
        Blinker.style.left = Blinker.offsetLeft+ 55 + "px";
    }
    else{
        Blinker.style.left = 100 + "px";
        var content2 = document.createTextNode(theCLI.textContent);
        try {
            console.log(theCLI.textContent);
            if (theCLI.textContent == ">help" || theCLI.textContent == ">Help" || theCLI.textContent == ">H" || theCLI.textContent == ">h"){
                test();
            }
        } catch (error) {
            console.log(error + ": Well Shit Something went wrong")
        }

            thePast1.innerHTML = "";
            var Past2 = document.createTextNode(thePast2.textContent);
            thePast1.appendChild(Past2);

            thePast2.innerHTML = "";
            Past2 = document.createTextNode(thePast3.textContent);
            thePast2.appendChild(Past2);

            thePast3.innerHTML = "";
            Past2 = document.createTextNode(thePast4.textContent);
            thePast3.appendChild(Past2);

            thePast4.innerHTML = "";
            Past2 = document.createTextNode(thePast5.textContent);
            thePast4.appendChild(Past2);

            thePast5.innerHTML = "";
            Past2 = document.createTextNode(thePast6.textContent);
            thePast5.appendChild(Past2);

            thePast6.innerHTML = "";
            Past2 = document.createTextNode(thePast7.textContent);
            thePast6.appendChild(Past2);

            thePast7.innerHTML = "";
            Past2 = document.createTextNode(thePast8.textContent);
            thePast7.appendChild(Past2);

            thePast8.innerHTML = "";
            thePast8.appendChild(content2);

        theCLI.innerHTML = ">";
    }
});