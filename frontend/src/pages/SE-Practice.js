import React from "react";
import Styles from "../components/tablestyle.js";
import Table from "../components/evidencetable.js";
import tablecolumns from "../components/tablecolumns.js";
import Dropdown from "../components/dropdown.js";

//import articles from "../dummydata/articles.js";
import dropdownOptions from "../dummydata/dropdownOptions";

class SEPractice extends Component {
  constructor(props) {
    super(props);
    this.state = {
      articles: []
    };
  }

  componentDidMount()
  {
    axios
      .get('https://mfk-cise-seper.herokuapp.com/api/articles')
      .then(res => {
        this.setState({
          articles: res.data
        })
      })
      .catch(err => {
        console.log('Error from SE-Practice')
      })
  };

  render()
  {
    const articles = this.state.articles;
    console.log("Print Article: " + articles)
    let articleList;

    if(!articles)
    {
      console.log("There are no articles on record");
    }
    else
    {
      articleList = articles;
    }
    return (
      <div>
        <h2>Select SE Practice to get evidence for the claimed benefits</h2>
              <Dropdown/>
               <Styles>
                 <Table
                  data={articleList}
                  columns={tablecolumns}
                 />
              </Styles>
      </div>
    );
  }
}

export default SEPractice;