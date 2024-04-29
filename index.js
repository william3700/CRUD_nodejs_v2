const fechaActual = new Date();
const mesActual=fechaActual.getMonth()+1;
const diaActual=fechaActual.getDate();
const anioActual=fechaActual.getFullYear();
const ref=anioActual+"-"+mesActual+"-"+diaActual;
function mm(){
    var peso= document.getElementById('peso').value;
    var altura= document.getElementById('altura').value;
    var fecha=document.getElementById('fecha').value;
    var sexo=document.getElementById('sexo').value;
    var anioNacimiento=parseFloat(fecha.substr(0,4));
    var mesNacimiento=parseFloat(fecha.substr(5,2));
    var edadAnios=anioActual-anioNacimiento;
    var edadMes=((edadAnios*12)+(mesActual-mesNacimiento));
    console.log(fecha);
    console.log(ref);
    console.log(edadAnios);
    console.log(Math.floor(edadMes));
    if (peso=="" || altura==""){
        document.getElementById("ss").innerHTML="";
    }else{
        var icm=10000*parseFloat(peso)/(parseFloat(altura)*parseFloat(altura));
        if(icm<18.5){
            document.getElementById("ss1").innerHTML="Bajo peso";    
        }else if(icm>18.5 && icm<=24.9){
            document.getElementById("ss1").innerHTML="Normal";  
        }else if(icm>25 && icm<=29.9){
            document.getElementById("ss1").innerHTML="Sobrepeso";  
        }else if(icm>30){
            document.getElementById("ss1").innerHTML="Obesidad";  
        }
        document.getElementById("ss").innerHTML=icm.toFixed(3);
        document.getElementById("ss2").innerHTML=Math.floor(edadMes/12)+" años " + Math.round((12*((edadMes/12)-Math.floor(edadMes/12))))+" meses";
        document.getElementById("ss3").innerHTML=sexo;
    }
}





