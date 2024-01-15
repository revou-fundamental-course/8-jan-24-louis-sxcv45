function calculate(sideLength, result){
    var sisi = document.getElementById(sideLength).value;
    var result = document.getElementById(result);

    if (sideLength === 'sisi'){
        var luas = sisi * sisi;
        result.innerHTML = "L = S x S <br>" + "L = " + sisi + "*"+ sisi + "<br>" + "L = " + luas;
    }
    else{
        var keliling = 4 * sisi;
        result.innerHTML = "L = 4 x S <br>" + "L = " + "4" + "*" + sisi + "<br>" + "L = " + keliling;
    }
}

function reset(sideLength, result){
    document.getElementById(sideLength).value = '';
    document.getElementById(result).innerHTML = '';
}