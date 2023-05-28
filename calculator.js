function Solve(val){
    var v= document.getElementById('display');
    v.value+= val;
}

function Result() {
    var num1 = document.getElementById('display').value;
    var num2 = eval(num1);
    document.getElementById('display').value = num2;
}

function Clear() {
    var inp = document.getElementById('display');
    inp.value = '';
}