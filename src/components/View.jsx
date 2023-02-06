import { useEffect, useState } from "react";
import SpaceChat from "./SpaceChat";
import SpaceEntrie from "./SpaceEntrie";

const View = (props) => {
    const [mensagens, setMensagens] = useState([]);
    const [usuarios, setUsuarios] = useState([]);
    //temporário
    const [admin, setAdmin] = useState(props.admin);

    useEffect(() => {
        buscaMensagens();
        buscaUsuarios();
    }, []);

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

    function buscaMensagens() {
        fetch("http://localhost/?query=SELECT%20*%20FROM%20mensagem")
            .then((response) => response.json())
            .then((data) => {
                const tempMensagens = [];

                data.map((element) => {
                    tempMensagens.push({ id: element[0], texto: element[1], autor: element[2] });
                });

                setMensagens(tempMensagens);
                setTimeout(focaUltimaMensagem);
            });
    }

    function focaUltimaMensagem() {
        const messageTexts = document.querySelectorAll(".messageText");
        const lastMessageText = messageTexts[messageTexts.length - 1];
        lastMessageText?.scrollIntoView();
    }

    function submit() {
        const entrie = document.querySelector("#entrie");

        let query = {
            query: `INSERT INTO mensagem (texto, autor) VALUES ('${entrie.value}', '${admin.id}');`,
        };

        let options = {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(query),
        };

        fetch("http://localhost/", options).then(() => {
            buscaMensagens();
        });

        entrie.value = "";
    }

    return (
        <div className="view">
            <SpaceChat mensagens={mensagens} usuarios={usuarios} />
            <SpaceEntrie submit={submit} />
        </div>
    );
};

export default View;
