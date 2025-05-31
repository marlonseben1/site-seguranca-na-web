const dicas = [
  "Não compartilhe informações pessoais em excesso.",
  "Use autenticação em dois fatores.",
  "Use senhas complexas e únicas.",
  "Altere suas senhas regularmente.",
  "Não clique em links suspeitos em e-mails ou mensagens.",
  "Mantenha seu software de segurança atualizado.",
  "Verifique se o site usa conexão segura (HTTPS).",
  "Evite sites e downloads de procedência duvidosa.",
  "Bloqueie seus dispositivos com senha ou biometria.",
  "Limite o acesso a informações sensíveis.",
  "Use um gerenciador de senhas para armazenar suas credenciais com segurança.",
  "Desconfie de solicitações inesperadas de informações pessoais ou financeiras.",
  "Sempre faça logout em serviços online ao terminar de usar.",
  "Evite usar redes Wi-Fi públicas para acessar dados sensíveis.",
  "Atualize o sistema operacional e os navegadores regularmente.",
  "Revise as permissões dos aplicativos instalados no seu dispositivo.",
  "Utilize antivírus e antimalware confiáveis e mantenha-os ativos.",
  "Desative recursos como auto preenchimento de senhas em dispositivos compartilhados.",
  "Configure alertas para atividades suspeitas em suas contas online.",
  "Cuidado com extensões e plugins de navegador – use apenas os confiáveis.",
  "Evite salvar senhas diretamente no navegador.",
  "Não reutilize senhas em diferentes sites e serviços.",
  "Verifique regularmente extratos bancários e faturas para detectar fraudes.",
  "Use VPN para proteger sua conexão em redes públicas.",
  "Desconfie de ofertas e promoções muito boas para serem verdade.",
  "Proteja seu roteador com senha forte e altere a senha padrão.",
  "Faça backups regulares dos seus dados importantes.",
  "Tenha cuidado ao compartilhar sua localização em redes sociais.",
  "Revise as configurações de privacidade nas redes sociais regularmente."
];


let indiceAtual = 0;

const tituloDica = document.getElementById("titulo-dica");
const dica = document.querySelector(".dica");
const botaoProximo = document.getElementById("proxima-dica");
const botaoAnterior = document.getElementById("dica-anterior");

function atualizaDica(indice) {
  tituloDica.textContent = `Dica ${indice + 1}`;
  dica.textContent = dicas[indice];
}

function proximaDica() {
  if (indiceAtual < dicas.length - 1) {
    indiceAtual++;
    atualizaDica(indiceAtual);
  }
}

function dicaAnterior() {
  if (indiceAtual > 0) {
    indiceAtual--;
    atualizaDica(indiceAtual);
  }
}

botaoProximo.addEventListener("click", proximaDica);
botaoAnterior.addEventListener("click", dicaAnterior);

atualizaDica(indiceAtual);
