import React from "react";
import { Section } from "./Section/Section";
import { Statistic } from "./Statistics/Statistics";
import { FeedbackOptions } from "./Feedback/Feedback";


export class App extends React.Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  }

  handleIncreament = (key) => {
    this.setState(value => (
      {
        [key]: value[key] + 1
      }
    ));

  }

  countTotalFeedback = () => {
    const arrayTotal = Object.values(this.state);
    return arrayTotal.reduce((value, count) => value + count
    )
       
  }

  countPositiveFeedbackPercentage = () =>
    Math.round((this.state.good / this.countTotalFeedback()) * 100)
    
  render() {
    const { good, neutral, bad } = this.state;
    return (
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          color: '#010101'
        }}
      >
        <Section title={"Please Leave Feedback"}>
        <FeedbackOptions
          options={this.state}
          onLeaveFeedback={this.handleIncreament}
        />
        </Section>
        {this.countTotalFeedback() <= 0 ? <p style={{}}>Not Feedback given</p> :
        <>
        <Section title="Statistic">
        <Statistic 
        good={good}
        neutral={neutral}
        bad={bad}
        total={this.countTotalFeedback()}
        positivePercentage = {this.countPositiveFeedbackPercentage()}
        />
        </Section>
        </>
        }
      </div>
      )};
      
}
