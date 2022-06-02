let btn = document.querySelector(".btn");

btn.addEventListener("click", function () {
    let randomNumber = Math.floor(Math.random() * 100);
    let input1 = document.querySelector("#yourName").value;
    let input2 = document.querySelector("#loveName").value;


    if (input1 == "") {
        alert("type your name")
    } else if (input2 === "") {
        alert("type your darlings name")
    } else if (input1 == "said" && input2 == "alev") {
        document.querySelector("#demo").textContent = "100";
    } else if (input1 == "alev" && input2 == "said") {
        document.querySelector("#demo").textContent = "100";
    } else if (input1 != "" && input2 != "") {
        console.log(input1);
        console.log(input2);
        document.querySelector("#demo").textContent = randomNumber;
    }



});