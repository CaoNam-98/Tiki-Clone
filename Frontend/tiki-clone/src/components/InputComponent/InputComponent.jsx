import React from 'react'
import { Input } from "antd";
import { WrapperInputSearchStyle } from "./style"

const InputComponent = ({ size, placeholder, bordered, style, ...rests}) => {
  return (
    <WrapperInputSearchStyle
        size={size}
        placeholder={placeholder}
        bordered={bordered ? bordered : undefined }
        style={ style }
        {...rests}
      />
  )
}

export default InputComponent