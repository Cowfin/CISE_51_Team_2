import React, { Component } from 'react';
import axios from 'axios';
import SEPractices from "../dummydata/SEPractices";

const optionItems = SEPractices.map((SEPractice) =>
              <option key={SEPractice.practice}>{SEPractice.practice}</option>
  );

//Tests
const isYearValid = (year) => {
  if (Number.isInteger(year)){
      return true;
  }
  return false;
}

const isTextValid = (title, authors, source) => {
  let texts = [title, authors, source];
  for(let i = 0; i < 3; i++){
      if(texts[i] == ""){
          return false;
      }
  }
  return true;
}

  
class SubmitArticle extends Component
{
    constructor() {
        super();
        this.state = {
          ID: 0,
          Title: '',
          Authors:'',
          Source:'',
          Year:'',
          DOI:'',
          Claim:'',
          Evidence_Level:'',
          Practice:''
        };
    }
    
    
    onChange = e => 
    {
        this.setState({ [e.target.name]: e.target.value });
    }
    onSubmit = e => 
    {
      if(isTextValid(this.state.Title, this.state.Authors, this.state.Source) && isYearValid(Number(this.state.Year))){
        e.preventDefault();
        const data = 
        {
          ID: 0,
          Title: this.state.Title,
          Authors: this.state.Authors,
          Source: this.state.Source,
          Year: this.state.Year,
          DOI: this.state.DOI,
          Claim: ' ',
          Evidence_Level: ' ',
          Practice: this.state.Practice
        };
        axios
          .post('https://mfk-cise-seper.herokuapp.com/api/record', data)
          //.post('http://localhost:8082/api/record', data)
          .then(res => {
            this.setState({
              ID: 0,
              Title: '',
              Authors: '',
              Source:'',
              Year: 0,
              DOI:'',
              Claim:'',
              Evidence_Level:'',
              Practice:''
            })
            this.props.history.push('/SEPractice');
          })
          .catch(err => {
            console.log("Error in Submit Article! " + err);
          })    
  
      }
    }

    practiceSelect = e =>
    {
      this.state.Practice = String(e.target.value);
    }
    
    render() {
      return (
        <div className="CreateBook">
          <div className="container">
            <div className="row">
              <div className="col-md-8 m-auto">
                <h1 className="display-4 text-center">Submit Article</h1>  
                <form id="submitform" noValidate onSubmit={this.onSubmit}>
                  <div className='form-group'>
                    <input
                      type='text'
                      placeholder='Title of the Article'
                      name='Title'
                      className='form-control'
                      value={this.state.Title}
                      onChange={this.onChange}
                    />
                  </div>
                  <br />
  
                  <div className='form-group'>
                    <input
                      type='text'
                      placeholder='Authors'
                      name='Authors'
                      className='form-control'
                      value={this.state.Authors}
                      onChange={this.onChange}
                    />
                  </div>
                  <br />

                  <div className='form-group'>
                    <input
                      type='text'
                      placeholder='Source'
                      name='Source'
                      className='form-control'
                      value={this.state.Source}
                      onChange={this.onChange}
                    />
                  </div>
                  <br />
                  <div className='form-group'>
                    <input
                      type='number'
                      placeholder='Year'
                      name='Year'
                      className='form-control'
                      value={this.state.Year}
                      onChange={this.onChange}
                    />
                  </div>
                  <br />

                  <div className='form-group'>
                    <input
                      type='text'
                      placeholder='DOI'
                      name='DOI'
                      className='form-control'
                      value={this.state.DOI}
                      onChange={this.onChange}
                    />
                  </div>
                  <br />

                  <div>
                    <select onChange={this.practiceSelect}>
                      {optionItems}
                    </select>
                  </div>
                  <br />

                  <input id="submitbutton"
                      type="submit"
                      className="btn btn-outline-warning btn-block mt-4"
                  />
                </form>
              </div>
            </div>
          </div>
        </div>
      );
    }
}

export default SubmitArticle;