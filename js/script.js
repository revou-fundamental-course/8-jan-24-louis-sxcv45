function calculate(sideLength, result){
    var sisi = document.getElementById(sideLength).value;
    var result = document.getElementById(result);
    
    if (sideLength === 'sisi'){
        if (sisi !== ''){
            var luas = parseInt(sisi) * parseInt(sisi);
            result.innerHTML = "L = S x S <br>" + "L = " + sisi + " x "+ sisi + "<br>" + "L = " + luas;
        }
        else{
            window.alert("Please Input the Side Length");
            result.innerHTML = "";
        }
    }
    else if (sideLength === 'sisiKeliling'){
        if (sisi !== ''){
            var keliling = 4 * parseInt(sisi);
            result.innerHTML = "K = 4 x S <br>" + "K = " + "4" + " x " + sisi + "<br>" + "K = " + keliling;
        }
        else{
            window.alert("Please Input the Side Length");
            result.innerHTML = "";
        }
    }
}

function enterResult(event, sideLength, result){
    if(event.key === 'Enter'){
        result.innerHTML = sisi === '' ? window.alert("Please Input the Side Length") : calculate(sideLength, result);
    }
    
    
}

function reset(sideLength, result){
    document.getElementById(sideLength).value = '';
    document.getElementById(result).innerHTML = '';
}