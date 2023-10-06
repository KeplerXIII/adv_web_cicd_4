import visa from '../../imgs/visa.png'
import mastercard from '../../imgs/mastercard.png'
import mir from '../../imgs/mir.png'

export class RenderValidator {
  constructor () {
    this.html = `
        <div class="card-input-container">
          <img src=${mir} alt="Visa" class="card-icon" id="mir">
          <img src=${visa} alt="Visa" class="card-icon" id="visa">
          <img src=${mastercard} alt="Mastercard" class="card-icon" id="mastercard">
          <div class="card-input">
            <input type="text" class="input-field "id="card-number" name="card-number" placeholder="Введите номер карты" maxlength="16">
          </div>
            <button id="check-button">Проверить</button>
        </div>
        `
  }

  renderValidator (parentElem) {
    if (typeof parentElem === 'string') {
      parentElem = document.querySelector(parentElem)
    }
    if (parentElem) {
      parentElem.insertAdjacentHTML('afterbegin', this.html)
    } else {
      document.body.innerHTML = this.html
    }
  }

  getElement () {
    return document.querySelector('.card-input-container')
  }
}
