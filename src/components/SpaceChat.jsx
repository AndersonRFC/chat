const SpaceChat = (props) => {

    function buscaUser(id) {
        return props.usuarios.find((user) => user.id == id);
    }

    return (
        <div className="spaceChat">
            {props.mensagens.map((element, index) => {
                return (
                    <div key={index}>
                        {index != 0 ? (
                            props.mensagens[index - 1]?.autor != element.autor ? (
                                <div className="profileArea">
                                    <img className="profileImage" src={"./src/images/" + buscaUser(element.autor)?.imagem} />
                                    <p className="profileName">
                                        {buscaUser(element.autor)?.nome}
                                    </p>
                                </div>
                            ) : null
                        ) : (
                            <div className="profileArea">
                                <img className="profileImage" src={"./src/images/" + buscaUser(element.autor)?.imagem} />
                                <p className="profileName">
                                    {buscaUser(element.autor)?.nome}
                                </p>
                            </div>
                        )}
                        <div className="messageArea">
                            <p className="messageText">{element.texto}</p>
                        </div>
                    </div>
                );
            })}
        </div>
    );
};

export default SpaceChat;
