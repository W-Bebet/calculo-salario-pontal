function calcularSalario1() {
    var QuinzenaBruto = document.getElementById("inPrimeiraQuinzena");
    var Quinzena1 = Number(QuinzenaBruto.value);
    var outQuinzena1 = document.getElementById("outPrimeiraQuinzena");

    //cria as váriaveis de calculo para primeira quinzena de ganhos
    var comissao = (4/100 * Quinzena1);
    var DSR = (comissao / 25) * 4;

    comissao += DSR;
    var passagem = (6/100) * comissao;
    var INSS = (9/100) * comissao;
    var IRRF = 0;

    if(comissao > 1903.98){
        IRRF = (7.5/100) * comissao;
    } if(comissao > 2826.65){
        IRRF = (15/100) * comissao;
    }  if(comissao > 3751.06) {
        IRRF = (22.5/100) * comissao;
    } if(comissao > 4664.68) {
        IRRF = (27.5/100) * comissao;
    } if(comissao > 2571.29) {
        INSS = (12/100) * comissao;
    }  if(comissao > 3856.94)
    {INSS = (14/100) * comissao;
}
 var desconto = Math.floor(INSS + IRRF + passagem);
 var salario = Math.floor(comissao - desconto);

outQuinzena1.textContent = "Olá! A sua comissão na primeira quinzena foi de: R$" + comissao.toFixed(2)
+ "\nSegue abaixo os descontos. \nVale Transporte R$: " + passagem.toFixed(2) +"\nINSS R$: " + INSS.toFixed(2) + "\nIRRF R$: " + IRRF.toFixed(2)
+ "\nSalário liquido R$: " + salario.toFixed(2);

}
var btQuinzena1 = document.getElementById("btPrimeiraQuinzena");
btQuinzena1.onclick = calcularSalario1;


function calcularSalario2() {
    var QuinzenaBruto2 = document.getElementById("inSegundaQuinzena");
    var Quinzena2 = Number(QuinzenaBruto2.value);
    var outQuinzena2 = document.getElementById("outSegundaQuinzena");

    //cria as váriaveis de calculo para primeira quinzena de ganhos
    var comissao = (4/100 * Quinzena2);
    var DSR = (comissao / 25) * 4;

    comissao += DSR;
    var passagem = (6/100) * comissao;
    var INSS = (9/100) * comissao;
    var IRRF = 0;
    
        if(comissao > 1903.98){
            IRRF = (7.5/100) * comissao;
        }  if(comissao > 2826.65){
            IRRF = (15/100) * comissao;
        }  if(comissao > 3751.06) {
            IRRF = (22.5/100) * comissao;
        }  if(comissao > 4664.68) {
            IRRF = (27.5/100) * comissao;
        }  if(comissao > 2571.29) {
            INSS = (12/100) * comissao;
        }  if(comissao > 3856.94)
        {INSS = (14/100) * comissao;
    }
     var desconto = Math.floor(INSS + IRRF + passagem);
     var salario = Math.floor(comissao - desconto);

outQuinzena2.textContent = "A sua comissão na Segunda quinzena foi de: R$" + comissao.toFixed(2) +
 "\nSegue abaixo os descontos." +  
 "\nVale Transporte R$: " + passagem.toFixed(2) +"\nINSS R$: " + INSS.toFixed(2) + 
 "\nIRRF R$: " + IRRF.toFixed(2)
+ "\nSalário liquido R$: " + salario.toFixed(2);
}
var btQuinzena2 = document.getElementById("btSegundaQuinzena");
btQuinzena2.onclick = calcularSalario2;
 
function salarioDoMes() {
    var bruto1 = document.getElementById("inPrimeiraQuinzena");
    var bruto2 = document.getElementById("inSegundaQuinzena");
    var outSalarioMes1 = document.getElementById("outSalarioMes1");
    var outSalarioMes2 = document.getElementById("outSalarioMes2");
    var outSalario =  document.getElementById("outSalario");

    var bruto1 = Number(bruto1.value);
    var bruto2 = Number(bruto2.value);

    var brutoTotal = bruto1 + bruto2;

    var comissao = (4/100) * brutoTotal;
    var DSR = (comissao / 25) * 4;

    comissao += DSR;
    var passagem = (6/100) * comissao;
    var INSS = (9/100) * comissao;
    var IRRF = 0;

    if(comissao > 1903.98){
        IRRF = (7.5/100) * comissao;
    } if(comissao > 2826.65){
        IRRF = (15/100) * comissao;
    } if(comissao > 3751.06) {
        IRRF = (22.5/100) * comissao;
    } if(comissao > 4664.68) {
        IRRF = (27.5/100) * comissao;
    } if(comissao > 2571.29) {
        INSS = (12/100) * comissao;
    } if(comissao > 3856.94)
    {INSS = (14/100) * comissao;
}

var desconto1 = (INSS + passagem + IRRF);
var total = (comissao - desconto1);

    outSalarioMes1.textContent = 
    "Valor Bruto vendido R$: " + brutoTotal.toFixed(2) +
    "\nComissão do Mês R$: " + comissao.toFixed(2) + 
    "\nSegue abaixo os descontos.";

    outSalarioMes2.textContent = 
    "\nVale Transporte R$: " + passagem.toFixed(2) + 
    "\nINSS R$: " + INSS.toFixed(2) + 
    "\nIRRF R$: " + IRRF.toFixed(2) + " Ou em % " + "\t" + (IRRF / comissao) * 100;
    outSalarioMes2.style.color = "black";

    outSalario.textContent = "Salário líquido R$: " + total.toFixed(2);
    outSalario.style.color = "green";

}
var btSalMes = document.getElementById("btSalMes");
btSalMes.onclick = salarioDoMes;