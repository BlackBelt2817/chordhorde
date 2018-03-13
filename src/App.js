import React, { Component } from 'react';
import './App.css';
import { Button } from 'react-bootstrap';
import ShowChord from './ShowChord';
import HearChord from './HearChord';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      chordname: '',
      chord1: 'a',
      chord2: '',
      chord3: 'maj'
    };
    this.handleChordChange = this.handleChordChange.bind(this);
    this.printChord = this.printChord.bind(this);
  }

  handleChordChange() {
    console.log(this.state.chordname);
    this.setState({ chordname: this.state.chord1 + this.state.chord2 + this.state.chord3 });
  }

  printChord() {
    console.log(this.state.chordname);
  }

  componentDidMount() {
    console.log("Woohoo!");
    this.setState({ chordname: this.state.chord1 + this.state.chord2 + this.state.chord3 });
  }

  render() {
    return (
      <div className="App">
        <header className='App-header'>Chord Horde<hr /></header>
        <h3>Pick a chord:</h3>
        <div className='row'>
          <select onChange={e => {
            this.setState({ chord1: e.target.value }, () => {
              this.setState({ chordname: this.state.chord1 + this.state.chord2 + this.state.chord3 }, () => {
                this.printChord();
              })
            })}
        } id='chord1' style={{width: 300}}>
            <option value='a'>A</option>
            <option value='b'>B</option>
            <option value='c'>C</option>
            <option value='d'>D</option>
            <option value='e'>E</option>
            <option value='f'>F</option>
            <option value='g'>G</option>
          </select>
          <select onChange={e => {
            this.setState({ chord2: e.target.value }, () => {
              this.setState({ chordname: this.state.chord1 + this.state.chord2 + this.state.chord3 }, () => {
                this.printChord();
              })
            })}
        } id='chord2'>
            <option value=''>Natural</option>
            <option value='#'>♯</option>
            <option value='b'>♭</option>
          </select>
          <select onChange={e => {
            this.setState({ chord3: e.target.value }, () => {
              this.setState({ chordname: this.state.chord1 + this.state.chord2 + this.state.chord3 }, () => {
                this.printChord();
              })
            })}
        } id='chord3'>
            <option value='maj'>Major</option>
            <option value='min'>Minor</option>
            <option value='aug'>Augmented</option>
            <option value='dim'>Diminished</option>
            <option value='min'>Minor</option>
          </select>
          <Button onClick={this.handleChordChange}>Submit</Button>
        </div>

        <div style={{paddingTop: 50}}>
          <ShowChord chord={this.state.chordname} />
          <br />
          <HearChord chord={this.state.chordname} />
        </div>
      </div>
    );
  }
}

export default App;
