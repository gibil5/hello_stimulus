import { Controller } from "stimulus"

export default class extends Controller {
  static targets = ['name']

  connect() {
    console.log("connect")
    console.log("Hello, Stimulus!", this.element)
    //console.log("Hello", this.element)
  }

  greet() {
    console.log("greet")
    //const element = this.nameTarget
    //const name = element.value
    //console.log(`Hello, ${name}!`)
    console.log(`Hello, ${this.name}!`)
  }

  get name() {
    return this.nameTarget.value
  }
}
