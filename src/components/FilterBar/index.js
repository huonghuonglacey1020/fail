import React from 'react';

export default class FilterBar extends React.Component {
    render() {
        var employeeMaleSorted = this.props.employees.filter(employee => employee.gender !== 'female')
        return (
            <div className="row">
                
                <table className="table table-striped">
                    <thead>
                        <tr>
                            
                            <th>Full name</th>
                            <th>Email</th>
                            <th>Country</th>
                            <th>Gender</th>
                            <th>Picture</th>
                        </tr>
                    </thead>

                    <tbody>
                        {employeeMaleSorted.map((result, i) => (
                            <tr key={ i + '-employee'}>
                                <td>{result.name.first} {result.name.last}</td>
                                <td>{result.email}</td>
                                <td>{result.location.country}</td>
                                <td>{result.gender}</td>
                                <td><img alt={result.name} src={result.picture.thumbnail}/></td>
                            </tr>)
                        )}</tbody>
                </table>
            </div>
        );
    }
}