// import React from 'react';

// export default class RadioButton extends React.Component {

//     render(props) {
//         return (
//             <form>
//       <div className="form-group">
//         <label htmlFor="search">Search:</label>
//         <input
//           onChange={props.handleInputChange}
//           value={props.search}
//           name="search"
//           type="text"
//           className="form-control"
//           placeholder="Search"
//           id="search"
//         />
//         <button onClick={props.handleFormSubmit} className="btn btn-primary mt-3">
//           Search
//         </button>
//       </div>
//     </form>
//         )
//     }
// }
import React from "react";

function SearchForm(props) {
  return (
    <form>
      <div className="form-group">
        <label htmlFor="search">Search:</label>
        <input
          onChange={props.handleInputChange}
          value={props.search}
          name="search"
          type="text"
          className="form-control"
          placeholder="Search"
          id="search"
        />
        <button onClick={props.handleFormSubmit} className="btn btn-primary mt-3">
          Search
        </button>
      </div>
    </form>
  );
}

export default SearchForm;