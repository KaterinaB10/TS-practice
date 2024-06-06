const inputElement = document.querySelector("input");
// There are 2 ways to publish value:
const inputValue1 = (inputElement as HTMLInputElement).value;
const inputValue2 = (<HTMLInputElement>inputElement).value;
