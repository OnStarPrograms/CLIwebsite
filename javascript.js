
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
    var style = window.getComputedStyle(Blinker, null).getPropertyValue('font-size');
    var fontSize = parseFloat(style);
    // now you have a proper float for the font size (yes, it can be a float, not just an integer)
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
            if (fontSize == 50){
                Blinker.style.left = Blinker.offsetLeft - 25 + "px";
            }
            else{
                Blinker.style.left = Blinker.offsetLeft - 20 + "px";
            }
        }
    }
    else if(event.key != "Enter" && Blinker.offsetLeft < document.body.offsetWidth) {
        var content = document.createTextNode(event.key);
        theCLI.appendChild(content);
        if (fontSize == 50){
            Blinker.style.left = Blinker.offsetLeft+ 25 + "px";
        }
        else{
            Blinker.style.left = Blinker.offsetLeft + 20 + "px";
        }
    }
    else{
        if (fontSize == 50){
            Blinker.style.left = 75 + "px";
        }
        else{
            Blinker.style.left = 50 + "px";
        }
        var content2 = document.createTextNode(theCLI.textContent);
        try {
            console.log(theCLI.textContent);
            if (theCLI.textContent.toLowerCase() == ">help" || theCLI.textContent.toLowerCase() == ">h"){
                test();
            }
            if (theCLI.textContent.toLowerCase() == ">mode" || theCLI.textContent.toLowerCase() == ">m"){
                ChangeMode();
            }
            if (theCLI.textContent.toLowerCase() == ">js"){
                evjs();
            }
            if (theCLI.textContent.toLowerCase() == ">w" || theCLI.textContent.toLowerCase() == ">web"){
                openlink("https://aiden.starprograms.dev");
            }
            if (theCLI.textContent.toLowerCase() == ">c" || theCLI.textContent.toLowerCase() == ">certs"){
                alert("Downloading Certifications")
                openlink("Downloads/Certifications.zip");
            }
            if (theCLI.textContent.toLowerCase() == ">r" || theCLI.textContent.toLowerCase() == ">resume"){
                openlink("Downloads/Thomas, Aiden resume 3.0.1.pdf");
            }
            // Downloads/Thomas, Aiden resume 3.0.1.pdf
            if (theCLI.textContent.toLowerCase() == ">social" || theCLI.textContent.toLowerCase() == ">s"){
                Socials();
            }
            if (theCLI.textContent.toLowerCase() == ">mail"){
                openlink("mailto:on@starprograms.dev");
            }
            if (theCLI.textContent.toLowerCase() == ">linked-in" || theCLI.textContent.toLowerCase() == ">linked in" || theCLI.textContent.toLowerCase() == ">linkedin"){
                openlink("https://www.linkedin.com/in/aiden-thomas-93002624a/");
            }
            if (theCLI.textContent.toLowerCase() == ">twitter"){
                openlink("https://twitter.com/onstar_programs");
            }
            if (theCLI.textContent.toLowerCase() == ">insta" || theCLI.textContent.toLowerCase() == ">instagram"){
                openlink("https://instagram.com/onstar_programs?igshid=OGQ5ZDc2ODk2ZA==");
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


    function test(){
        var millisecondsToWait = 500;
        setTimeout(function() {
            // Whatever you want to do after the wait
            thePast1.innerHTML = "";
            var Past2 = document.createTextNode("Commands Available:");
            thePast1.appendChild(Past2);
            thePast2.innerHTML = "";
            Past2 = document.createTextNode("‏‏‎ ‎‏‏‎ ‎Dark\\Lightmode: 'm' or 'mode'");
            thePast2.appendChild(Past2);

            thePast3.innerHTML = "";
            Past2 = document.createTextNode("‏‏‎ ‎‏‏‎ ‎Socials: 's' or 'social'");
            thePast3.appendChild(Past2);
        
            thePast4.innerHTML = "";
            Past2 = document.createTextNode("‏‏‎ ‎‏‏‎ ‎Resume: 'r' or 'resume'");
            thePast4.appendChild(Past2);
    
            thePast5.innerHTML = "";
            Past2 = document.createTextNode("‏‏‎ ‎‏‏‎ ‎Run Javascript from CLI Input: 'js'");
            thePast5.appendChild(Past2);
        
            thePast6.innerHTML = "";
            Past2 = document.createTextNode("‏‏‎ ‎‏‏‎ ‎Sister-Site: 'w' or 'web'");
            thePast6.appendChild(Past2);
        
            thePast7.innerHTML = "";
            Past2 = document.createTextNode("‏‏‎ ‎‏‏‎ ‎Certifications: 'c' or 'certs'");
            thePast7.appendChild(Past2);
        
            thePast8.innerHTML = "";
            thePast8.appendChild(content2);
        }, millisecondsToWait);
        
        console.log("Hey")
        
    }

    function ChangeMode() {
        var element = document.body;
        element.classList.toggle("dark-mode");
    }

    function evjs(){
        var millisecondsToWait = 500;
        setTimeout(function() {
            var totalcode = "";
            // Whatever you want to do after the wait
            var Past2 = "";
            try {
                thePast1.innerHTML = "";
                
                if(thePast2.textContent.substring(thePast2.textContent.length-1)=="{"){
                    totalcode+=thePast2.textContent.substring(1);
                }
                else if(thePast2.textContent.substring(1)=="}"){
                    totalcode+=thePast2.textContent.substring(1);
                }
                else if (thePast2.textContent.substring(thePast2.textContent.length-2)!=";"){
                    Past2 = document.createTextNode(eval(thePast2.textContent.substring(1)+";"));
                    totalcode+=thePast2.textContent.substring(1);
                }
                else{
                    Past2 = document.createTextNode(eval(thePast2.textContent.substring(1)));
                    totalcode+=thePast2.textContent.substring(1);
                }
                console.log(thePast2.textContent.substring(thePast2.textContent.length-2));
                thePast1.appendChild(Past2);
                if (thePast1.textContent == "undefined"){
                    thePast1.innerHTML = "";
                }
            } catch (error) {
                console.log(error+ ": uh oh")
            }
            


            try {
                thePast2.innerHTML = "";
                
                if(thePast3.textContent.substring(thePast3.textContent.length-1)=="{"){
                    totalcode+=thePast3.textContent.substring(1);
                }
                else if(thePast3.textContent.substring(1)=="}"){
                    totalcode+=thePast3.textContent.substring(1);
                }
                else if (thePast3.textContent.substring(thePast3.textContent.length-2)!=";"){
                    Past2 = document.createTextNode(eval(thePast3.textContent.substring(1)+";"));
                    totalcode+=thePast3.textContent.substring(1);
                }
                else{
                    Past2 = document.createTextNode(eval(thePast3.textContent.substring(1)));
                    totalcode+=thePast3.textContent.substring(1);
                }
                console.log(thePast3.textContent.substring(thePast3.textContent.length-2));
                thePast2.appendChild(Past2);
                if (thePast2.textContent == "undefined"){
                    thePast2.innerHTML = "";
                }
            } catch (error) {
                console.log(error+ ": uh oh")
            }
            


            try {
                thePast3.innerHTML = "";
                
                if(thePast4.textContent.substring(thePast4.textContent.length-1)=="{"){
                    totalcode+=thePast4.textContent.substring(1);
                }
                else if(thePast4.textContent.substring(1)=="}"){
                    totalcode+=thePast4.textContent.substring(1);
                }
                else if (thePast4.textContent.substring(thePast4.textContent.length-2)!=";"){
                    Past2 = document.createTextNode(eval(thePast4.textContent.substring(1)+";"));
                    totalcode+=thePast4.textContent.substring(1);
                }
                else{
                    Past2 = document.createTextNode(eval(thePast4.textContent.substring(1)));
                    totalcode+=thePast4.textContent.substring(1);
                }
                console.log(thePast4.textContent.substring(thePast4.textContent.length-2));
                thePast3.appendChild(Past2);
                if (thePast3.textContent == "undefined"){
                    thePast3.innerHTML = "";
                }
            } catch (error) {
                console.log(error+ ": uh oh")
            }
            


            try {
                thePast4.innerHTML = "";
                
                if(thePast5.textContent.substring(thePast5.textContent.length-1)=="{"){
                    totalcode+=thePast5.textContent.substring(1);
                }
                else if(thePast5.textContent.substring(1)=="}"){
                    totalcode+=thePast5.textContent.substring(1);
                }
                else if (thePast5.textContent.substring(thePast5.textContent.length-2)!=";"){
                    Past2 = document.createTextNode(eval(thePast5.textContent.substring(1)+";"));
                    totalcode+=thePast5.textContent.substring(1);
                }
                else{
                    Past2 = document.createTextNode(eval(thePast5.textContent.substring(1)));
                    totalcode+=thePast5.textContent.substring(1);
                }
                console.log(thePast5.textContent.substring(thePast5.textContent.length-2));
                thePast4.appendChild(Past2);
                if (thePast4.textContent == "undefined"){
                    thePast4.innerHTML = "";
                }
            } catch (error) {
                console.log(error+ ": uh oh")
            }
            


            try {
                thePast5.innerHTML = "";
                
                if(thePast6.textContent.substring(thePast6.textContent.length-1)=="{"){
                    totalcode+=thePast6.textContent.substring(1);
                }
                else if(thePast6.textContent.substring(1)=="}"){
                    totalcode+=thePast6.textContent.substring(1);
                }
                else if (thePast6.textContent.substring(thePast6.textContent.length-2)!=";"){
                    Past2 = document.createTextNode(eval(thePast6.textContent.substring(1)+";"));
                    totalcode+=thePast6.textContent.substring(1);
                }
                else{
                    Past2 = document.createTextNode(eval(thePast6.textContent.substring(1)));
                    totalcode+=thePast6.textContent.substring(1);
                }
                console.log(thePast6.textContent.substring(thePast6.textContent.length-2));
                thePast5.appendChild(Past2);
                if (thePast5.textContent == "undefined"){
                    thePast5.innerHTML = "";
                }
            } catch (error) {
                console.log(error+ ": uh oh")
            }
            


            try {
                thePast6.innerHTML = "";
                
                if(thePast7.textContent.substring(thePast7.textContent.length-1)=="{"){
                    totalcode+=thePast7.textContent.substring(1);
                }
                else if(thePast7.textContent.substring(1)=="}"){
                    totalcode+=thePast7.textContent.substring(1);
                }
                else if (thePast7.textContent.substring(thePast7.textContent.length-2)!=";"){
                    Past2 = document.createTextNode(eval(thePast7.textContent.substring(1)+";"));
                    totalcode+=thePast7.textContent.substring(1);
                }
                else{
                    Past2 = document.createTextNode(eval(thePast7.textContent.substring(1)));
                    totalcode+=thePast7.textContent.substring(1);
                }
                console.log(thePast7.textContent.substring(thePast7.textContent.length-2));
                thePast6.appendChild(Past2);
                if (thePast6.textContent == "undefined"){
                    thePast6.innerHTML = "";
                }
            } catch (error) {
                console.log(error+ ": uh oh")
            }
            


            try {
                thePast7.innerHTML = "";
                
                if(thePast8.textContent.substring(thePast8.textContent.length-1)=="{"){
                    totalcode+=thePast8.textContent.substring(1);
                }
                else if(thePast8.textContent.substring(1)=="}"){
                    totalcode+=thePast8.textContent.substring(1);
                }
                else if (thePast8.textContent.substring(thePast8.textContent.length-2)!=";"){
                    Past2 = document.createTextNode(eval(thePast8.textContent.substring(1)+";"));
                    totalcode+=thePast8.textContent.substring(1);
                }
                else{
                    Past2 = document.createTextNode(eval(thePast8.textContent.substring(1)));
                    totalcode+=thePast8.textContent.substring(1);
                }
                console.log(thePast8.textContent.substring(thePast8.textContent.length-2));
                thePast1.appendChild(Past2);
                if (thePast7.textContent == "undefined"){
                    thePast7.innerHTML = "";
                }
            } catch (error) {
                console.log(error+ ": uh oh")
            }
            
            thePast8.innerHTML = "";
            thePast8.appendChild(content2);
            try {
                eval(totalcode);
                thePast1.innerHTML = "Code Ran Successfully";
            } catch (error) {
                console.log(error);
                thePast1.innerHTML = "error in your code, please try again";
            }
            console.log(totalcode);
        }, millisecondsToWait);
        
        console.log("Hey")
        
    }

    function Socials(){
        var millisecondsToWait = 500;
        setTimeout(function() {
            // Whatever you want to do after the wait
            thePast1.innerHTML = "";
            var Past2 = document.createTextNode("Socials:");
            thePast1.appendChild(Past2);
            thePast2.innerHTML = '‏‏‎ ‎‏‏‎ ‎on@starprograms.dev  &#9993; : "Mail"';
{/* <a href="https://www.linkedin.com/in/aiden-thomas-93002624a/" target="_blank" class = "Socials">Linked-in <i class="fa fa-linkedin-square"></i></a> */}
            thePast3.innerHTML = '‏‏‎ ‎‏‏‎ ‎Linked-in <i class="fa fa-linkedin-square"></i> : "Linked-in"';
            // <a href="https://twitter.com/onstar_programs" target="_blank" class = "Socials">Twitter  &#120143;</a> : "Twitter"
            thePast4.innerHTML = '‏‏‎ ‎‏‏‎ ‎Twitter  &#120143; : "Twitter"';
            // <a href="https://instagram.com/onstar_programs?igshid=OGQ5ZDc2ODk2ZA==" target="_blank" class = "Socials">Instagram  <i class="fa fa-instagram"></i></a> : "Insta"'
            thePast5.innerHTML = '‏‏‎ ‎‏‏‎ ‎Instagram  <i class="fa fa-instagram"></i> : "Insta"';

            thePast6.innerHTML = 'Type the Social You Would like to open';

            thePast7.innerHTML = '';

            thePast8.innerHTML = '';
            thePast8.appendChild(content2);
            // window.open("https://www.youraddress.com","_blank");
        }, millisecondsToWait);
        
        console.log("Hey")
        
    }
    function openlink(a){
        window.open(a,"_blank");
    }
});

