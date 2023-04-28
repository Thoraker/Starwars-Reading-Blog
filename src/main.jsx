import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Home from './routes/Home.jsx';
import ErrorPage from './routes/ErrorPage';
import People from './routes/People';

const domNode = document.getElementById('root');
const root = createRoot(domNode);

const router = createBrowserRouter([
	{
		path: '/',
		element: <Home />,
		errorElement: <ErrorPage />,
	},
    {
        path: 'people',
        element: <People />,
    }
]);

root.render(
	<StrictMode>
		<RouterProvider router={router} />
	</StrictMode>
);
