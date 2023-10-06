import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import App from './App';
import ErrorPage from './pages/ErrorPage';
import Home from './pages/Home';
import Personajes from './pages/Personajes';
import Vehículos from './pages/Vehiculos';
import Planetas from './pages/Planetas';

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
			},
		],
	},
]);

root.render(
	<StrictMode>
		<RouterProvider router={router} />
	</StrictMode>
);
