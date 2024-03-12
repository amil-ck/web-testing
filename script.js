function SetStyle(style)
{
    csslink = document.getElementById("csslink");
    csslink.href = "Styles/" + style;
}

function SendEmail()
{
    subject = document.getElementById("Subject").value;
    EmailBody = document.getElementById("EmailBody").value;

    if (subject == "")
    {
        SendAnyway = confirm("Are you sure you want to send an email with no subject?");
        
        if (SendAnyway)
        {
            open("mailto:wcarr@agsb.co.uk?subject="+ subject + "&body=" + EmailBody);
        }

    } else
    {
        open("mailto:wcarr@agsb.co.uk?subject="+ subject + "&body=" + EmailBody);
    }
}

function ChangeImage()
{
    HTMLimg = document.getElementById("HtmlImg");
    CSSimg = document.getElementById("CssImg");
    JSimg = document.getElementById("JsImg");

    if (HTMLimg.getAttribute("src") == "Images/HTML.png")
    {
        HTMLimg.src = "Images/HTML_ex.png";
        CSSimg.src = "Images/CSS_ex.jpg";
        JSimg.src = "Images/JS_ex.png";

        new_class = "ExImg";
    } else
    {
        HTMLimg.src = "Images/HTML.png";
        CSSimg.src = "Images/CSS.png";
        JSimg.src = "Images/JS.png";

        new_class = "Img";
    }

    HTMLimg.className = new_class;    
    CSSimg.className = new_class;
    JSimg.className = new_class; 
}

function LinkClicked()
{
    linkcount += 1;
    document.getElementById("linkcount").innerHTML = "You have clicked the link " + linkcount + " times";  
}

function EmailSignup()
{
    email = prompt("Enter your email to join the email list: ");
    
    if (email == "")
    {
        alert("You pressed okay but did not enter an email address!");
    }
}

window.onload = function()
{
    setTimeout(EmailSignup, 5000);
    setInterval(ChangeImage, 20000);    
}

let linkcount = 0;