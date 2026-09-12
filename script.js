function startWebsite() {

    document.querySelector(".explore").scrollIntoView({
        behavior: "smooth"
    });

}

function openPassword() {

    document.getElementById("passwordBox").style.display = "flex";

}


function closePassword() {

    document.getElementById("passwordBox").style.display = "none";

}


function checkPassword() {

    const password =
        document.getElementById("passwordInput").value;

    if (password === "1234") {

        window.location.href = "page2.html";

    } else {

        document.getElementById("wrongPassword").innerText =
            "Hmm... that's not it 😝 Try again ♡";

    }

}


function showMessage(type) {

    if (type === "memories") {

        alert("Our memories are my favourite part of this story ❤️");

    }

    else if (type === "messages") {

        alert("You mean more to me than you probably realise 💌");

    }

    else if (type === "surprise") {

        alert("Okay... you found the surprise 👀❤️");

    }

}
