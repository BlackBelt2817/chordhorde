import React, { Component } from 'react';
import './App.css';
import { Button } from 'react-bootstrap';
import ShowChord from './ShowChord';
import HearChord from './HearChord';
import axios from 'axios';

class App extends Component {
  constructor(props) {
    super(props);
    console.log('initialized this.state!');
    this.state = {
      chordname: '',
      chord1: 'A',
      chord2: '',
      chord3: 'm'
    };
    this.handleChordChange = this.handleChordChange.bind(this);
  }

  

  handleChordChange(stateVarThatWillChange, newVal) {
    console.log(this.state[stateVarThatWillChange] + ' will now be ' + newVal );
    this.setState({ [stateVarThatWillChange]: newVal }, () => {
      console.log('your old var is now equal to ', this.state[stateVarThatWillChange]);
      this.forceUpdate();
    });
  }

  componentDidMount() {
    let chord1 = document.getElementById('chord1').value;
    let chord2 = document.getElementById('chord2').value;
    let chord3 = document.getElementById('chord3').value;
    let chordname = chord1 + chord2 + chord3;


    this.setState({ chord1, chord2, chord3, chordname }, () => {
      this.forceUpdate();
    });
  }

  render() {
    return (
      <div className="App">
        <header className='App-header'>Chord Horde<hr /></header>
        <h3>Pick a chord:</h3>
        <div className='row'>
          <select onChange={e => this.handleChordChange(e.target.id, e.target.value)}
          id='chord1' style={{width: 300}}>
            <option value='A'>A</option>
            <option value='B'>B</option>
            <option value='C'>C</option>
            <option value='D'>D</option>
            <option value='E'>E</option>
            <option value='F'>F</option>
            <option value='G'>G</option>
          </select>
          <select onChange={e => this.handleChordChange(e.target.id, e.target.value)}
          id='chord2'>
            <option value=''>Natural</option>
            <option value='#'>♯</option>
            <option value='b'>♭</option>
          </select>
          <select onChange={e => this.handleChordChange(e.target.id, e.target.value)}
          id='chord3'>
            <option value='maj'>Major</option>
            <option value='min'>Minor</option>
            <option value='aug'>Augmented</option>
            <option value='dim'>Diminished</option>
            <option value='min'>Minor</option>
          </select>
          <Button onClick={ this.handleChordChange }>Submit</Button>
        </div>

        <div style={{paddingTop: 50}}>
          <ShowChord chord={ this.state.chordname } />
          <br />
          <HearChord chord={ this.state.chordname } />
        </div>
        
      </div>
    );
  }
}

export default App;
