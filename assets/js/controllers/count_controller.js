import { Controller } from "@hotwired/stimulus";

export default class extends Controller {
  static targets = ["result"];

  static values = {
    canBeNegative: Boolean,
    count: Number,
    maximumCountNumber: Number,
  };

  connect() {
    console.log("count#connect");

    this.resultTarget.textContent = this.countValue;
  }

  countValueChanged() {
    console.log("count#countValueChanged");

    this.resultTarget.textContent = this.countValue;
  }

  decrement() {
    console.log("count#decrement");

    if (this.canBeNegativeValue === false && this.countValue === 0) {
      return;
    }

    this.countValue = this.countValue - 1;
  }

  increment() {
    console.log("count#increment");

    const maximumCountNumber = this.maximumCountNumberValue || 10;

    if (this.countValue === maximumCountNumber) {
      return;
    }

    this.countValue = this.countValue + 1;
  }
}
