import React from "react";
import SubmissionForm from "../components/SubmissionForm.js"; 

/*import React, { Component } from 'react';

class SubmitArticle extends Component
{
    constructor() {
        super();
        this.state = {
            Title: '',
            Authors:'',
            Source:'',
            Year:'',
            DOI:'',
            Claim:'',
            Evidence_Level:''
        };
    }

    onChange = e => 
    {
        this.setState({ [e.target.name]: e.target.value });
    }

    onSubmit = e => 
    {
        e.preventDefault();

        const data = 
        {
            Title: this.state.Title,
            Authors: this.state.Authors,
            Source: this.state.Source,
            Year: this.state.Year,
            DOI: this.state.DOI,
            Claim: this.state.Claim,
            Evidence_Level: this.state.Evidence_Level
        };

        axios
            .post('http://localhost:8082/api/record', data)
            .then(res => {
                this.setState({
                    Title: '',
                    Authors:'',
                    Source:'',
                    Year:'',
                    DOI:'',
                    Claim:'',
                    Evidence_Level:''
                })
                this.props.history.push('/');
            })
            .catch(err => {
                console.log("Error in Submit Article!");
            })    
    }
}*/

const SubmitArticle = () =>  {
     return (
      <div>
        <h2>Submit Article</h2>
            <p>This will be a form to allow submitters to submit an article for possible inclusion in our SEPER repo.</p>
            <SubmissionForm/>
        </div>
    );
}

export default SubmitArticle;
