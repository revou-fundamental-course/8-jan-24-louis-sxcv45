function calculate(sideLength, result){
    var sisi = document.getElementById('sisi').value;
    var sisiKeliling = document.getElementById('sisiKeliling').value;
    var result = document.getElementById(result);

    if (sideLength === 'sisi'){
        var luas = sisi * sisi;
        result.innerHTML = "L = S x S <br>" + "L = " + sisi + "*"+ sisi + "<br>" + "L = " + luas;
    }
    else{
        var keliling = 4 * sisiKeliling;
        result.innerHTML = "L = 4 x S <br>" + "L = " + "4" + "*" + sisiKeliling + "<br>" + "L = " + keliling;
    }
}

function reset(sideLength, result){
    document.getElementById(sideLength).value = '';
    document.getElementById(result).innerHTML = '';
}