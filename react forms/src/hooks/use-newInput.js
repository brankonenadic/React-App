import { useState } from "react";

const useNewInput = () => {

const [inputValue, setInputValue] = useState('');
const [inputThached, setInputThached] = useState(false);

const inputHandler = (e) => {
    setInputValue(e.target.value);
    
}
const inputBlur = () => {
    setInputThached(true);
    console.log(inputValue);
}


    return {
        value: inputValue,
        inputHandler,
        inputBlur
    };
}

export default useNewInput
