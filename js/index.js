document.addEventListener('alpine:init', () => {
  Alpine.store('app', {
    animals: [
      { name: 'Cat', sound: 'miaow' },
      { name: 'Chicken', sound: 'cluck' },
      { name: 'Cow', sound: 'moo' },
      { name: 'Dog', sound: 'woof' },
      { name: 'Duck', sound: 'cuack' },
      { name: 'Lion', sound: 'roar' },
    ],
    message: '',
    selectedAnimal: null,

    // Returns message enhanced with animal sound
    getMessage() {
      if (!this.selectedAnimal || !this.message) return
      return this.message
        .trim()
        .split(' ')
        .reduce((prev, curr) => `${prev} ${curr} ${this.selectedAnimal.sound}`, '')
    },

    // Helper to set selectedAnimal
    setSelectedAnimal(animal) {
      this.selectedAnimal = animal
    }
  })
})
