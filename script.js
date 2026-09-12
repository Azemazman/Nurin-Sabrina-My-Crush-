function startWebsite() {

    document.querySelector(".explore").scrollIntoView({
        behavior: "smooth"
    });

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
