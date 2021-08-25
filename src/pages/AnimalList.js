import { useState } from "react";

function AnimalList() {
  const [animals, setAnimal] = useState([
    {species: 'Lion', name: 'Alex', yearOfBirth: ''},
    {species: 'Zebra', name: 'Marty', yearOfBirth: new Date('02-07-2014')},
    {species: 'Giraffe', name: 'Melman', yearOfBirth: ''},
    {species: 'Hippopotamus', name: 'Gloria', yearOfBirth: new Date('07-13-2013')},
    {species: 'Lemur', name: 'Julian', yearOfBirth: new Date('09-23-2015')},
  ])

  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>Species</th>
            <th>Name</th>
            <th>Date of birth</th>
          </tr>
        </thead>
        <tbody>
          {animals.map((animal, index) => (
            <tr>
              <td key={index}>{animal.species}</td>
              <td key={index}>{animal.name}</td>
              <td key={index}>{animal.yearOfBirth ? animal.yearOfBirth.toLocaleDateString() : 'Unknown'}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default AnimalList;