const mail = document.getElementById("inp_txt_email");
const pass = document.getElementById("inp_txt_senha");
const nome = document.getElementById("inp_txt_nome");
const confpass = document.getElementById("inp_txt_confirmasenha");
const text = document.getElementById("inp_txt");
const check = document.getElementById("check")
const fone = document.getElementById("inp_txt_fone");
const desc = document.getElementById("mensagem_usuario");

function Enviar() {

    if (mail.value == "") {
        alert("Insira um endereço de e-mail válido.")
        mail.focus();
    } else if (pass.value == "") {

        alert("Insira uma senha de segurança.");
        pass.focus();
    }
    else {
        alert("Usuário logado com sucesso.");
        window.location.href = '../index.html'
    }

}

function enviarCadastro() {

    if (nome.value == "") {
        alert("Preencha o nome.")
        nome.focus();
    } else if (mail.value == "") {

        alert("Preencha o e-mail.");
        mail.focus();
    } else if (fone.value == "") {

        alert("Preencha o telefone.");
        fone.focus();
    } else if (pass.value == "") {

        alert("Insira uma senha de segurança.");
        pass.focus();
    } else if (confpass.value == "") {

        alert("Confirme a senha de segurança.");
        confpass.focus();
    } else if (pass.value == confpass.value) {

        alert("A senhas são diferentes");
        confpass.focus();
    }
    else {
        alert("Usuário logado com sucesso."); 
        window.location.href = '../index.html'
        
    }
}


function enviarNews() {

    if (text.value == "") {
        alert("Preencha o e-mail.")
        text.focus();
    } else if (check.checked == false) {

        alert("Selecione o check.");
        check.focus();
    } else {
        alert("e-mail cadastrado com sucesso.");
        window.location.reload()
    }

}

function enviarFaleConosco() {

    if (nome.value == "") {
        alert("Preencha o nome.")
        nome.focus();
    } else if (mail.value == "") {

        alert("Preencha o e-mail.");
        mail.focus();
    } else if (fone.value == "") {

        alert("Preencha o telefone.");
        fone.focus();
    } else if (desc.value == "") {

        alert("Insira uma senha de segurança.");
        desc.focus();
    }
    else {
        alert("Sua mensagem foi recebida. Em breve entraremos em contato.");
        window.location.reload()
    }
}


function enviarDuvida1(){
    alert("Audiolivro ou livro falado (em inglês, audiobook ) é uma gravação do conteúdo de um livro narrado em voz alta dentro de um estúdio de gravação ou em outro ambiente com equipamento de gravação. Essa gravação se apresenta em suportes informacionais diversificados, sendo comum ser encontrada em aplicativos ou em CD.")
}


function Comprar(elemento) {
    if (!elemento.classList.contains("botoes_desfazer")) {
        elemento.classList.replace("botoes_comprar", "botoes_desfazer")
        elemento.innerHTML = "Desfazer"
    } else {
        elemento.classList.replace("botoes_desfazer", "botoes_comprar")
        elemento.innerHTML = "Comprar"
    }

}


gsap.registerPlugin(ScrollTrigger); //registrar o plugin do site greensock.com para podermos utilizá-lo

gsap.from(".animate_inicial_texto", {    
    duration: 0.6, //duração da animação
    opacity: 0,
    x: -150, //eixo de cima para baixo. Quantos px está para cima ou para baixo
    stagger: 0.3 //quantidade de segundos entre eles para carregar no site
})

gsap.from(".animate_inicial_img", {
    duration: 0.9, //duração da animação
    opacity: 0,
    x: 250,
    stagger: 0.3
})

gsap.from(".animate_inicial_artigos", {
    duration: 0.6,
    opacity: 0,
    x: -100,
    stagger: 0.2,
    delay: 1 //aguardar um segundo antes de executar essas configurações
})

gsap.from(".animate_final", {
    scrollTrigger: ".animate_final", //aciona a animação quando chegarmos a essa classe.
    duration: 0.8,
    opacity: 0,
    y: -200,
    delay: 0.5,
    stagger: 0.3
});