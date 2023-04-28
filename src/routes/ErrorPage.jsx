import { useRouteError } from 'react-router-dom';

const ErrorPage = () => {
    const error = useRouteError();
    console.log(error);

    const cardStyle = {
        width: '37rem'
    }

    return (
            <div className="row p-3">
                <div className="col"></div>
                <div className="card" style={cardStyle}>
                    <div className="card-body text-center">
                        <h3 className="card-title">Tengo un mal presentimiento sobre esto.</h3>
                        <h3 className="card-title">Roooarrgh ur roo.</h3>
                        <br />
                        <h5 className="card-subtitle mb-2 text-body-secondary">Disculpen por las molestias causadas.</h5>
                        <h5 className="card-subtitle mb-2 text-body-secondary">Grrrrraaaarrrrr.</h5>
                        <br />
                        <p>
                            <i>{error.statusText || error.message}</i>
                        </p>
                        <a href="/" className="card-link">Volver</a>
                        </div>
                </div>
                <div className="col"></div>
            </div>
        
    );
};

export default ErrorPage;