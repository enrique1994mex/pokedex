import React from 'react'; 
import Login from '../Login';
import Layout from '../../components/Layout';

const Home = () => {

    const user =  JSON.parse(localStorage.getItem('user'));
    console.log(user); 
    
    return (
        <div>
            {
                user ? <Layout /> : <Login />
            }
        </div>
    )

}

export default Home; 