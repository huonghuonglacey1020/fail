// import React from 'react';
// import PageHeader from './PageHeader';
// import FilterBar from './FilterBar';
// import RadioButton from './RadioButton';
// import TableData from './TableData';
// import API from "../utils/API";
// import 'bootstrap/dist/css/bootstrap.css';

// export default class EmployeeSearch extends React.Component {
//   state ={
//     search: '',
//     results: [],
//     filtered: []
//   };
// // When this component mounts, search the API
//   componentDidMount() {
//     this.searchEmployees('');
//   }

//   searchEmployees = query => {
//     API.search(query)
//       .then(res => this.setState({ results: res.data.results },
//         console.log(res.data.results)))
//       .catch(err => console.log(err));
//   };
//   handleInputChange = event => {
//     const name = event.target.name;
//     const value = event.target.value;
//     this.setState({
//       [name]: value
//     });
//   };

//   // When the form is submitted, search the Giphy API for `this.state.search`
//   handleFormSubmit = event => {
//     event.preventDefault();
//     this.searchEmployees(this.state.search)
//   };

//   render() {
//     return (
//       <div>
//         <PageHeader
//         style ={{textAlign: "center"}}
//         ></PageHeader>
//         <RadioButton
//         search={this.state.search}
//         handleFormSubmit={this.handleFormSubmit}
//         handleInputChange={this.handleInputChange}
//         results={this.state.results}
//         ></RadioButton>
//         <TableData
//           employees={this.state.results}
//         />
//         <FilterBar
//         employees={this.state.results}
//         />
//       </div>
//     )
//   }
// }
import React from 'react';
import PageHeader from './PageHeader';
import FilterBar from './FilterBar';
import RadioButton from './RadioButton';
import TableData from './TableData';
import API from "../utils/API";
import 'bootstrap/dist/css/bootstrap.css';

export default class EmployeeSearch extends React.Component {
  state ={
    search: '',
    results: []
  };
// When this component mounts, search the API
  componentDidMount() {
    this.searchEmployees('');
  }

  searchEmployees = query => {
    API.search(query)
      .then(res => this.setState({ results: res.data.results },
        console.log(res.data.results)))
      .catch(err => console.log(err));
  };
  handleInputChange = event => {
    const name = event.target.name;
    const value = event.target.value;
    this.setState({
      [name]: value
    });
  };

  // When the form is submitted, search the Giphy API for `this.state.search`
  handleFormSubmit = event => {
    event.preventDefault();
    this.searchEmployees(this.state.search)
  };

  render() {
    return (
      <div>
        <PageHeader
        style ={{textAlign: "center"}}
        ></PageHeader>
        <RadioButton
        search={this.state.search}
        handleFormSubmit={this.handleFormSubmit}
        handleInputChange={this.handleInputChange}
        results={this.state.results}
        ></RadioButton>
        <TableData
          employees={this.state.results}
        />
        <FilterBar
        employees={this.state.results}
        />
      </div>
    )
  }
}