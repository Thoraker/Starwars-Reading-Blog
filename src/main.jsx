import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import ErrorPage from './routes/ErrorPage';
import People from './routes/People';
import App from './routes/App';
import Vehículos from './routes/Vehiculos';
import Planetas from './routes/Planetas';

const domNode = document.getElementById('root');
const root = createRoot(domNode);

const router = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        errorElement: <ErrorPage />,
        children: [
            {
                path: 'people',
                element: <People />,
            },
            {
                path: 'vehicles',
                element: <Vehículos />,
            },
            {
                path: 'Planets',
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
