import Login from "../Login";

const Home = () => {

    localStorage.setItem('user', 'Jose');

    const user = localStorage.getItem('user'); 

    

    return(
        <div>
            Desde Home 
        </div>
    )
}

export default Home; 