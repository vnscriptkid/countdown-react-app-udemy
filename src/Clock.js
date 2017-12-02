import React, { Component } from 'react';

class Clock extends Component {
    constructor(props) {
        super(props);
        this.state = {
            days: 0,
            hours: 0,
            minutes: 0,
            seconds: 0
        }
    }

    leadingZero(num) {
        return num < 10 ? '0' + num : num;
    } 

    untilDeadline(deadline) {
        const deadlineInMs = Date.parse(deadline);
        const nowInMs = Date.parse(new Date());
        const offsetInMs = deadlineInMs - nowInMs;
        const seconds = Math.floor(offsetInMs / (1000)) % 60;
        const minutes = Math.floor(offsetInMs / (60 * 1000)) % 60;
        const hours = Math.floor(offsetInMs / (3600 * 1000)) % 24;
        const days = Math.floor(offsetInMs / (24 * 3600 * 1000));

        this.setState(() => ({
            seconds,
            minutes,
            hours,
            days
        }))
    }

    componentWillMount() {
        this.untilDeadline(this.props.deadline);
    }

    componentWillReceiveProps() {
        console.log('component will receive props');
    }

    componentDidMount() {
        console.log('hello');
        setInterval(() => {
            this.untilDeadline(this.props.deadline);
        }, 1000);
    }

    render() {
        console.log('render clock');
        return (
            <div>
                <div>{this.leadingZero(this.state.days)} Days</div>
                <div>{this.leadingZero(this.state.hours)} Hours</div>
                <div>{this.leadingZero(this.state.minutes)} Minutes</div>
                <div>{this.leadingZero(this.state.seconds)} Seconds</div>
            </div>
        )
    }
}

export default Clock;