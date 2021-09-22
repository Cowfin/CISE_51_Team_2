import React from 'react';
import SEPractices from "../dummydata/SEPractices";
//import dropdownOptions from "../dummydata/dropdownOptions";

const optionItems = SEPractices.map((SEPractice) =>
              <option key={SEPractice.practice}>{SEPractice.practice}</option>
  );
            
  const Dropdown = () => {
    return (
        <div>
             <select>
                <option value="">Select an SE Practice </option>
                {optionItems}
             </select>
         </div>

    )
  }
/*const Dropdown = (drop, title) => 
  {
    const optionItems = dropdownOptions.map((option) =>
    <option key={option.test}>{option.test}</option>);
    const stringTitle = String(title);
    return (
      <div>
        <select>
          <option value="' + stringTitle'"></option>
          {optionItems}
        </select> 
      </div>
    )
  }*/

export default Dropdown;
