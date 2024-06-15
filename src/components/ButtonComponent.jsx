import React from 'react'
import './ButtonComponent.css'

function ButtonComponent({value, onClick, style}) {
  return (
    <button
        onClick={onClick}
        style={{
            width: '100%',
            borderRadius: '24px',
            padding: '12px 16px',
            backgroundColor: '#3776ff',
            textAlign: 'center',
            color: '#fff',
            border: 'none',
            ...style
        }}
        className='buttonComponent'
    >
        {value}
    </button>
  )
}

export default ButtonComponent