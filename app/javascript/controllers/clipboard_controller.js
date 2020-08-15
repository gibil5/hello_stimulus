import { Controller } from "stimulus"
export default class extends Controller {

  static targets = ['source']

  connect() {
    console.log("connect")
    if (document.queryCommandSupported("copy")) {
      this.element.classList.add("clipboard--supported")
    }
  }

  copy() {
    console.log("copy")
    event.preventDefault()

    this.sourceTarget.select()
    document.execCommand("copy")
  }
}
