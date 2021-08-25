import { useState } from "react";
import AnimalService from "../services/AnimalService";

function AnimalList() {
  const [animals, setAnimal] = useState(AnimalService.getAll());

  const remove = (animalIndex) => {
    const isDeleted = AnimalService.remove(animalIndex)

    if (isDeleted) {
      setAnimal(animals.filter((animals, index) => index !== animalIndex));
    }
  }

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
              <button onClick={() => remove(index)}>Remove</button>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default AnimalList;