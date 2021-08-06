import React, {useState, useEffect} from 'react'
import Layout from './Layout'
import settingCredentialsConfig from './settings/settings'
import './styles/Login.css'
import axios from 'axios'
import {Redirect} from "react-router-dom";


const CategoryForm = (props) => {
    const [name, setName] = useState('')
    const [description, setDescription] = useState('')
    const [redirect, setRedirect] = useState(false);

    useEffect(() => {
        (
            async () => {
                try {
                    if (props.match.params.id) {
                        const data = await axios.get(`category/${props.match.params.id}/`, settingCredentialsConfig);
                        setName(data.data.name)
                        setDescription(data.data.description)
                    }
                } catch (e) {
                    console.log(e)
                }
            }
        )();
    }, []);

    const submit = async (e) => {
        e.preventDefault();
        const data = {
            name,
            description,
        };

        if (props.match.params.id) {
            console.log(settingCredentialsConfig)
            await axios.put(`category/${props.match.params.id}/`, data, settingCredentialsConfig);
        } else {
            await axios.post('category/', data, settingCredentialsConfig);
        }

        setRedirect(true);
    }

    if (redirect) {
        return <Redirect to={'/categories'}/>;
    }

    return (
        <Layout>
            <main className="form" style={{transform: 'translate(0, 40%'}}>
            <form onSubmit={submit}>
                
                <br />
                <div className="form-floating">
                    <input type="text" className="form-control" 
                        value={name}
                        onChange={e => setName(e.target.value)}
                        />
                    <label >Name</label>
                </div>
                <br />
                <div className="form-floating">
                    <input type="text" className="form-control"
                        value={description}
                        onChange={e => setDescription(e.target.value)}
                        />
                    <label >Description</label>
                </div>
                <br />
                <button className="w-100 btn btn-lg btn-primary" type="submit" style={{borderRadius: '2rem'}} >Save</button>
            </form>
        </main>
        </Layout>
    )
}

export default CategoryForm
