import React, { useState } from 'react'
import { WrapperInputStyle } from "./style"

const InputForm = (props) => {
    const [valueInput] = useState("")
    const {placeholder = "Nhập text", ...rests} = props
  return (
    <WrapperInputStyle placeholder={placeholder} value={valueInput} {...rests}/>
  )
}

export default InputForm