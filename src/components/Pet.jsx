import React from 'react';
import PropTypes from 'prop-types';
import Toby from '../assets/images/Toby.jpg'


function Pet(props){
  return (
    <div className="col-md-4">
      <div>
        <img style={{width: '350px'}} src={Toby} alt="Toby!"></img>
        <h3 style={{padding: '10px', textAlign: 'center'}}>{props.name}</h3>
      </div>
      <div>
        <ul>
          <li><strong>Type: </strong>{props.type}</li>
          <li><strong>Breed: </strong>{props.breed}</li>
          <li><strong>Age: </strong>{props.age}</li>
          <li><strong>Description: </strong>{props.description}</li>
        </ul>
      </div>
    </div>

  );
}

Pet.propTypes = {
  name: PropTypes.string,
  type: PropTypes.string,
  breed: PropTypes.string,
  age: PropTypes.number,
  description: PropTypes.string
};



export default Pet;
