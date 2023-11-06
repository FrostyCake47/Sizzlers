const button1 = document.getElementById("button1");
const button2 = document.getElementById("button2");
const button3 = document.getElementById("button3");
const button4 = document.getElementById("button4");

const output = document.getElementById("output");

button1.addEventListener("click", function() {
    document.getElementById("output").innerHTML = "Value: Button 1 Clicked";
});

button2.addEventListener("click", function() {
    output.textContent = "Value: Button 2 Clicked";
});

button3.addEventListener("click", function() {
    output.textContent = "Value: Button 3 Clicked";
});

button4.addEventListener("click", function() {
    output.textContent = "Value: Button 4 Clicked";
});