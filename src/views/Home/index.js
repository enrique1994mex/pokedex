import React from 'react'; 
import Login from '../Login';
import Layout from '../../components/Layout';

const Home = () => {

    //Datos del usuario 
    const user =  JSON.parse(localStorage.getItem('user'));
   
    return (
        <div>
            {
                user ? <Layout/> : <Login />
            }
        </div>
    )

}

export default Home; 