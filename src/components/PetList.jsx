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
    name: 'Pysia',
    type: 'cat',
    breed: 'european shorthair',
    age: 10,
    description: 'Super friendly, likes kids'
  },
  {
    name: 'Ruda',
    type: 'dog',
    breed: 'english cocker spaniel',
    age: 12,
    description: 'Food lover'
  },
  {
    name: 'Migotka',
    type: 'cat',
    breed: 'european shorthair',
    age: 17,
    description: 'Independent old lady'
  },
  {
    name: 'Agrafka',
    type: 'cat',
    breed: 'european shorthair',
    age: 20,
    description: 'Quiet, little shy'
  },
  {
    name: 'Daisy',
    type: 'dog',
    breed: 'yorkshire terrier',
    age: 4,
    description: 'Very active'
  }
];


function PetList(){
  return (
    <div style={{backgroundColor: 'white', padding: '20px'}}>
      <br></br>
      <h2 style={{textAlign: 'center', color: '#008080'}}>Pets Available for adoption</h2>
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
