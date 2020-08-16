import { Controller } from "stimulus"

export default class extends Controller {
  static targets = [ "slide" ]

  initialize() {
    console.log("initialize")
    //const index = parseInt(this.element.getAttribute("data-slideshow-index"))
    //const index = parseInt(this.data.get("index"))
    //this.showSlide(index)
    this.showCurrentSlide()
  }

  connect() {
    console.log("connect")
  }

  next() {
    console.log("next")
    this.index++
  }

  previous() {
    console.log("previous")
    this.index--
  }

  showCurrentSlide() {
    console.log("showSlide")
    this.slideTargets.forEach((el, i) => {
      el.classList.toggle("slide--current", this.index == i)
    })
  }

  get index() {
    return parseInt(this.data.get("index"))
  }

  set index(value) {
    this.data.set("index", value)
    this.showCurrentSlide()
  }
}
