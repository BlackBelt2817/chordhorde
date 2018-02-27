import React, { Component } from 'react';

export default class HearChord extends Component {
	constructor(props) {
		super(props);
	}
	render() {
		return (
			<ins className="scales_chords_api" chord={this.props.chord} instrument="guitar" output="sound"></ins>
		);
	}
}
