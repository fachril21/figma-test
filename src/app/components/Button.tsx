import PropTypes from "prop-types";
import React from "react";
import "./style.css";

export const Button = ({ type, className }) => {
    return (
        <button className={`button ${type} ${className}`}>
            <div className="text-wrapper">Button</div>
        </button>
    );
};

Button.propTypes = {
    type: PropTypes.oneOf(["solid", "outline"]),
};

