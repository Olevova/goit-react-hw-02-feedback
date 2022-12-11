import PropTypes from "prop-types";
import style from "./Title.module.scss";


export const Title = ({title}) => {
    return <h1 className={style.title}>{title}</h1> 
}


Title.propTypes = {
    title: PropTypes.string.isRequired
}