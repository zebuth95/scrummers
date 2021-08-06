import React from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
import Layout from './components/Layout';
import Login from './components/pages/Login';
import Register from './components/pages/Register';
import ProductList from './components/pages/ProductList';
import CategoryList from './components/pages/CategoryList';
import ProductForm from './components/ProductForm';
import CategoryForm from './components/CategoryForm';

function App() {
  return (
    <BrowserRouter>
        <Route path={'/'} exact component={Layout} />
        <Route path={'/login'} exact component={Login} />
        <Route path={'/register'} exact component={Register} />
        <Route path={'/products'} exact component={ProductList} />
        <Route path={'/products/create'} component={ProductForm} />
        <Route path={'/products/:id/edit'} component={ProductForm} />
        <Route path={'/categories'} exact component={CategoryList} />
        <Route path={'/categories/create'} component={CategoryForm} />
        <Route path={'/categories/:id/edit'} component={CategoryForm} /> 
    </BrowserRouter>
  );
}

export default App;
