import Styles from "../components/tablestyle.js";
import Table from "../components/evidencetable.js";
import tablecolumns from "../components/tablecolumns.js";

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
      selectedPractice: '',
      filteredArticles: [],
      articles: []
    };

    this.handleChange = this.handleChange.bind(this);
  }

  componentDidMount() {
    axios
      //.get('https://mfk-cise-seper.herokuapp.com/api/record')
      .get('http://localhost:8082/api/record')
      .then(res => {
        this.setState({
          practice: 'All Practices',
          filteredArticles: res.data,
          articles: res.data
        })
      })
      .catch(err =>{
        console.log('Error from SEPractice');
      })
  };

  handleChange(practiceSelection) {
    this.state.selectedPractice = practiceSelection.target.value;
    this.state.filteredArticles = [];
    this.state.articles.forEach((article) => 
    {
      if(article.Practice === this.state.selectedPractice)
      {
        this.state.filteredArticles.push(article);
      }
      else if(this.state.selectedPractice == "All Practices")
      {
        this.state.filteredArticles = this.state.articles;
      }
    })
    this.forceUpdate();
  }

  render() {
    
    return (
      <div>
        <h2>Select SE Practice to get evidence for the claimed benefits</h2>
          <div>
            <select onChange={this.handleChange}>
              {optionItems}
            </select>
          </div>
          <Styles>
            <Table
            data={this.state.filteredArticles}
            columns={tablecolumns}
            />
          </Styles>
      </div>
    );
  }
}

export default SEPractice; 