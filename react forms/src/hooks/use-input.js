import {useState} from 'react'

const useInput = () => {
const [inputValue, setInputValue] = useState();
const [inputThached, setInputThched] = useState(false);

const inputHandler = (e) => {
    setInputValue(e.target.value);
    
}
const inputBlurHandler = () => {
    setInputNameTuched(true);
}

    return (
        <div>
            
        </div>
    )
}

export default useInput
