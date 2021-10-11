import { useState } from 'react'

const useInput = (validateValue) => {
    const [inputValue, setInputValue] = useState('');
    const [inputThached, setInputThched] = useState(false);

    const inputIsValid = validateValue(inputValue);
    const hasError = !inputIsValid && inputThached;

    const inputHandler = (e) => {
        setInputValue(e.target.value);

    }
    const inputBlurHandler = () => {
        setInputThched(true);
    }
    const reset = () => {
        setInputValue('');
        setInputThched(false);
    }
    return {
        value: inputValue,
        hasError,
        isValid: inputIsValid,
        inputHandler,
        inputBlurHandler,
        reset
    };
}

export default useInput
