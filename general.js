let btnConfiguracao = document.getElementById("engrenagem-config");
let modalEscondeAparece = document.querySelector("#modal-config");

btnConfiguracao.onclick = function () {
  if (modalEscondeAparece.style.display === "none" || modalEscondeAparece.style.display === "") {
    modalEscondeAparece.style.display = "flex";
  } else {
    modalEscondeAparece.style.display = "none";
  }
};
