import { useState } from "react";
import AnimalService from "../services/AnimalService";

function AnimalList() {
  const [newAnimal, setNewAnimal] = useState([
    {
      species: '',
      name: '',
      yearOfBirth: '',
    }
  ])
  const [animals, setAnimal] = useState(AnimalService.getAll());

  const remove = (animalIndex) => {
    const isDeleted = AnimalService.remove(animalIndex)

    if (isDeleted) {
      setAnimal(animals.filter((animals, index) => index !== animalIndex));
    }
  }

  const moveToTop = (animalIndex) => {
    setAnimal([animals[animalIndex], ...animals.slice(0, animalIndex), ...animals.slice(animalIndex + 1)])
  }

  const handleSpeciesChange = (e) => {
    setNewAnimal({
      ...newAnimal,
      species: e.target.value,
    })
  }

  const handleNameChange = (e) => {
    setNewAnimal({
      ...newAnimal,
      name: e.target.value,
    })
  }

  const handleDateChange = (e) => {
    setNewAnimal({
      ...newAnimal,
      yearOfBirth: new Date(e.target.value),
    })
  }

  const addAnimal = (e) => {
    e.preventDefault();

    setAnimal([...animals, newAnimal])
    setNewAnimal({
      species: '',
      name: '',
      yearOfBirth: '',
    })
  }

  return (
    <div>
      <form onSubmit={addAnimal}>
        <input type="text" placeholder="species" onChange={handleSpeciesChange}/>
        <input type="text" placeholder="name" onChange={handleNameChange}/>
        <input type="date" onChange={handleDateChange}/>
        <button>Add animal</button>
      </form>
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
              <button onClick={() => moveToTop(index)}>Move to the Top</button>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default AnimalList;