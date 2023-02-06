import { useEffect, useState } from "react";

const LoginView = (props) => {

    const [usuarios, setUsuarios] = useState([]);

    function notifica(texto) {
        props.mostraNotificacao(texto);
    }

    useEffect(()=>{
        buscaUsuarios();
    }, []);


    function logar() {

        const inputUsuario = document.querySelector("#usuario");
        const inputSenha = document.querySelector("#senha");

        let atualUser = usuarios.filter( usuario => usuario.usuario == inputUsuario.value && usuario.senha == inputSenha.value)[0];

        if(atualUser){
            notifica("Bem vindo de volta, "+atualUser.nome+" !");
            props.setAdmin(atualUser);
            props.setPage("chat");
        }
        else {
            notifica("Usuário não encontrado.");
        }
    }

    function buscaUsuarios() {
        fetch("http://localhost/?query=SELECT%20*%20FROM%20usuario")
            .then((response) => response.json())
            .then((data) => {
                const tempUsuarios = [];

                data.map((element) => {
                    tempUsuarios.push({ id: element[0], nome: element[1], imagem: element[2], usuario: element[3], senha: element[4] });
                });

                setUsuarios(tempUsuarios);
            });
    }


    return (
        <div className="loginView">
            <div className="campo">
                <input type="text" id="usuario" required />
                <label htmlFor="usuario">Usuario</label>
            </div>
            <div className="campo">
                <input type="text" id="senha" required />
                <label htmlFor="senha">Senha</label>
            </div>
            <button onClick={logar}>Logar</button>
        </div>
    )
}

export default LoginView