import React, { useState } from 'react';
import ItemListContainer from '../../Components/ItemListContainer';
import { Card } from 'antd';
import { Link } from 'react-router-dom';

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
                 
<Link
  key={producto.id}
  to={{
    pathname: `/detalle-catalogo/${producto.id}`
  }}
  ><ItemListContainer   
        key={producto.id} hoverable style={{width: 240,margin:'3%'}}
        cover={<img alt={producto.prenda} src={producto.url} />}
        title={producto.prenda} description={`Precio: ${producto.valor}`} 
        produ={producto}/></Link>
          
        ))}
      </div>
      <div style={{display:'flex', flexDirection:'row', }}>
        {listaProductos.map((producto) => (
              <ItemListContainer  key={producto.id} hoverable style={{width: 240,margin:'3%'}}
                  cover={<img alt={producto.prenda} src={producto.url} />}
                  title={producto.prenda} description={`Precio: ${producto.valor}`} />
              
        ))}
      </div>
      <div style={{display:'flex', flexDirection:'row', }}>
        {listaProductos.map((producto) => (
             <ItemListContainer  key={producto.id} hoverable style={{width: 240,margin:'3%'}}
                cover={<img alt={producto.prenda} src={producto.url} />}
                title={producto.prenda} description={`Precio: ${producto.valor}`} />
            
        ))}
      </div>
    </div>
  );
}

export default Catalogo;