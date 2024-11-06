import './style.css'

const stringsToSeparateInput = document.querySelector('#stringsToSeparate') as HTMLInputElement;
const separatingCharStringInput = document.querySelector('#separatingCharString') as HTMLInputElement;
const beforeRadioInput = document.querySelector('#before') as HTMLInputElement;
const afterRadioInput = document.querySelector('#after') as HTMLInputElement;
const button = document.querySelector('button') as HTMLButtonElement;
const firstPart = document.querySelector('#firstPart') as HTMLParagraphElement;
const secondPart = document.querySelector('#secondPart') as HTMLParagraphElement;

const stringSeparator = (): void => {
    const stringToSeparate = stringsToSeparateInput.value.trim();
    const separatingCharString = separatingCharStringInput.value.trim();
    const separatingCharIndex = stringToSeparate.indexOf(separatingCharString)
    let stringFirstPart: string;
    let stringSecondPart: string;

    if(separatingCharStringInput.value.length > 1) {
        alert('Bitte nur ein Zeichen eingeben');
    } else {
        switch(true) {
            case (beforeRadioInput.checked):
                stringFirstPart = stringToSeparate.substring(0, separatingCharIndex);
                stringSecondPart = stringToSeparate.substring(separatingCharIndex);
                firstPart.innerText = stringFirstPart;
                secondPart.innerText = stringSecondPart;
                break;
            case (afterRadioInput.checked):
                stringFirstPart = stringToSeparate.substring(0, separatingCharIndex + 1);
                stringSecondPart = stringToSeparate.substring(separatingCharIndex + 1);
                firstPart.innerText = stringFirstPart;
                secondPart.innerText = stringSecondPart;
                break;
        }
    }
}

button.addEventListener('click', stringSeparator);