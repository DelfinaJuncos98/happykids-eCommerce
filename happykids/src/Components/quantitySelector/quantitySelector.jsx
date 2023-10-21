import React, { useState } from 'react'
import { PlusCircleFilled, MinusCircleFilled  } from '@ant-design/icons';
import { Col, Row } from 'antd';
import { Modal } from 'antd';


const QuantitySelector = ({categoria, total, valor, descripcion ,text = "Agregar al carrito", q = 1}) => {
    const [count, setCount] = useState(q)
    const [isModalOpen, setIsModalOpen] = useState(false);
    const increment = () => {
        
        setCount(count + 1)
    }
    const decrement = () => {
        if(count > 1){
            setCount(count - 1)
        }
    }


    const showModal = () => {
      setIsModalOpen(true);
      
    };
    const handleOk = () => {
      setIsModalOpen(false);
    };
    const handleCancel = () => {
      setIsModalOpen(false);
    };
  return (
    <div >
       <Col style={{display: "flex", flexDirection: "column", alignItems: "center"}}>
            <Row>
                <Col style={{margin:"5px"}}>
                    <PlusCircleFilled   onClick={increment}/>
                </Col>
                <Col style={{margin:"5px"}} >
                    <span>{ count }</span>
                </Col>
                <Col style={{margin:"5px"}}>
                    <MinusCircleFilled onClick={decrement}/>
                </Col>
                
            </Row>
            <Row>
                <button onClick={() => showModal() }>{text}</button>
                {isModalOpen ? <>
      
    <Modal title="Gracias por su eleccion!" open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
      <p>Detalle de compra</p>
      <p>Prenda elegida: {categoria}</p>
      <p>Cantidad Seleccionada: {count}</p>
      <p>Descripcion del producto: {descripcion}</p>
      <p>Valor total: ${count * valor} </p>

    </Modal> </>: null
                }
            </Row>
        </Col>
    </div>
  )
}

export default QuantitySelector