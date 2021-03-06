import React from 'react';
import PropTypes from 'prop-types';
import Shiluette from '../assets/images/shiluette.png';


function Pet(props){
  return (
    <div className="col-md-4">
      <div>
        <img style={{width: '250px'}} src={Shiluette} alt="shiluette of cat and dog"></img>
        <h3 style={{padding: '10px', textAlign: 'center', color: '#008080'}}>{props.name}</h3>
      </div>
      <div>
        <ul>
          <li><strong>Type: </strong>{props.type}</li>
          <li><strong>Breed: </strong>{props.breed}</li>
          <li><strong>Age: </strong>{props.age}</li>
          <li><strong>Description: </strong>{props.description}</li>
        </ul>
        <br></br>
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
