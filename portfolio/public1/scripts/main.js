
main = function() {
    console.log("Ready");

    document.querySelector("#selectButton").onclick = (event) => {
        console.log("select button");
        document.querySelector("#cardTitle").innerHTML = `Pigwidgeon`;
        document.querySelector("#cardImage").src = `portfolio/public/images/pigwidgeon.png`;
    };
    
}

main();