import { h, Component } from 'preact';
import { Router } from 'preact-router';

import Header from './header';
import Home from '../routes/home';
import Profile from '../routes/profile';
// import Home from 'async!../routes/home';
// import Profile from 'async!../routes/profile';

import 'react-dates/initialize';
import 'react-dates/lib/css/_datepicker.css';

import { DateRangePicker } from 'react-dates';

const defaultProps = {
	isOutsideRange : () => {
		return false
	},
	renderCalendarInfo : () => {
		// I can also use this to render a react component
		return 'Cancel ~~~~~~~~~~~~~ Apply'
	}
}

export default class App extends Component {
	/** Gets fired when the route changes.
	 *	@param {Object} event		"change" event from [preact-router](http://git.io/preact-router)
	 *	@param {string} event.url	The newly routed URL
	 */

	 constructor(props) {
    super(props);

    this.state = {
      startDateId: 'hello',
      endDateId: 'world',
      startDate: null,
      endDate: null,
      focusedInput: null,
    };
  }

	handleRoute = e => {
		this.currentUrl = e.url;
	};

	render() {
		return (
			<div id="app">
				<Header />
				<div style="height: 200px"></div>
				<DateRangePicker
          showDefaultInputIcon
          keepOpenOnDateSelect
          hideKeyboardShortcutsPanel
          noBorder
          enableOutsideDays
          transitionDuration={0}
          renderCalendarInfo={defaultProps.renderCalendarInfo}
          isOutsideRange={defaultProps.isOutsideRange}
          startDateId={this.state.startDateId}
          endDateId={this.state.endDateId}
          startDate={this.state.startDate}
          endDate={this.state.endDate}
          onDatesChange={({ startDate, endDate }) => { this.setState({ startDate, endDate })}}
          focusedInput={this.state.focusedInput}
          onFocusChange={(focusedInput) => { this.setState({ focusedInput })}}
        />
			</div>
		);
	}
}
