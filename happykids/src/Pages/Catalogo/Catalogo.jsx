import React from 'react';
import { Card } from 'antd';

const { Meta } = Card;

function Catalogo() {
  // Definir la clase Producto (con mayúscula inicial)
  class Producto {
    constructor(id, prenda, valor, url) {
      this.id = id;
      this.prenda = prenda;
      this.valor = valor;
      this.url = url
    }
  }

  // Crear una lista de productos
  const listaProductos = [
    new Producto(1, 'Remera nena', '$1000', "../../../public/RemeraNena.jpg" ),
    new Producto(2, 'Remera varon', '$1000', "../../../public/RemeraNene.jpg"),
    new Producto(3, 'Jean nena', '$1500', "../../../public/JeanNena.jpg"),
    new Producto(4, 'Jean varon', '$1500',"../../../public/JeanNene.jpg"),
  ];

  return (
    <div>
      <h2 style={{display:'flex', flexDirection:'row', justifyContent:'center', marginRight:'3%'}}>Lista de Productos</h2>
      <div style={{display:'flex', flexDirection:'row'  }}>
        {listaProductos.map((producto) => (
          <Card
            key={producto.id}
            hoverable
            style={{
              width: 240,
              margin:'3%',
              
            }}
            cover={<img alt={producto.prenda} src={producto.url} />}
          >
            <Meta title={producto.prenda} description={`Precio: ${producto.valor}`} />
          </Card>
          
        ))}
      </div>
      <div style={{display:'flex', flexDirection:'row', }}>
        {listaProductos.map((producto) => (
          <Card
            key={producto.id}
            hoverable
            style={{
              width: 240,
              margin:'3%'
            }}
            cover={<img alt={producto.prenda} src={producto.url} />}
          >
            <Meta title={producto.prenda} description={`Precio: ${producto.valor}`} />
          </Card>
          
        ))}
      </div>
      <div style={{display:'flex', flexDirection:'row', }}>
        {listaProductos.map((producto) => (
          <Card
            key={producto.id}
            hoverable
            style={{
              width: 240,
              margin:'3%'
            }}
            cover={<img alt={producto.prenda} src={producto.url} />}
          >
            <Meta title={producto.prenda} description={`Precio: ${producto.valor}`} />
          </Card>
          
        ))}
      </div>
    </div>
  );
}

export default Catalogo;