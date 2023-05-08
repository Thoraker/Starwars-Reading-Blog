import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import ErrorPage from './routes/ErrorPage';
import App from './routes/App';
import Personajes from './routes/Personajes';
import Planetas from './routes/Planetas';
import Vehículos from './routes/Vehiculos';
import Home from './routes/Home';

const domNode = document.getElementById('root');
const root = createRoot(domNode);

const router = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        errorElement: <ErrorPage />,
        children: [
            {
                path: '/',
                element: <Home />,
            },
            {
                path: 'people',
                element: <Personajes />,
            },
            {
                path: 'vehicles',
                element: <Vehículos />,
            },
            {
                path: 'planets',
                element: <Planetas />,
            }
        ],
    },
]);

root.render(
    <StrictMode>
        <RouterProvider router={router} />
    </StrictMode>
);
