const controles = document.querySelector("#controls");
const cssText = document.querySelector('.css');
const btn = document.querySelector('.btn');
controles.addEventListener('change', handleChange);

const  handleStyle = {
  element: btn,
  texto(value) {
    this.element.innerText = value;
  },
  color(value) {
    this.element.style.color = value;
  },
  backgroundColor(value) {
    this.element.style.backgroundColor = value;
  },
  height(value) {
    this.element.style.height = value + 'px';
  },
  width(value) {
    this.element.style.width = value + 'px';
  },
  border(value) {
    this.element.style.border = value;
  },
  borderRadius(value) {
    this.element.style.borderRadius = value + 'px';
  },
  fontFamily(value) {
    this.element.style.fontFamily = value;
  },
  fontSize(value) {
    this.element.style.fontSize = value + "px";
  },
}

function handleChange (event) {
  const name = event.target.name;
  const value = event.target.value;
  handleStyle[name](value);
  showCSS();
  saveValues(name, value);
}

function saveValues(name, value) {
  localStorage[name] = value;
}

function loadValues () {
  const properties = Object.keys(localStorage);
  properties.forEach(property => {
    handleStyle[property](localStorage[property]);
    controles.elements[property].value = localStorage[property];
  });
  showCSS();
}

loadValues();

function showCSS () {
  cssText.innerHTML = '<span>' + btn.style.cssText.split('; ').join(';</span><span>');
}