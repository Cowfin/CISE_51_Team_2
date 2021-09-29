import React from "react";
import SubmissionForm from "../components/SubmissionForm.js"; 

/*import React, { Component } from 'react';

class onSubmit extends Component
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

    }
}*/


function onSubmit(e, props)
{
    props = {
        Title: this.state.Title,
        Authors: this.state.Authors,
        Source: this.state.Source,
        Year: this.state.Year,
        DOI: this.state.DOI,
        Claim: this.state.Claim,
        Evidence_Level: this.state.Evidence_Level
    }
    return props;
}
module.exports = onSubmit;