import React, { Component } from 'react';
import './App.css';
import styleNumberImage from './styleNumber.png';

const Results = props => {
  return <img src={`https://www.rug-images.com/products/s/${props.pid}.jpg`} alt="rug" />;
};

const ResultsPlaceholder = props => {
  return <div className="results-placeholder">Rug image will show up here</div>;
};

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pid: '',
      status: 'initial',
    };

    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(event) {
    this.setState({ pid: event.target.value, status: 'loading' });
    setTimeout(
      function() {
        this.setState({ status: 'ready' });
      }.bind(this),
      500,
    );
  }
  render() {
    return (
      <div className="App">
        <div className="header">
          <div className="header-text">
            <h1>RugsUSA Image Downloader</h1>
            <p>
              Paste the Style Number from RugsUSA in the input below, once the image loads you can
              right click and click save image.
            </p>
          </div>
          <input
            type="text"
            placeholder="Style Number"
            onChange={this.handleChange}
            className="input"
          />
          <div className="help">
            <h4>
              <div>Style Number location</div>
              <small>Find it on the details tab of any rug</small>
            </h4>
            <img src={styleNumberImage} alt="help" />
          </div>
        </div>
        <div className="image-container">
          {this.state.status === 'ready' ? (
            <Results pid={this.state.pid} />
          ) : (
            <div className="results-placeholder">
              {this.state.status === 'loading' ? 'Loading...' : 'Rug image will show up here'}
            </div>
          )}
        </div>
        <div className="footer">
          Made with{' '}
          <span role="img" aria-label="love">
            💕
          </span>{' '}
          for Nat
        </div>
      </div>
    );
  }
}

export default App;
