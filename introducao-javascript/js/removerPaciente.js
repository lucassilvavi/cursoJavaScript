var tabela =  document.querySelector("table");

tabela.addEventListener("dblclick",function (event) {
   var pacienteClicado = event.target; //  target quem sofreu propriamente o evento
   var paiDoAlvo = pacienteClicado.parentNode; // parentNode selecionarmos o pai de um elemento
    paiDoAlvo.classList.add("fadeOut");
    setTimeout(function () {
        paiDoAlvo.remove();
    },500);

});
