import React, {useState} from 'react';
import '../styles/Login.css';
import axios from 'axios';
import {Redirect, Link} from 'react-router-dom';
import logo from '../static/logo.png';
import Swal from 'sweetalert2';


const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [redirect, setRedirect] = useState(false);

    const submit = async (e) => {
        e.preventDefault();
        const data = {
            email,
            password
          };
        axios.post('login/', data)
        .then(res => {
            localStorage.setItem("access", JSON.stringify(res.data.access));
            localStorage.setItem("refresh", JSON.stringify(res.data.refresh));
            setRedirect(true)
        })
        .catch(err => {
            console.log(err)
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: '¡Correo o constraseña incorrecta!'
                })
        });
    }

    const register = () => {
        return <Redirect to={'/register'} />
    }

    if (redirect){
        return <Redirect to={'/'} />
    }

    return (
        <main className="form-signin" style={{transform: 'translate(0, 40%'}}>
            <form >
                <img src={logo} className="App-logo" alt="logo" height='120x' />

                <div className="form-floating">
                <input type="email" className="form-control" placeholder="name@example.com" 
                    onChange={e => setEmail(e.target.value)}
                    />
                <label >Email</label>
                </div>
                <div className="form-floating">
                <input type="password" className="form-control" placeholder="Password" 
                    onChange={e => setPassword(e.target.value)}
                />
                <label >Password</label>
                </div>

                <div className="checkbox mb-3">
                <label>
                    <input type="checkbox" value="remember-me" /> Remember me
                </label>
                </div>
                <button className="w-100 btn btn-lg btn-primary" onClick={submit} style={{borderRadius: '2rem'}} >Sign in</button>
                <br />
                <br />
                <br />
                <Link to='/register'  className="w-100 btn btn-lg btn-primary" style={{borderRadius: '2rem'}} >Register</Link>
                <p className="mt-5 mb-3 text-muted">Copyright &copy; Juan Andrés Echeverri Saldarriaga - Scrummers Test</p>
            </form>
        </main>
    );
};

export default Login

