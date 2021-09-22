import React, { Component } from 'react';
import SEPractices from "../dummydata/SEPractices";

const optionItems = SEPractices.map((SEPractice) =>
              <option key={SEPractice.practice}>{SEPractice.practice}</option>
  );

  /*const Dropdown = () => { // Original
    return (
        <div>
             <select>
                <option value="">Select an SE Practice </option>
                {optionItems}
             </select>
         </div>

    )
  }*/

class Dropdown extends React.Component
{
  constructor(props) {
    super(props);
    this.state = {
      practice: ''
    };
    //this.handleChange = this.handleChange.bind(this);
  };

  handleChange(e)
  {
    this.state.practice = e.value;
  }
  getState()
  {
    return this.state;
  }

  render(){
    return (
      <div>
        <select onChange={this.handleChange}>
          <option value="" >Select an SE Practice </option>
          {optionItems}
        </select>
      </div>
    )
  }
}

/*
class Drop extends Component {
  handleChange(e) {
    console.log("Practice selected!");
  };
render(){
return (
      <div>
        <select value='' onChange={this.handleChange}>
          SEPractices.map((SEPractice) => (
              <option key={SEPractice.id}>{SEPractice.practice}</option>
              <option value={optionItems.id} >{optionItems.practice} </option>
          ))
          {optionItems}
        </select>
      </div>
    )
}
}*/

  



  /*const Dropdown = (props) => {
    
    return (
      <div>
        <select onChange={props.setDropdownState(this.option.value)}>
          <option value="" >Select an SE Practice </option>
          {optionItems}
        </select>
      </div>
    )
  }*/

export default Dropdown;
