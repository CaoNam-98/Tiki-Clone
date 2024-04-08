import React from 'react'
import { Button } from "antd";

const ButtonComponent = ({ size, bordered, styleButton, styleTextButton, textButton, disabled, ...rests}) => {
  return (
    <Button
      style={{ 
        ...styleButton,
        background: disabled ? "#ccc" : styleButton.background
      }}
        size={size}
        bordered={bordered ? bordered : undefined}
        {...rests}
      >
        <span style={styleTextButton}>{textButton}</span>
      </Button>
  )
}

export default ButtonComponent