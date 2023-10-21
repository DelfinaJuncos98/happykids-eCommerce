import React from 'react'
import { Col, Image, Row} from 'antd';
import QuantitySelector from '../Components/quantitySelector/QuantitySelector';

const ItemDetailContainer = ({categorias, count}) => {

  
  return (
    <div style={{display: "flex", margin: "100px", justifyContent: "space-around"}}>
          <Row>
            <div style={{ marginLeft: "350px", padding:"10px", backgroundColor:"#e5f2e5"}} >
              <Col >
                <Image  src={categorias.url} style={{height:"300px"}}/>
                </Col>
                </div>
                <div style={{backgroundColor:"#e5f2e5", marginTop: "35px", marginLeft: "150px"}}>
                  <Col>
                  <div style={{display:"flex", flexDirection:"column", alignItems: "center"}}>
                      <h1>{categorias.prenda}</h1>
                      <h3>Valor: {categorias.valor}</h3>
                      <p>Descripcion: {categorias.descripcion}</p>
                      <QuantitySelector categoria={ categorias.prenda}  valor={categorias.valor} descripcion={categorias.descripcion}/>
                      </div>
                      
                  </Col>
            </div>
          </Row>
    </div>
  )
}

export default ItemDetailContainer