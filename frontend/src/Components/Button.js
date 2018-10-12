import React from 'react';
import PropTypes from 'prop-types';
import './Button.scss';

const Button = (props) => (
  <a href="/" className="Button" onClick={props.handler}>{props.title}</a>
);

Button.propTypes = {
  title: PropTypes.string,
  handler: PropTypes.func
};

Button.defaultProps = {
  title: 'Example Button',
  handler: (e) => {
    e.preventDefault();
    console.log('Example button has been pressed!');
  }
};

export default Button;