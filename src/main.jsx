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
import Home from './routes/Home';

const domNode = document.getElementById('root');
const root = createRoot(domNode);

const allPeopleUrl = 'https://www.swapi.tech/api/people?page=1&limit=100'
const allVehiclesUrl = 'https://www.swapi.tech/api/vehicles?page=1&limit=100'
const allPlanetsUrl = 'https://www.swapi.tech/api/planets?page=1&limit=100'

const sections = [
    { name: 'Personajes', url: 'https://www.swapi.tech/api/people?page=1&limit=10' },
    { name: 'Vehículos', url: 'https://www.swapi.tech/api/vehicles?page=1&limit=10' },
    { name: 'Planetas', url: 'https://www.swapi.tech/api/planets?page=1&limit=10' },
]

const router = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        errorElement: <ErrorPage />,
        children: [
            {
                path: '/',
                element: <Home props={sections} />,
            },
            {
                path: 'people',
                element: <People props={allPeopleUrl} />,
            },
            {
                path: 'vehicles',
                element: <Vehículos props={allVehiclesUrl} />,
            },
            {
                path: 'Planets',
                element: <Planetas props={allPlanetsUrl} />,
            }
        ],
    },
]);

root.render(
    <StrictMode>
        <RouterProvider router={router} />
    </StrictMode>
);
