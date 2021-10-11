import { useState } from "react";

const useNewInput = (validateValue) => {

    const [inputValue, setInputValue] = useState('');
    const [inputThached, setInputThached] = useState(false);

    const valueIsValid = validateValue(inputValue);
    const inputHasEror = !valueIsValid && inputThached;

    const inputHandler = (e) => {
        setInputValue(e.target.value);

    }
    const inputBlur = () => {

        setInputThached(true);

    }
    const ressetInput = () => {
        setInputValue('');
        setInputThached(false);
    }

    return {
        value: inputValue,
        inputHasEror,
        isValid: valueIsValid,
        inputHandler,
        inputBlur,
        ressetInput
    };
}

export default useNewInput
