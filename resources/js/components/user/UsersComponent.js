import React from 'react';
import ReactDOM from 'react-dom';

function Users() {
    return (
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-md-8">
                    <div className="card">
                        <div className="card-header">Users Component</div>

                        <div className="card-body">I'm an users component!</div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Users;

if (document.getElementById('users')) {
    ReactDOM.render(<Users />, document.getElementById('users'));
}
