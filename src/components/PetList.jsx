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
  );
}

export default PetList;
