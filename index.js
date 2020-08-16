var rectangle = document.getElementById("rectangle");

function changeBorder(){
    var radius = document.getElementById('changeRadius').value;
    console.log(radius);
    rectangle.style.borderRadius = radius + 'px';
}