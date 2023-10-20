//NEED TO ADD CLEAR SCREEN COMMAND
// need to add a previewer for resume and certifications and a download command for them too using "preview" command


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
    var HelpStatus = 0;
    var PageNum = 0;
    if (thePast1.textContent == "Page "+string(PageNun+1)+" ('<' and '>' to change pages)"){
        HelpStatus = 1;
    }
    
    if (event.keyCode == 9 || event.keyCode == 16 || event.keyCode == 9 || event.keyCode == 27 || event.keyCode == 38 || event.keyCode == 40 || event.keyCode == 17 || event.keyCode == 18 || event.keyCode == 20)
    {
        console.log ("pressed a key I dont like");
    }
    else if (event.keyCode == 39 || event.key == ">")
    {
        console.log("Right Arrow");
        if (HelpStatus == 1){
            PageNum++;
            test();
        }
    }
    else if (event.keyCode == 37 || event.key == "<")
    {
        console.log("Left Arrow");
        if (HelpStatus == 1){
            PageNum--;
            test();
        }
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
            if (theCLI.textContent.toLowerCase() == ">connect" || theCLI.textContent.toLowerCase() == ">s"){
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
            if (theCLI.textContent.toLowerCase().split(" ")[0] == ">info"){
                info(theCLI.textContent.toLowerCase().split(" ")[1]);
            }
            if (theCLI.textContent.toLowerCase() == ">jar2exe" || theCLI.textContent.toLowerCase() == ">je"){
                NotAvailable();
            }
            if (theCLI.textContent.toLowerCase() == ">decryption" || theCLI.textContent.toLowerCase() == ">de"){
                NotAvailable();
            }
            if (theCLI.textContent.toLowerCase() == ">auto" || theCLI.textContent.toLowerCase() == ">ma"){
                NotAvailable();
            }
            if (theCLI.textContent.toLowerCase() == ">alarm" || theCLI.textContent.toLowerCase() == ">sa"){
                NotAvailable();
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
        if (PageNum <= 0){
            setTimeout(function() {
                thePast1.innerHTML = "";
                var Past2 = document.createTextNode("Commands Available:");
                thePast1.appendChild(Past2);
                thePast7.innerHTML = "";
                Past2 = document.createTextNode("[For Command Info: 'info' + Command]");
                thePast7.appendChild(Past2);

                thePast2.innerHTML = "";
                Past2 = document.createTextNode("‏‏‎ ‎‏‏‎ ‎Dark\\Lightmode: 'm' or 'mode'");
                thePast2.appendChild(Past2);
            
                thePast3.innerHTML = "";
                Past2 = document.createTextNode("‏‏‎ ‎‏‏‎ ‎Connect w/ Dev: 's' or 'connect'");
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
            
                thePast8.innerHTML = "Page 1 ('<' and '>' to change pages)"; //
            }, millisecondsToWait);
        }
        // Enact with new Commands need ideas
        //
        //
        else if (PageNum == 1){
            setTimeout(function() {
                thePast1.innerHTML = "";
                var Past2 = document.createTextNode("Commands Available:");
                thePast1.appendChild(Past2);
                thePast7.innerHTML = "";
                Past2 = document.createTextNode("[For Command Info: 'info' + Command]");
                thePast7.appendChild(Past2);

                thePast2.innerHTML = "";
                Past2 = document.createTextNode("‏‏‎ ‎‏‏‎ ‎Certifications: 'c' or 'certs'");
                thePast2.appendChild(Past2);
            
                thePast3.innerHTML = "";
                Past2 = document.createTextNode("‏‏‎ ‎‏‏‎ ‎J̶a̶r̶ ̶t̶o̶ ̶E̶x̶e̶:̶ ̶'̶j̶e̶'̶ ̶o̶r̶ ̶'̶j̶a̶r̶2̶e̶x̶e̶'");//Jar to Exe: 'je' or 'jar2exe'
                thePast3.appendChild(Past2);
        
                thePast4.innerHTML = "";
                Past2 = document.createTextNode("‏‏‎ ‎‏‏‎ ‎D̶e̶c̶r̶y̶p̶t̶i̶o̶n̶:̶ ̶'̶d̶e̶'̶ ̶o̶r̶ ̶'̶d̶e̶c̶r̶y̶p̶t̶i̶o̶n̶'̶");//Decryption: 'de' or 'decryption'
                thePast4.appendChild(Past2);
            
                thePast5.innerHTML = "";
                Past2 = document.createTextNode("‏‏‎ ‎‏‏‎ ‎M̶a̶i̶l̶ ̶A̶u̶t̶o̶m̶a̶t̶i̶o̶n̶ ̶T̶o̶o̶l̶:̶ ̶'̶m̶a̶'̶ ̶o̶r̶ ̶'̶a̶u̶t̶o̶'̶");//Mail Automation Tool: 'ma' or 'auto'
                thePast5.appendChild(Past2);
            
                thePast6.innerHTML = "";
                Past2 = document.createTextNode("‏‏‎ ‎‏‏‎ ‎S̶i̶l̶e̶n̶t̶ ̶A̶l̶a̶r̶m̶ ̶C̶l̶o̶c̶k̶:̶ ̶'̶s̶a̶'̶ ̶o̶r̶ ̶'̶a̶l̶a̶r̶m̶'̶");//Silent Alarm Clock: 'sa' or 'alarm'
                thePast6.appendChild(Past2);
            
                thePast8.innerHTML = "Page 2 ('<' and '>' to change pages)";
            }, millisecondsToWait);
        }
        
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
            var Past2 = document.createTextNode("");
            var pasts = [thePast1, thePast2, thePast3, thePast4, thePast5, thePast6, thePast7, thePast8];

            for (var i = 0; i < pasts.length-1; i++){
                try { 
                    if(pasts[i].textContent.substring(pasts[i].textContent.length-1)=="{"){
                        totalcode+=pasts[i].textContent.substring(1);
                    }
                    else if(pasts[i].textContent.substring(pasts[i].textContent.length-1)=="}"){
                        totalcode+=pasts[i].textContent.substring(1);
                    }
                    else if (pasts[i].textContent.substring(pasts[i].textContent.length-1)==";"){
                        totalcode+=pasts[i].textContent.substring(1);
                    }
                    console.log(pasts[i].textContent.substring(pasts[i].textContent.length-2));
                    pasts[i].appendChild(Past2);
                    if (pasts[i].textContent == "undefined"){
                        pasts[i].innerHTML = "";
                    }
                } catch (error) {
                    console.log(error+ ": uh oh")
                }
            }
            
            thePast8.innerHTML = "";
            thePast8.appendChild(content2);
            try {
                eval(totalcode);
                thePast8.innerHTML = "Code Attempted Successfully";
            } catch (error) {
                console.log(error);
                thePast8.innerHTML = "error in your code, please try again";
            }
            console.log(totalcode);
        }, millisecondsToWait);
        
        console.log("Hey")
        
    }

    function Socials(){
        var millisecondsToWait = 500;
        setTimeout(function() {
            thePast1.innerHTML = "";
            var Past2 = document.createTextNode("Connect w/ Dev:");
            thePast1.appendChild(Past2);
            thePast2.innerHTML = '‏‏‎ ‎‏‏‎ ‎on@starprograms.dev  &#9993; : "Mail"';
{/* <a href="https://www.linkedin.com/in/aiden-thomas-93002624a/" target="_blank" class = "Socials">Linked-in <i class="fa fa-linkedin-square"></i></a> */}
            thePast3.innerHTML = '‏‏‎ ‎‏‏‎ ‎Linked-in <i class="fa fa-linkedin-square"></i> : "Linked-in"';
            // <a href="https://twitter.com/onstar_programs" target="_blank" class = "Socials">Twitter  &#120143;</a> : "Twitter"
            thePast4.innerHTML = '‏‏‎ ‎‏‏‎ ‎Twitter  &#120143; : "Twitter"';
            // <a href="https://instagram.com/onstar_programs?igshid=OGQ5ZDc2ODk2ZA==" target="_blank" class = "Socials">Instagram  <i class="fa fa-instagram"></i></a> : "Insta"'
            thePast5.innerHTML = '‏‏‎ ‎‏‏‎ ‎Instagram  <i class="fa fa-instagram"></i> : "Insta"';

            thePast6.innerHTML = 'Type the connection You Would like to open';

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

    //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    function info(input)
    {
        console.log(input + ":Input on info function");
        if (input == "help" || input == "h"){

            thePast1.innerHTML = "‏‏‎ ‎‏‏‎ ‎.";

            thePast2.innerHTML = "Info: [Help]";

            thePast3.innerHTML = "‏‏‎ -The [Help] command provides a set of ";

            thePast4.innerHTML = "‏‏‎ ‎‏‏‎ ‎general commands that give the";
            
            thePast5.innerHTML = "‏‏‎ ‎‏‏‎ ‎user proper site navigation";
        
            thePast6.innerHTML = "‏‏‎ ‎‏‏‎ ‎";
            
            
            
            thePast7.innerHTML = "‏‏‎ -All commands listed in help are ";

            thePast8.innerHTML = "‏‏‎ ‎‏‏‎ ‎available to the user";
        }
        ////////////////////////////////////////////////////////////////
        else if (input == "mode" || input == "m")
        {
            thePast1.innerHTML = "‏‏‎ ‎‏‏‎ ‎.";

            thePast2.innerHTML = "Info: [Mode]";

            thePast3.innerHTML = "‏‏‎ -The [Mode] command changes the";

            thePast4.innerHTML = "‏‏‎ ‎‏‏‎ ‎websites look from ";
            
            thePast5.innerHTML = "‏‏‎ ‎‏‏‎ ‎dark mode to light mode";
        
            thePast6.innerHTML = "‏‏‎ ‎‏‏‎ ‎";
            
            
            thePast7.innerHTML = "‏‏‎ -Command can work the other way";

            thePast8.innerHTML = "‏‏‎ ‎‏‏‎ ‎around: from light to dark";
        }
        ////////////////////////////////////////////////////////////////
        else if (input == "js")
        {
            thePast1.innerHTML = "‏‏‎ ‎‏‏‎ ‎.";

            thePast2.innerHTML = "Info: [JavaScript]";

            thePast3.innerHTML = "‏‏‎ -The [JavaScript] command allows for";

            thePast4.innerHTML = "‏‏‎ ‎‏‏‎ ‎the user run JavaScript Within";
            
            thePast5.innerHTML = "‏‏‎ ‎‏‏‎ ‎this website without using console";
        
            thePast6.innerHTML = "‏‏‎ ‎‏‏‎ ‎";
            
            
            thePast7.innerHTML = "‏‏‎ -Command works like a compiler and";

            thePast8.innerHTML = "‏‏‎ ‎‏‏‎ ‎allows for up to 8 lines of code"; 
        }
        ///////////////////////////////////////////////////////////////
        else if (input == "w" || input == "web")
        {
            thePast1.innerHTML = "‏‏‎ ‎‏‏‎ ‎.";

            thePast2.innerHTML = "Info: [Sister Site]";

            thePast3.innerHTML = "‏‏‎ -The [Sister Site] command Sends";

            thePast4.innerHTML = "‏‏‎ ‎‏‏‎ ‎the user to the sister site";
            
            thePast5.innerHTML = "‏‏‎ ‎‏‏‎ ‎associated to the Dev (A.D.T)";
        
            thePast6.innerHTML = "‏‏‎ ‎‏‏‎ ‎";
            
            
            thePast7.innerHTML = "‏‏‎ -This command opens the sister";

            thePast8.innerHTML = "‏‏‎ ‎‏‏‎ ‎site in a new page"; 
        }
        else if (input == "c" || input == "certs")
        {
            thePast1.innerHTML = "‏‏‎ ‎‏‏‎ ‎.";

            thePast2.innerHTML = "Info: [Certifications]";

            thePast3.innerHTML = "‏‏‎ -The [Certifications] command downloads";

            thePast4.innerHTML = "‏‏‎ ‎‏‏‎ ‎a zip file of the ";
            
            thePast5.innerHTML = "‏‏‎ ‎‏‏‎ ‎Devs' (A.D.T) certifications";
        
            thePast6.innerHTML = "‏‏‎ ‎‏‏‎ ‎";
            
            
            thePast7.innerHTML = "‏‏‎ -The certs can be previewed with";

            thePast8.innerHTML = "‏‏‎ ‎‏‏‎ ‎the 'preview c' command"; 
        }
        else if (input == "r" || input == "resume")
        {
            thePast1.innerHTML = "‏‏‎ ‎‏‏‎ ‎.";

            thePast2.innerHTML = "Info: [Resume]";

            thePast3.innerHTML = "‏‏‎ -The [Resume] command opens ";

            thePast4.innerHTML = "‏‏‎ ‎‏‏‎ ‎the Devs' (A.D.T) resume in";
            
            thePast5.innerHTML = "‏‏‎ ‎‏‏‎ ‎another tab usng .PDF format";
        
            thePast6.innerHTML = "‏‏‎ ‎‏‏‎ ‎";
            
            
            thePast7.innerHTML = "‏‏‎ -The Resume can be previewed with";

            thePast8.innerHTML = "‏‏‎ ‎‏‏‎ ‎the 'preview r' command"; 
        }
        else if (input == "connect" || input == "s")
        {
            thePast1.innerHTML = "‏‏‎ ‎‏‏‎ ‎.";

            thePast2.innerHTML = "Info: [connect]";

            thePast3.innerHTML = "‏‏‎ -The [connect] command opens ";

            thePast4.innerHTML = "‏‏‎ ‎‏‏‎ ‎a sub menu that provides";
            
            thePast5.innerHTML = "‏‏‎ ‎‏‏‎ ‎additional commands to run";
        
            thePast6.innerHTML = "‏‏‎ ‎‏‏‎ ‎";
            
            
            thePast7.innerHTML = "‏‏‎ -These commands connect to ";

            thePast8.innerHTML = "‏‏‎ ‎‏‏‎ ‎the Developers' socials"; 
        }
        else if (input == "" || input == "input" || input == undefined)
        {
            thePast1.innerHTML = "‏‏‎ ‎‏‏‎ ‎.";

            thePast2.innerHTML = "Info: [info]";

            thePast3.innerHTML = "‏‏‎ -The [info] command opens ";

            thePast4.innerHTML = "‏‏‎ ‎‏‏‎ ‎additional information pertaining";
            
            thePast5.innerHTML = "‏‏‎ ‎‏‏‎ ‎to said commands on this website";
        
            thePast6.innerHTML = "‏‏‎ ‎‏‏‎ ‎";
            
            
            thePast7.innerHTML = "‏‏‎ -These commands in question are";

            thePast8.innerHTML = "‏‏‎ ‎‏‏‎ ‎available in the [help] menu"; 
        }
        else {
            console.log(input)
            NotAvailable();
        }
        // info on info
    }
    function NotAvailable(){
        thePast1.innerHTML = ".";

        thePast2.innerHTML = "Command Not Available";

        thePast3.innerHTML = "Check Help for Other Commands";

        thePast4.innerHTML = "‏‏‎ ‎‏‏‎ ‎";
            
        thePast5.innerHTML = "‏‏‎ ‎‏‏‎ ‎";
        
        thePast6.innerHTML = "‏‏‎ ‎‏‏‎ ‎";
            
        thePast7.innerHTML = "‏‏‎ ";

        thePast8.innerHTML = "‏‏‎";
    }
});

