import React, {useState} from 'react'

function CustomArrayHooks(initialState) {
    const [value, setValue] = useState(initialState)
    function onChange(e){
        setValue(e.target.value)
    }
    function clearValue(){
        setValue('')
    }
    function greetUser(){
        alert('Hello ' + value)
    }

    return [value, setValue, greetUser, clearValue, onChange]
}

export default CustomArrayHooks