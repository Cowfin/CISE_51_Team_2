import Styles from "../components/tablestyle.js";
import Table from "../components/evidencetable.js";
import tablecolumns from "../components/tablecolumns.js";

//import Dropdown from "../components/dropdown.js";

import axios from 'axios';
import React, { Component } from 'react';
import SEPractices from "../dummydata/SEPractices";

const optionItems = SEPractices.map((SEPractice) =>
              <option key={SEPractice.practice}>{SEPractice.practice}</option>
  );

class SEPractice extends Component {
  constructor(props) {
    super(props);
    this.state = {
      practice: '',
      filteredarticles: [],
      articles: []
    };

    this.handleChange = this.handleChange.bind(this);
  }


  componentDidMount() {
    axios
      .get('http://localhost:8082/api/record')
      .then(res => {
        this.setState({
          practice: 'All Practices',
          filteredarticles: res.data,
          articles: res.data
        })
      })
      .catch(err =>{
        console.log('Error from SEPractice');
      })
  };

/*  filterArticles(article)
  {
    if(article.practice === this.practice)
    {
      this.filteredarticles.push(article.practice);
      console.log("Filtered: " + article.practice);
    }
  }*/

  handleChange(e) {
    console.log("Practice Selected!! " + e.target.value);
    this.state.practice = e.target.value;
    //this.setState({ practice: e.target.value });
    this.state.filteredarticles = [];
    this.state.articles.forEach((article) => 
    {
      if(article.Practice === this.state.practice)
      {
        this.state.filteredarticles.push(article);
      }
      else if(this.state.practice == "All Practices")
      {
        this.state.filteredarticles = this.state.articles;
      }
    })
    console.log(this.state.filteredarticles);
    this.forceUpdate();
  }

  render() {
    
    return (
      <div>
        <h2>Select SE Practice to get evidence for the claimed benefits</h2>
          <div>
            <select onChange={this.handleChange}>
              <option value="">Select an SE Practice </option>
              {optionItems}
            </select>
          </div>
          <Styles>
            <Table
            data={this.state.filteredarticles}
            columns={tablecolumns}
            />
          </Styles>
      </div>
    );
  }
}

export default SEPractice; 