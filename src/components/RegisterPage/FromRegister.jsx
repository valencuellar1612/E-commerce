import { useForm } from "react-hook-form"
import useAuth from "../../hook/useAuth"
import './styles/FormRegister.css'

const FromRegister = () => {

    const {register, handleSubmit, reset} = useForm();

    const {registerUser} = useAuth();

    const submit = (data) => {
        registerUser(data);
    };

  return (
    <form className="register" onSubmit={handleSubmit(submit)}>
        <label className="register__input">
            <span>First name</span>
            <input {...register('firstName')} type="text" />
            </label>
        <label className="register__input">
                <span>Last name</span>
                <input {...register('lastName')} type="text" />
        </label>
        <label className="register__input">
            <span>Email</span>
            <input {...register('email')} type="email" />
        </label>
        <label className="register__input">                                   <span>Password</span>
            <input {...register('password')} type="password" />
        </label>
        <label className="register__input">
            <span>Phone</span>
            <input {...register('phone')} type="text" />
        </label>
        <button className="register__btn">Register</button>
    </form>
  )
}

export default FromRegister