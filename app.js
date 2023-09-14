// in nodeList the is a method forEach,
// so we don't have to convert it to array
const inputs = document.querySelectorAll('.controls input');

function handleUpdate() {

    // console.log(this.dataset);
    // it prints out the name of the data attribute

    const suffix = this.dataset.sizing || '';
    // console.log(suffix);
    // console.log(this.name);

    // setProperty(propertyName, value, priority)
    // The CSSStyleDeclaration.setProperty() method interface 
    // sets a new value for a property on a CSS style declaration object.
    document.documentElement.style.setProperty(`--${this.name}`, this.value + suffix);
}

inputs.forEach(input => input.addEventListener('change', handleUpdate));
inputs.forEach(input => input.addEventListener('mousemove', handleUpdate));