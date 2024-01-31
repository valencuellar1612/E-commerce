import { useForm } from "react-hook-form"
import useAuth from "../../hook/useAuth"
import './styles/FormLogin.css'

const FormLogin = () => {

    const {register, handleSubmit, reset} = useForm()

    const { loginUser } = useAuth()

    const submit = data => {
        loginUser(data)
    }

    return (
        <form  className="login" onSubmit={handleSubmit(submit)}>
            <h3 className="login__welcom">Welcome! Enter your email and password to continue</h3>
            <label className="login__email">
                <span className="login__email-name">Email</span>
                <input className="login__email-input" {...register('email')} type="email" />
            </label>
            <label className="login__password">
                <span className="login__password-name">Password</span>
                <input className="login__password-input" {...register('password')} type="password" />
            </label>
            <button className="login__btn">Login</button>
        </form>
    )
}

export default FormLogin