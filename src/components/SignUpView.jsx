const SignUpView = (props) => {

    function notifica(texto) {
        props.mostraNotificacao(texto);
    }

    function limpaCampos() {

        const nome = document.querySelector("#nome");
        // const imagem = document.querySelector("#imagem");
        const usuario = document.querySelector("#usuario");
        const senha = document.querySelector("#senha");

        nome.value = "";
        // imagem.value = "";
        usuario.value = "";
        senha.value = "";
    }

    function cadastra() {

        const nome = document.querySelector("#nome");
        const imagem = document.querySelector("#imagem");
        const usuario = document.querySelector("#usuario");
        const senha = document.querySelector("#senha");

        if (nome.value != "" && usuario.value != "" && senha.value != "") {
            // (imagem.value == "") ? (imagem.value = "padrao.jpg") : (null);

            let query = {
                query: `INSERT INTO usuario (nome, imagem, usuario, senha) VALUES ('${nome.value}', 'padrao.jpg', '${usuario.value}', '${senha.value}');`,
            };

            let options = {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(query),
            };

            fetch("http://localhost/", options)
                .then((response) => response.text())
                .then((data) => {
                    if (data != 0) {
                        notifica("Cadastrado com sucesso!");
                        limpaCampos();
                    }
                    else { notifica("Cadastrado Falhou.") }
                });
        }
    }

    return (
        <div className="signUpView">
            <div className="campo">
                <input type="text" id="nome" required />
                <label htmlFor="nome">Nome</label>
            </div>
            {/* <div className="campo">
                <input type="text" id="imagem" />
                <label htmlFor="imagem">imagem</label>
            </div> */}
            <div className="campo">
                <input type="text" id="usuario" required />
                <label htmlFor="usuario">Usuario</label>
            </div>
            <div className="campo">
                <input type="text" id="senha" required />
                <label htmlFor="senha">Senha</label>
            </div>
            <button onClick={cadastra}>Cadastrar</button>
        </div>
    )
}

export default SignUpView