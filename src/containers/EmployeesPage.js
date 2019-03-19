import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as employeeActions from '../actions/employeeActions';
import EmployeeList from '../components/EmployeeList';

class EmployeesPage extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div className="employees">
                {
                    this.props.ajaxLoading ?
                        <p>Loading employees...</p>
                        :
                        <EmployeeList employees={this.props.employees} />
                }
            </div>
        )
    }
}

function mapStateToProps(state, ownProps) {
    let employees = state.employees;
    return {
        employees: employees,
        ajaxLoading: state.ajaxLoading
    };
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(employeeActions, dispatch)
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(EmployeesPage);