import React from 'react';
import ReactDOM from 'react-dom';

let apiUrl = 'https://jsonplaceholder.typicode.com/photos';

class App extends React.Component {
    state = {
        pictures: [],
        errors: null
    };

  componentDidMount() {
    fetch(apiUrl)
      .then(response => response.json())
      .then(photos => {
        let first50 = photos.filter((i, index) => index < 50);
        console.log(first50);
        this.setState({pictures: first50})
      })
      .catch(err => this.setState({ error: err }));
  }
    

    render() {
        return (
            <div>
                {this.state.pictures.map(pic => (<img key={pic.id} src={pic.thumbnailUrl} alt={pic.title} />))}
            </div>
        );
    }
}

ReactDOM.render(<App />, document.getElementById("root"));