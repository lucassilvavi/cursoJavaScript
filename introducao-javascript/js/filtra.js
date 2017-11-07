var campoFiltro = document.querySelector("#filtrar-tabela");

campoFiltro.addEventListener("input", function () {
    var digitado = this.value;
    var paciente = document.querySelectorAll(".paciente");
    var expressao = new RegExp(digitado,"i");
    if(digitado.length > 0){
        paciente.forEach(function (t) {
            var nome = t.querySelector(".info-nome").textContent;
            if (!expressao.test(nome)) {
                t.classList.add("invisivel");
            }else{
                t.classList.remove("invisivel");
            }
        });
    }else{
        paciente.forEach(function (t) {
            t.classList.remove("invisivel");
        });
    }
});