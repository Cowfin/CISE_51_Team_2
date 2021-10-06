/*import React, { useState } from 'react';
import { useForm } from "react-hook-form";

import SEPractices from "../dummydata/SEPractices";
import { makeRenderer } from "react-table";

import axios from 'axios'; 

const optionItems = SEPractices.map((SEPractice) =>
  <option key={SEPractice.practice}>{SEPractice.practice}</option>);

function createSubmission(data) {
    axios
      .post('https://mfk-cise-seper.herokuapp.com/api/record', subm)
      .then(res => {
        
        })
      .catch(err =>{
          console.log('Error posting article from Submit-Article: ' + err);
      })
}

const SubmissionForm = (props) => {
  const { register, handleSubmit } = useForm();
  const [result, setResult] = useState("");
  const onSubmit = (data) => {
    createSubmission(data);

    setResult(JSON.stringify(data));
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>

      <input {...register("title")} placeholder="Title" />
      <p><input {...register("authors")} placeholder="Authors" /></p>
      <p><input {...register("source")} placeholder="Source" /></p> 
      <p><input {...register("pubyear")} placeholder="Publication Year" /></p>
      <p><input {...register("doi")} placeholder="DOI" /></p>
    
      <select {...register("sepractice")}>
        {optionItems}
      </select>

      <p>{result}</p>
      <input type="submit" />
    </form>
  );
}
export default SubmissionForm;*/
