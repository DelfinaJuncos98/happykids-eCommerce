import React from 'react'
import { Col, Image } from 'antd';

const ItemDetailContainer = ({titulo, foto, color, talle, valor}) => {
  return (
    <div>
        <Col>
        <Image src={foto} alt={titulo} />
        </Col>
        <Col>
            <h1>{titulo}</h1>
            <h4>{color}</h4>
            <h4>{talle}</h4>
            <h3>{valor}</h3>
        </Col>
    </div>
  )
}

export default ItemDetailContainer