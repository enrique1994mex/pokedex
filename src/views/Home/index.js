import Login from '../Login';
import Layout from '../../components/Layout';
import { useEffect } from 'react';

const Home = () => {

    const user =  JSON.parse(localStorage.getItem('user'));
    console.log(user); 

    return (
        <>
            {
                user ? <Layout /> : <Login />
            }
        </>
    )

}

export default Home; 