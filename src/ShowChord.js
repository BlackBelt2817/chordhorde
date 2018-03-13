import React, { Component } from 'react';

export default class ShowChord extends Component {
	render() {
		return (
			<ins className="scales_chords_api" chord={this.props.chord}></ins>
		);
	}
}