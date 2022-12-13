import React from "react";
import PropTypes from "prop-types";
import style from "./Feedback.module.scss";


export const FeedbackOptions  = ({options,onLeaveFeedback}) => (
    <div className={style.btnContainer}>
        {Object.keys(options).map((key) =>
        <div key = {key}>
        <button className={style.btnStatic}
            type="button" onClick={() => onLeaveFeedback(key)}>
            {key}
                </button>
        </div>
        )}
    </div>
);


FeedbackOptions.propTypes = {
    onLeaveFeedback: PropTypes.func.isRequired
}