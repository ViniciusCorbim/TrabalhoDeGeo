const alternativasQ1 = document.getElementsByClassName("AlternativasQuestao1");
const buttonEnviar = document.getElementById("enviar");

for (let valor of alternativasQ1) {
  valor.addEventListener("click", marcaQ1);
}

function marcaQ1() {
  for (let valor of alternativasQ1) {
    valor.classList.remove("selecionadoQ");
    valor.classList.remove("selQ1");
  }
  this.classList.add("selecionadoQ");
  this.classList.add("selQ1");
}

buttonEnviar.addEventListener("click", function () {
  const AlternativaCerta1 = document.getElementById("AlternativaCerta1");
  const selQ1 = document.getElementsByClassName("selQ1")[0];
  console.log(AlternativaCerta1);
  if (AlternativaCerta1.classList.contains("selQ1")) {
    selQ1.parentNode.classList.add("certo");
  } else {
    selQ1.parentNode.classList.add("errado");
  }
});
