import React from 'react';
//import PropTypes from 'prop-types';
import './PizzaComponent.css';

const PizzaComponent = ({name, price}) => {

  return (
  <div className="PizzaComponent">
    name: {name}
    price: {price}
  </div>
)};

PizzaComponent.propTypes = {};

PizzaComponent.defaultProps = {};

export default PizzaComponent;
