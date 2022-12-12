import React from "react";
import PropTypes from "prop-types";
import style from "./Button.module.scss";



export const Button = ({onPlus}) => (
     <div className={style.btnContainer}>
        <button className={style.btnStatic}
            type="button" onClick={onPlus}>
            Good
        </button>
        <button className={style.btnStatic}
            type="button"  onClick={onPlus}>
            Neutral
        </button>
        <button className={style.btnStatic}
            type="button"  onClick={onPlus}>
            Bad
        </button>
    </div>
);


Button.propTypes = {
    onPlus: PropTypes.func.isRequired
}