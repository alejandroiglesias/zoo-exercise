import { Animal, Cat, Chicken, Cow, Dog, Duck } from './modules/animals/index.js'

import Alpine from 'https://cdn.jsdelivr.net/npm/alpinejs@3.9.1/dist/module.esm.js'

document.addEventListener('alpine:init', () => {
  Alpine.store('app', {
    animals: [
      new Cat(),
      new Chicken(),
      new Cow(),
      new Dog(),
      new Duck(),
      new Animal({ name: 'Lion', sound: 'roar' }) // Custom animal
    ],
    message: '',
    selectedAnimal: null,

    getMessage() {
      if (!this.selectedAnimal || !this.message) return
      return this.selectedAnimal.speak(this.message)
    },

    setSelectedAnimal(animal) {
      this.selectedAnimal = animal
    }
  })
})

Alpine.start()
