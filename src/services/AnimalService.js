class AnimalService {
  constructor() {
    this.animals = [
      {species: 'Lion', name: 'Alex', yearOfBirth: ''},
      {species: 'Zebra', name: 'Marty', yearOfBirth: new Date('02-07-2014')},
      {species: 'Giraffe', name: 'Melman', yearOfBirth: ''},
      {species: 'Hippopotamus', name: 'Gloria', yearOfBirth: new Date('07-13-2013')},
      {species: 'Lemur', name: 'Julian', yearOfBirth: new Date('09-23-2015')},
    ]
  }

  getAll() {
    return [...this.animals];
  }

  remove(animalIndex) {
    this.animals.slice(animalIndex, 1);

    return true
  }

  add(newAnimal) {
    this.animals.push({...newAnimal})

    return this.animals[this.animals.length - 1]
  }
}

export default new AnimalService();