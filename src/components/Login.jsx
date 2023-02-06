import LoginView from "./LoginView"

const Login = (props) => {
    return (
        <>
        <LoginView setPage={props.setPage} mostraNotificacao={props.mostraNotificacao} setAdmin={props.setAdmin}/>
        </>
    )
}

export default Login