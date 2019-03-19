import React from 'react';
import {NavLink} from 'react-router-dom';

const EmployeeList = ({employees}) => {
    return (
        !employees.length ?
            <p>No employees found.</p>
            :
            <div className="employee-list">
                <div className="responsive-table">
                    <table className="table table-bordered">
                        <thead>
                        <tr>
                            <th>Employee ID</th>
                            <th>First Name</th>
                            <th>Last Name</th>
                            <th>Email Address</th>
                            <th>Phone Number</th>
                        </tr>
                        </thead>
                        <tbody>
                        {employees.map(employee =>
                            <tr key={employee.id}>
                                <td>{employee.id}</td>
                                <td>{employee.firstname}</td>
                                <td>{employee.lastname}</td>
                                <td>{employee.email}</td>
                                <td>{employee.phone}</td>
                            </tr>
                        )}
                        </tbody>
                    </table>
                </div>
            </div>
    )
};

export default EmployeeList;