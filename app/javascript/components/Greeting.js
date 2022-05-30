import React from "react"
import PropTypes from "prop-types";

const Greeting = () => {
  return (
    <p>Greeting: </p>
    );
  };

  Greeting.propTypes = {
    greeting: PropTypes.string
  };
  export default Greeting;
