import Styles from "../components/tablestyle.js";
import Table from "../components/evidencetable.js";
import tablecolumns from "../components/tablecolumns.js";
import Dropdown from "../components/dropdown.js";

import axios from 'axios';
import React, { Component } from 'react';


class SEPractice extends Component {
  constructor(props) {
    super(props);
    this.state = {
      practiceSelection: '',
      filteredArticles: [],
      articles: []
    };
  }

  setDropdownState(practice)
  {
    this.state.practiceSelection = {};
    console.log("STATE CHANGED");
  }

  componentDidMount() {
    axios
      .get('http://localhost:8082/api/record')
      .then(res => {
        this.setState({
          articles: res.data
        })
      })
      .catch(err =>{
        console.log('Error from SEPractice');
      })
  };

  render() {
    
    return (
      <div>
        <h2>Select SE Practice to get evidence for the claimed benefits</h2>
          <Dropdown />
          <Styles>
            <Table
            data={this.state.articles}
            columns={tablecolumns}
            />
          </Styles>
      </div>
    );
  }
} 

export default SEPractice; 

function SelectColumnFilter({
  column: { filterValue, setFilter, preFilteredRows, id },
}) {
  // Calculate the options for filtering
  // using the preFilteredRows
  const options = React.useMemo(() => {
    const options = new Set()
    preFilteredRows.forEach(row => {
      options.add(row.values[id])
    })
    return [...options.values()]
  }, [id, preFilteredRows])

  // Render a multi-select box
  return (
    <select
      value={filterValue}
      onChange={e => {
        setFilter(e.target.value || undefined)
      }}
    >
      <option value="">All</option>
      {options.map((option, i) => (
        <option key={i} value={option}>
          {option}
        </option>
      ))}
    </select>
  )
}