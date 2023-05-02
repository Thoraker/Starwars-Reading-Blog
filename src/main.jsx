import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import ErrorPage from './routes/ErrorPage';
import App, { favListLoader } from './routes/App';
import Personajes, { peopleLoader } from './routes/Personajes';
import Planetas, { planetsLoader } from './routes/Planetas';
import Vehículos, { vehiclesLoader } from './routes/Vehiculos';
import Home, { dataHome } from './routes/Home';
import { addFavButton } from './components/Card';


const domNode = document.getElementById('root');
const root = createRoot(domNode);


const router = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        errorElement: <ErrorPage />,
        loader: favListLoader,
        action: addFavButton,
        children: [
            {
                path: '/',
                element: <Home />,
                loader: dataHome,
            },
            {
                path: 'people',
                element: <Personajes />,
                loader: peopleLoader,
            },
            {
                path: 'vehicles',
                element: <Vehículos />,
                loader: vehiclesLoader

            },
            {
                path: 'planets',
                element: <Planetas />,
                loader: planetsLoader
            }
        ],
    },
]);

root.render(
    <StrictMode>
        <RouterProvider router={router} />
    </StrictMode>
);
