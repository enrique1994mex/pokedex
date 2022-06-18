import { useState } from 'react';

const Login = () => {

    console.log(JSON.parse(localStorage.getItem('user')));

    //Componentes controlados
    const [email, setEmail] = useState(""); 
    const [password, setPassword] = useState("");

    const handleEmail = ({target}) => {
        setEmail(target.value); 
    }

    const handlePassword = ({target}) => {
        setPassword(target.value);
    }

    const handleSubmit = async (e) => {
        const user = {email, password}; 
        console.log(user); 
        localStorage.setItem('user', JSON.stringify(user));
        //window.location.href = "/"
        e.preventDefault(); 
    }
    return(
        <div>
            <form onSubmit={handleSubmit}>
                <h1>Pokedex</h1>
                <div>
                    <label htmlFor="InputEmail">Correo electrónico</label>
                    <input type="email" id="InputEmail" value={email} name="email" onChange={handleEmail} required/>
                </div>
                <div>
                    <label htmlFor="InputPassword">Contraseña</label>
                    <input type="password" id="InputPassword" minLength="8" value={password} name="password" onChange={handlePassword} required/>
                </div>
                <button type="submit">Iniciar Sesión</button>
            </form>
        </div>
    )
} 

export default Login;  