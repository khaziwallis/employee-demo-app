import React from 'react';
import {BrowserRouter as Router, Route, NavLink} from 'react-router-dom';
// Container components
import EmployeesPage from './containers/EmployeesPage';
import AddEmployeePage from './containers/AddEmployeePage';
// Assets
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/App.css';

const App = () => {
    return (
        <Router>
            <div className="App">
                <div className="App-header">
                    <nav className="main-nav">
                        <ul>
                            <li><NavLink activeClassName="selected" to="/employees">List Employee</NavLink></li>
                            <li><NavLink activeClassName="selected" to="/add">Add Employee</NavLink></li>
                        </ul>
                    </nav>
                </div>

                <div className="container">
                    <Route path="/employees" component={EmployeesPage}/>
                    <Route path="/add" component={AddEmployeePage}/>
                </div>
            </div>
        </Router>
    );
};

export default App;
