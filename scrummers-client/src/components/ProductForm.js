import React, {useState, useEffect} from 'react'
import Layout from './Layout'
import settingCredentialsConfig from './settings/settings'
import './styles/Login.css'
import axios from 'axios'
import {Redirect} from "react-router-dom";


const ProductForm = (props) => {
    const [categories, setCategories] = useState([])
    const [category, setCategory] = useState('')
    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')
    const [price, setPrice] = useState(0)
    const [redirect, setRedirect] = useState(false);

    useEffect(() => {
        (
            async () => {
                try {
                    const data = await axios.get('category/', settingCredentialsConfig)
                    setCategories(data.data)
                    if (props.match.params.id) {
                        const pdata = await axios.get(`product/${props.match.params.id}/`, settingCredentialsConfig);
                        setCategory(pdata.data.category)
                        setTitle(pdata.data.title)
                        setDescription(pdata.data.description)
                        setPrice(pdata.data.price)
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
            category,
            title,
            description,
            price
        };

        if (props.match.params.id) {
            console.log(settingCredentialsConfig)
            await axios.put(`product/${props.match.params.id}/`, data, settingCredentialsConfig);
        } else {
            await axios.post('product/', data, settingCredentialsConfig);
        }

        setRedirect(true);
    }

    if (redirect) {
        return <Redirect to={'/products'}/>;
    }

    return (
        <Layout>
            <main className="form" style={{transform: 'translate(0, 40%'}}>
            <form onSubmit={submit}>
                
                <div className="form-floating">
                    <select className="form-select" value={category} onChange={ (e) => setCategory(e.currentTarget.value) } aria-label="Default select example">
                        <option selected>Select </option>
                            {categories.map(category => { 
                                return (
                                    <option value={category.id} >{category.name}</option>) 
                            })}
                    </select>
                </div>
                <br />
                <div className="form-floating">
                    <input type="text" className="form-control" 
                        value={title}
                        onChange={e => setTitle(e.target.value)}
                        />
                    <label >Title</label>
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
                <div className="form-floating">
                    <input type="number" className="form-control"
                        value={price}
                        onChange={e => setPrice(e.target.value)}
                        />
                    <label >Price</label>
                </div>
                <br />
                <button className="w-100 btn btn-lg btn-primary" type="submit" style={{borderRadius: '2rem'}} >Save</button>
            </form>
        </main>
        </Layout>
    )
}

export default ProductForm
