import React from "react";
import { Button } from "../Button/Button";
import { FeedbackAll, FeedbackNot, FeedbackValue } from "./Feedback.styled"

export class Feedback extends React.Component{ 

    state = {
        good: 0,
        neutral: 0,
        bad: 0,
    }

    handleIncreament = (e) => {
        // console.log(e.target.textContent);
        const btnValue = e.target.textContent.toLowerCase();
        this.setState(value => (
            {
                [btnValue]: value[btnValue] + 1
        }       
        ));
        
        // this.countPositiveFeedbackPercentage()
    }

    countTotalFeedback  = () => {
        const arrayTotal = Object.values(this.state);
        return arrayTotal.reduce((value, count) =>  value + count
        )
       
    }

    countPositiveFeedbackPercentage = () =>
     Math.round((this.state.good / this.countTotalFeedback()) * 100)
    

    render() {
        const { good, neutral, bad } = this.state;
        return (
            <div>
                <Button onPlus={this.handleIncreament }/>
                <FeedbackAll>Statistic</FeedbackAll>
                {this.countTotalFeedback()>0 ? <>
                    <FeedbackValue>Good : {good} </FeedbackValue>
                    <FeedbackValue>Neutral : {neutral}</FeedbackValue>
                    <FeedbackValue>Bad : {bad} </FeedbackValue>
                    <FeedbackValue>Total : {this.countTotalFeedback()}</FeedbackValue>
                    <FeedbackValue>Positive : {this.countPositiveFeedbackPercentage()}%</FeedbackValue>
                    </> : <FeedbackNot>Not Feedback given</FeedbackNot> }
        </div>
    )
}


}
