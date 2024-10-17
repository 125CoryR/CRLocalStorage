var  currentNumber = 0;
var currentColor = "orange";
var savedObjects =[];
function Orange(){
    document.getElementById("numberDisplay").style.backgroundColor = "orange";
    currentColor = "orange";
}
function Grey(){
    document.getElementById("numberDisplay").style.backgroundColor = "grey";
    currentColor = "grey";
}
function Purple(){
    document.getElementById("numberDisplay").style.backgroundColor = "purple";
    currentColor = "purple";
}
function Minus()
{
    document.getElementById("numberDisplay").innerHTML = --currentNumber;
}
function Plus()
{
    document.getElementById("numberDisplay").innerHTML = ++currentNumber;
}
function ReloadSave()
{
  var savedArray = JSON.parse(localStorage.getItem("savedArray"));
    for(var i = 0; i < savedArray.length; i++)
    {
        var div = document.createElement("div");
        div.style.color = savedArray[i].color;
        div.innerText = savedArray[i].number;
        div.style.fontSize = "xxx-large";
         var object = {color:[savedArray[i].color], number:[savedArray[i].number]}
         savedObjects[savedObjects.length] = object;
        document.getElementById("savedNumbersDiv").appendChild(div);
    }
}
function Save(){

   var div = document.createElement("div");
   div.style.color = currentColor;
   div.innerText = currentNumber;
    div.style.fontSize = "xxx-large";
    var object = {color:[currentColor], number:[currentNumber]}
    savedObjects[savedObjects.length] = object;
    localStorage.setItem("savedArray", JSON.stringify(savedObjects));

   document.getElementById("savedNumbersDiv").appendChild(div);

}