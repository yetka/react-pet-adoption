import React from 'react';
import Pet from './Pet';

var masterPetList= [
  {
    name: 'Toby',
    type: 'dog',
    breed: 'golden retriever',
    age: 8,
    description: 'Good boy!'
  },
  {
    name: 'Toby',
    type: 'dog',
    breed: 'golden retriever',
    age: 8,
    description: 'Good boy!'
  },
  {
    name: 'Toby',
    type: 'dog',
    breed: 'golden retriever',
    age: 8,
    description: 'Good boy!'
  },
  {
    name: 'Toby',
    type: 'dog',
    breed: 'golden retriever',
    age: 8,
    description: 'Good boy!'
  },
  {
    name: 'Toby',
    type: 'dog',
    breed: 'golden retriever',
    age: 8,
    description: 'Good boy!'
  },
  {
    name: 'Toby',
    type: 'dog',
    breed: 'golden retriever',
    age: 8,
    description: 'Good boy!'
  }
];


function PetList(){
  return (
    <div>
      <h2 style={{textAlign: 'center'}}>Pets Available for adoption</h2>
      <br></br>
      <br></br>
      <br></br>
      <div className="row">
      {masterPetList.map((pet, i) =>
          <Pet
            name={pet.name}
            type={pet.type}
            breed={pet.breed}
            age={pet.age}
            description={pet.description}
            key={i}/>
      )}
      </div>
    </div>
  );
}

export default PetList;
