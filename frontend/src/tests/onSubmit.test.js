const isTextValid = (title, authors, source) => {
    let texts = [title, authors, source];
    for(let i = 0; i < 3; i++){
        if(texts[i] == ""){
            return false;
        }
    }
    return true;
}

/*test('Test strings in submission form are populated', () => {
    expect(isTextValid("ABC", "DEF", "GHI")).toBe(true)
})*/

/*************************************************************************/

const isYearValid = (year) => {
    if (Number.isInteger(year)){
        return true;
    }
}

/*it('Test year in submission form is populated', () => {
    expect(isYearValid(2021)).toBe(true)
})*/

exports.modules = {isTextValid, isYearValid};
/*************************************************************************/


/*
const updateDomWithSelection = () =>{
    import SEPractices from "../dummydata/SEPractices";
    const practiceSelection = document.querySelector('.select').value;
    return practiceSelection;
}

test("Test the dropdown selection functions as intended", () => {
    
    document.body.innerHTML = `
    const optionItems = SEPractices.map((SEPractice) =>
    <option key={SEPractice.practice}>{SEPractice.practice}</option>
    );
    
        <select onChange={this.practiceSelect} value={optionItems[1]}>
           {optionItems}
        </select>
    `
    expect(updateDomWithSelection().toBe(optionItems[1]))
})



practiceSelect = e =>
    {
      this.state.Practice = String(e.target.value);
      console.log(this.state.Practice);
    }

<select onChange={this.practiceSelect}>
{optionItems}
</select>*/