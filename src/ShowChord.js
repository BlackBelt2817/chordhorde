import React, { Component } from 'react';

export default class ShowChord extends Component {
	render() {
		console.log("RENDER FUNC CALLED", this.props.chord);
		return (
			<ins className="scales_chords_api" chord={this.props.chord}></ins>
		);
	}
}