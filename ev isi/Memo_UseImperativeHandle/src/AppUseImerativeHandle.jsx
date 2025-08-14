import React, { forwardRef, useImperativeHandle, useRef } from 'react';

const MyInput = forwardRef((props, ref) => {
    
    
    useImperativeHandle(ref, () => ({
        myFunc: sayHi
    }))

    const sayHi = () => {
        alert("Hello World")
    }
    
    return (
        <input type="text" />
    )
})

const AppUseImerativeHandle = () => {
    const inputRef = useRef()

    const handleclick = () => {
        inputRef.current.myFunc()
    }

    return (
        <div>
            <MyInput ref={inputRef} type="text" />
            <button onClick={handleclick}>add</button>
        </div>
    )
}

export default AppUseImerativeHandle