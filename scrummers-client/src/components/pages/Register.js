import React, {useState} from 'react';
import '../styles/Login.css';
import axios from 'axios';
import {Redirect, Link} from 'react-router-dom';


const Register = () => {
    const [first_name, setFirstName] = useState('')
    const [last_name, setLasName] = useState('')
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [redirect, setRedirect] = useState(false);
    
    const submit = async (e) => {
        e.preventDefault();
        const data = {
            first_name,
            last_name,
            email,
            password
          };
        axios.post('user/', data)
        .then(res => {
            setRedirect(true)
        })
        .catch(err => {
            console.log(err)
        });
    }

    if (redirect){
        return <Redirect to={'/login/'} />
    }

    return (
        <main className="form-signin" style={{transform: 'translate(0, 40%'}}>
            <h1>Create user</h1>
            <form >
                <div className="form-floating">
                <input type="text" className="form-control"  
                    onChange={e => setFirstName(e.target.value)}
                    />
                <label >First name</label>
                </div>
                <div className="form-floating">
                <input type="text" className="form-control"
                    onChange={e => setLasName(e.target.value)}
                    />
                <label >Last name</label>
                </div>
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
                </div>
                <button className="w-100 btn btn-lg btn-primary" onClick={submit} style={{borderRadius: '2rem'}} >Save User</button>
                <br />
                <br />
                <br />
                <Link to='/login'  className="w-100 btn btn-lg btn-primary" style={{borderRadius: '2rem'}} >Back to login</Link>
                <p className="mt-5 mb-3 text-muted">Copyright &copy; Juan Andrés Echeverri Saldarriaga - Scrummers Test</p>
            </form>
        </main>
    )
}

export default Register
