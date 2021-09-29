const isTextValid = (title, authors, source) => {
    texts = [title, authors, source];
    for(let i = 0; i < 3; i++){
        if(texts[i] == ""){
            return false;
        }
    }
    return true;
}

test('Test strings in submission form are populated', () => {
    expect(isTextValid("ABC", "DEF", "GHI")).toBe(true)
})

const isYearValid = (year) => {
    if (Number.isInteger(year)){
        return true;
    }
}

test('Test year in submission form is populated', () => {
    expect(isYearValid(2021)).toBe(true)
})