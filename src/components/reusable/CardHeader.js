import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// nodejs library to set properties for components
import PropTypes from "prop-types";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
// @material-ui/icons

// core components
import {
    warningCardHeader,
    successCardHeader,
    dangerCardHeader,
    infoCardHeader,
    primaryCardHeader
  } from "../../assets/material-kit-react";
  const cardHeaderStyle = {
    cardHeader: {
      borderRadius: "3px",
      padding: "1rem 15px",
      marginLeft: "15px",
      marginRight: "15px",
      marginTop: "-30px",
      border: "0",
      marginBottom: "0"
    },
    cardHeaderPlain: {
      marginLeft: "0px",
      marginRight: "0px"
    },
    warningCardHeader,
    successCardHeader,
    dangerCardHeader,
    infoCardHeader,
    primaryCardHeader
  };

function CardHeader({ ...props }) {
  const { classes, className, children, color, plain, ...rest } = props;
  const cardHeaderClasses = classNames({
    [classes.cardHeader]: true,
    [classes[color + "CardHeader"]]: color,
    [classes.cardHeaderPlain]: plain,
    [className]: className !== undefined
  });
  return (
    <div className={cardHeaderClasses} {...rest}>
      {children}
    </div>
  );
}

CardHeader.propTypes = {
  classes: PropTypes.object.isRequired,
  className: PropTypes.string,
  color: PropTypes.oneOf(["warning", "success", "danger", "info", "primary"]),
  plain: PropTypes.bool
};

export default withStyles(cardHeaderStyle)(CardHeader);
