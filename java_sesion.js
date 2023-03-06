/*var cuentas =[
    {usuario:"Persona1", saldo: 10, password:"Password1"},
    {usuario:"Persona2", saldo: 500, password:"Password2"},
    {usuario:"Persona3", saldo: 990, password:"Password3"}
];
var limInf=10; //LIMITE INFERIOR DE SALDO
    var limSup=990; //LIMITE SUPERIOR DE SALDO
 
//FUNCIÓN PARA RETIRAR SALDO
 function funcionRetiro(){
   
do{
    pregunta= prompt("SI PARA CONFIRMAR EL RETIRO, CUALQUIER TECLA PARA CERRAR SESIÓN");
    if(pregunta=="SI")
        {
           do{
            dineroRetiro =prompt("Monto a retirar: $");
            if(dineroRetiro > retiroPermitido)
            {
                alert("Favor de retirar menos dinero por favor!, recuerde que el límite de retiro es: $" + retiroPermitido);
            }
            else if(dineroRetiro <= retiroPermitido)
            {
                saldo=parseFloat(saldo) - parseFloat(dineroRetiro);
                alert("Se han retirado $" + dineroRetiro + " su saldo actual es de: $" + saldo);
            }
            }while(dineroRetiro > retiroPermitido)
        }
        else
    {
        break;
    }
    }while(pregunta!="SI")
    }  
 //FUNCIÓN PARA INGRESAR SALDO
 function funcionIngreso(){

    do{
    pregunta= prompt("SI PARA CONFIRMAR EL INGRESO, CUALQUIER TECLA PARA CERRAR SESIÓN");
    if(pregunta=="SI")
    {
        do{
        dineroIngreso =prompt("Monto a ingresar: $");
        if(dineroIngreso > ingresoPermitido)
        {
            alert("Favor de ingresar menos dinero por favor!, recuerde que el límite de ingreso es: $" + ingresoPermitido);
        }
        else if(dineroIngreso <= ingresoPermitido)
        {
            saldo= parseFloat(saldo) + parseFloat(dineroIngreso);
            alert("Se han ingresado $" + dineroIngreso + " su saldo actual es de: $" + saldo);
        }
        }while(dineroIngreso > ingresoPermitido)
    }
    else
    {
        break;
    }
}while(pregunta!="SI")
}


//PRIMERA CONDICIÓN, SALDO DEBE DE ESTAR ENTRE EL LÍMITE INFERIOR Y LÍMITE SUPERIOR
function saldoLimiteSi()
{
    
    alert("Señ@r su saldo actual es de: $"+ saldo + " puedes retirar hasta $" + retiroPermitido + " e ingresar hasta $" + ingresoPermitido);
//¿DESEA INGRESAR O RETIRAR DINERO?
    
    do{
    var transaccion=prompt("¿Desea INGRESAR o RETIRAR dinero?");
        //SI EL USUARIO ELIGE INGRESAR DINERO
            if(transaccion=="INGRESAR")
            {
                funcionIngreso() 
            }
        //SI EL USUARIO ELIGE RETIRAR DINERO
            else if(transaccion=="RETIRAR")
            {
                funcionRetiro()
            }
            else
            {
                alert("Usted no eligió ninguna de las opciones INGRESAR o RETIRAR")
            }
        }
        while(transaccion!="INGRESAR" && transaccion!="RETIRAR")
    }
//CÓDIGO MAIN PARA EJECUTAR TODO EL PROGRAMA
function mainCodigo(){


    //PRIMERA CONDICIÓN, SALDO DEBE DE ESTAR ENTRE EL LÍMITE INFERIOR Y LÍMITE SUPERIOR
     if(limInf<saldo && saldo < limSup)
    {
        saldoLimiteSi()
    }        
    
    //RETIRO DE SALDO CUÁNDO SEA MENOR O IGUAL A 10 PESOS, NO PERMITIR RETIRAR
    else if(saldo == limInf){
        
        alert("Señ@r su saldo actual es de: $"+ saldo + ", no puede ser menor a $" + limInf + ", así que sólo se te permite ingresar saldo hasta $" + ingresoPermitido + " de saldo" ) 
        funcionIngreso()
    
    }
    //INGRESO DE SALDO CUÁNDO SEA MAYOR O IGUAL A 990 PESOS, NO PERMITIR INGRESAR
    else if(saldo == limSup)
                {
            alert("Señ@r su saldo actual es de: $"+ saldo + ", no puede ser mayor a $" + limSup + ", así que sólo se te permite retirar hasta $" + retiroPermitido + " de saldo") 
            funcionRetiro()
                }
    
    }
    
    var retiroPermitido= saldo - limInf;
var ingresoPermitido= limSup - saldo;

//CÓDIGO MAIN PARA EJECUTAR TODO EL PROGRAMA
mainCodigo()
    */
//CUENTAS
var cuentas =[
    {usuario:"Persona1", saldo: 10, password:"Password1"},
    {usuario:"Persona2", saldo: 500, password:"Password2"},
    {usuario:"Persona3", saldo: 990, password:"Password3"}
];
do{   
    
function inicioSesion(){
    //usuarioingreso=prompt("Ingrese su usuario por favor");
    //passwordingreso=prompt("Ingrese su contraseña por favor");
    var usuarioingreso=document.getElementById("usuario").value;
    var passwordingreso=document.getElementById("password").value;
    
//    for (let i = 0; i < cuentas.length; i++) {
    if(cuentas[0].usuario == usuarioingreso && cuentas[0].password == passwordingreso)
{
        alert("Bienvenido: " + usuarioingreso);
        window.location.href="theme.html";
}
    else
{
    alert("¡ERROR EN LA CONTRASEÑA O USUARIO!, VUELTA A INTENTAR")
}

//}
//CUENTA O CONTRASEÑA INCORRECTAS
}

}while(cuentas[0].usuario != usuarioingreso || cuentas[0].password != passwordingreso)
