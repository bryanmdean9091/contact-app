import LoginForm from "./LoginForm"

const LoginPage = (props) => {
    return (
        <div className="text-center">
            <LoginForm />
            <div>
                <p>Don't have an account? <a href="/register">Register</a>.</p>
            </div> 
        </div>
    )
}

export default LoginPage;