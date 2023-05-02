import './App.css';
import NavbarComponent from '../components/Navbar';
import { Outlet } from 'react-router-dom';

const App = () => {
    return (
        <>
            <NavbarComponent />
            <Outlet />
        </>
    );
};

export default App;

export const favListLoader = () => {
    const favList = []
    return favList
}