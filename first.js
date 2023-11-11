
function Hello7() {
    var x1 = document.getElementById('x1').value;
    var x2 = document.getElementById('x2').value;
    var x3 = document.getElementById('x3');
    var y = Number(x1) + Number(x2);
    x3.innerHTML= 'Результат = ' + y;
}
function Hello8() {
    var x1 = document.getElementById('x11').value;
    var x2 = document.getElementById('x22').value;
    var x3 = document.getElementById('x33');
    var y = Number(x1) - Number(x2);
    x3.innerHTML= 'Результат = ' + y;
}
function Hello9() {
    var x1 = document.getElementById('x111').value;
    var x2 = document.getElementById('x222').value;
    var x3 = document.getElementById('x333');
    var y = Number(x1) * Number(x2);
    x3.innerHTML= 'Результат = ' + y;
}
function Hello10() {
    var x1 = document.getElementById('x1111').value;
    var x2 = document.getElementById('x2222').value;
    var x3 = document.getElementById('x3333');
    var y = Number(x1) / Number(x2);
    x3.innerHTML= 'Результат = ' + y;
}