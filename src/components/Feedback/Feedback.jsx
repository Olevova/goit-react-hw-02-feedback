import React from "react";
// import PropTypes from "prop-types";
import {Button} from "../Button/Button";

export class Feedback extends React.Component{
    // static PropTypes = {
        
    // }

    state = {
        good: 0,
        neutral: 0,
        bad: 0,
        total: 0,
        positive: 0

    }

    handleIncreament = (e) => {
        // console.log(e.target.textContent);
        const btnValue = e.target.textContent.toLowerCase();
        // console.log(btnValue)
        this.setState(value => (
            {
                [btnValue]: value[btnValue] + 1
        }       
        ));
        this.countTotalFeedback()
        this.countPositiveFeedbackPercentage()
    }

    countTotalFeedback = () => {
        this.setState(value => ({
            total: value.good + value.neutral + value.bad
        }));
    }

    countPositiveFeedbackPercentage = () => {
        this.setState(value => ({
            positive: Math.round(value.good / value.total * 100)
        }))
    }

    render() {
        return (
            <div>

                <Button onPlus={this.handleIncreament }/>
                <h2>Statistic</h2>
                {this.state.total ? <>
                    <p>Good : {this.state.good} </p>
                    <p>Neutral : {this.state.neutral}</p>
                    <p>Bad : {this.state.bad} </p>
                    <p>Total : {this.state.total}</p>
                    <p>Positive : {this.state.positive}%</p>
                    </> : <p>Not Feedback given</p> }
               

        </div>
    )
}


}
