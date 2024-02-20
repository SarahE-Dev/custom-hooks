import React, {useState} from 'react'

function CustomObjectHooks(initialState) {
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
    return {value, setValue, onChange, clearValue, greetUser}
}

export default CustomObjectHooks