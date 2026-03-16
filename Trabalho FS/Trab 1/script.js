function entrar() {

    let usuario = document.getElementById("loginUsuario").value;
    let senha = document.getElementById("loginSenha").value;

    if (usuario === "" || senha === "") {
        alert("Preencha usuário e senha");
        return;
    }

    document.getElementById("login").style.display = "none";
    document.getElementById("menu").style.display = "block";
}

function abrirCadastro() {
    document.getElementById("login").style.display = "none";
    document.getElementById("cadastro").style.display = "block";
}

function voltarLogin() {
    document.getElementById("cadastro").style.display = "none";
    document.getElementById("login").style.display = "block";
}

function cadastrar() {

    let nome = document.getElementById("nome").value;
    let email = document.getElementById("email").value;
    let usuario = document.getElementById("usuarioCadastro").value;
    let senha = document.getElementById("senhaCadastro").value;

    if (nome === "" || email === "" || usuario === "" || senha === "") {
        alert("Preencha todos os campos");
        return;
    }

    alert("Cadastro realizado com sucesso");

    voltarLogin();
}

function mostrar(tipo) {

    let conteudo = document.getElementById("conteudo");

    if (tipo === "pontos") {

        conteudo.innerHTML = `
            <h3>Buscar Pontos de Descarte</h3>

            <input id="cidade" placeholder="Digite sua cidade">

            <button onclick="buscarPontos()">Buscar</button>

            <div id="resultado"></div>
        `;
    }

    if (tipo === "denuncia") {

        conteudo.innerHTML = `
            <h3>Registrar Denúncia</h3>

            <input id="ruaDenuncia" placeholder="Rua">
            <input id="numeroDenuncia" placeholder="Número">
            <input id="bairroDenuncia" placeholder="Bairro">
            <input id="cidadeDenuncia" placeholder="Cidade">

            <textarea id="descricaoDenuncia" placeholder="Descrição do problema"></textarea>

            <label>Anexar foto</label>
            <input type="file">

            <button onclick="enviarDenuncia()">Enviar denúncia</button>
        `;
    }

    if (tipo === "verDenuncias") {

        conteudo.innerHTML = `
            <h3>Denúncias Ativas</h3>

            <div class="card">
                <b>Local:</b> Rua das Palmeiras<br>
                <b>Problema:</b> Descarte de entulho em terreno vazio
            </div>

            <div class="card">
                <b>Local:</b> Av. Central<br>
                <b>Problema:</b> Lixo acumulado próximo ao bueiro
            </div>

            <div class="card">
                <b>Local:</b> Rua das Flores<br>
                <b>Problema:</b> Descarte irregular de móveis
            </div>
        `;
    }

    if (tipo === "coleta") {

        conteudo.innerHTML = `
            <h3>Solicitar Coleta</h3>

            <select id="material">
                <option>Tipo de material</option>
                <option>Plástico</option>
                <option>Ferro</option>
                <option>Madeira</option>
                <option>Eletrônicos</option>
                <option>Entulho</option>
            </select>

            <input id="ruaColeta" placeholder="Rua">
            <input id="numeroColeta" placeholder="Número">
            <input id="bairroColeta" placeholder="Bairro">
            <input id="cidadeColeta" placeholder="Cidade">

            <label>Anexar foto do material</label>
            <input type="file">

            <button onclick="solicitarColeta()">Solicitar coleta</button>
        `;
    }

}

function buscarPontos() {

    let cidade = document.getElementById("cidade").value;

    if (cidade === "") {
        alert("Digite a cidade");
        return;
    }

    let resultado = document.getElementById("resultado");

    resultado.innerHTML = `
        <div class="card">
            ♻️ Ecoponto Bairro Verde<br>
            Rua das Palmeiras, 120
        </div>

        <div class="card">
            🔩 Reciclagem Industrial<br>
            Rua das Indústrias, 45
        </div>

        <div class="card">
            🔋 Ponto de Pilhas e Baterias<br>
            Av. Central, 300
        </div>
    `;
}

function enviarDenuncia() {

    let rua = document.getElementById("ruaDenuncia").value;
    let numero = document.getElementById("numeroDenuncia").value;
    let bairro = document.getElementById("bairroDenuncia").value;
    let cidade = document.getElementById("cidadeDenuncia").value;
    let descricao = document.getElementById("descricaoDenuncia").value;

    if (rua === "" || numero === "" || bairro === "" || cidade === "" || descricao === "") {
        alert("Preencha todos os campos");
        return;
    }

    alert("Denúncia enviada com sucesso");
}

function solicitarColeta() {

    let material = document.getElementById("material").value;
    let rua = document.getElementById("ruaColeta").value;
    let numero = document.getElementById("numeroColeta").value;
    let bairro = document.getElementById("bairroColeta").value;
    let cidade = document.getElementById("cidadeColeta").value;

    if (material === "Tipo de material" || rua === "" || numero === "" || bairro === "" || cidade === "") {
        alert("Preencha todos os campos");
        return;
    }

    alert("Solicitação enviada com sucesso");
}