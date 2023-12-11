import React from 'react'

export const Product = (props) => {
  const {id,productName,price,productImage} = props.data
  return (
    <div>
        <ul>
            <li>{id}</li>
            <li>{productName}</li>
            <li>{price}</li>
            <li>{productImage}</li>
        </ul>
    </div>
  )
}
