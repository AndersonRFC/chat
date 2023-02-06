import '../styles/Home.css'
import View from "./View"
import Login from "./Login"
import SignUp from './SignUp'
import { useEffect, useState } from 'react'


const Home = () => {

    const [page, setPage] = useState("login");
    const [notificacao, setNotificacao] = useState();
    const [admin, setAdmin] = useState();

    function mostraNotificacao(texto){
        setNotificacao({exibir: true, texto: texto})
        setTimeout(() => {
            setNotificacao({exibir: false, texto: texto});
        }, 3000);
    }

    useEffect(() => {
        mostraNotificacao("Seja bem vindo!");
    }, []);

    return (
        <div className='home'>
            <div className="pages">
                <div className="page" onClick={() => { setPage("cadastro") }}><p>Cadastro</p></div>
                <div className="page" onClick={() => { setPage("login") }}><p>Login</p></div>
            </div>
            {page == "cadastro" ? <SignUp mostraNotificacao={mostraNotificacao} /> : null}
            {page == "login" ? <Login setPage={setPage} mostraNotificacao={mostraNotificacao} setAdmin={setAdmin} /> : null}
            {page == "chat" ? <View admin={admin} /> : null}

            <div className="notificacao" style={{ display: notificacao?.exibir ? 'flex' : 'none' }}>{notificacao?.texto}</div>
        </div>
    )
}

export default Home