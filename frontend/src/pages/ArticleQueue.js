import Styles from "../components/tablestyle.js";
import Table from "../components/evidencetable.js";
import tablecolumns from "../components/queuecolumns.js";

import axios from 'axios';
import React, { Component } from 'react';
import SEPractices from "../dummydata/SEPractices";

const optionItems = SEPractices.map((SEPractice) =>
              <option key={SEPractice.practice}>{SEPractice.practice}</option>
  );

class ArticleQueue extends Component {
  constructor(props) {
    super(props);
    this.state = {
      articles: []
    };
  }

  componentDidMount() {
    axios
      .get('https://mfk-cise-seper.herokuapp.com/api/submissionqueue')
      //.get('http://localhost:8082/api/submissionqueue')
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
        <h2>Submission Queue</h2>
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

export default ArticleQueue; 