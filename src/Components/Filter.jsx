import React from 'react';

const names = ['James', 'John', 'Paul', 'Peter', 'George','Jancy','Jamie','Joanna'];

const people = [
  {
    name: 'James',
    age: 31,
  },
  {
    name: 'John',
    age: 45,
  },
  {
    name: 'Paul',
    age: 65,
  },
  {
    name: 'Peter',
    age: 69,
  },
  {
    name: 'George',
    age: 64,
  }
];

function Filter() {
  return (
    <div style={{ color: 'blue', marginTop: 100, padding: 2 }}>
      {people.filter(person => person.age < 60).map(filteredPerson => (
        <li>
          {filteredPerson.name} <br></br>
          {filteredPerson.age}
        </li>
      ))}
      <hr></hr>
      <Filter1/>
    </div>
  );
}

function Filter1() {
    return (
      <div>
        {names.filter(name => name.includes('J')).map(filteredName => (
          <li>
            {filteredName}
          </li>
        ))}
      </div>
    );
  }

export default Filter;