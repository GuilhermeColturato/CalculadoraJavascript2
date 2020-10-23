function resultado(){ 
    var operacao = document.calculadora.vis.value;
    document.calculadora.vis.value= eval(operacao);
}

function apagar(){
    document.calculadora.vis.value="";
}

function button(x){ 
    document.calculadora.vis.value=document.calculadora.vis.value+x;
}