/**
 * General Animal class that is possible to extend or use directly.
 */
export default class Animal {
  name = null
  sound = null

  /**
   * Constructor
   * @param {object} config
   */
  constructor(config) {
    Object.keys({ ...config }).forEach((key) => {
      this[key] = config[key]
    })
  }

  /**
   * Returns message enhanced with the animal sound
   * @param {String} message
   */
  speak(message) {
    if (!this.sound) throw TypeError('Missing sound property')
    if (!message) throw TypeError('Missing message parameter')
    return message
      .trim()
      .split(' ')
      .reduce((prev, curr) => `${prev} ${curr} ${this.sound}`, '')
  }
}
