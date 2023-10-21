import ItemListContainer from '../../Components/ItemListContainer';
import React, { useState, useEffect } from 'react';
import categorias from "../../../BaseDeDatosCategorias"
import { Link } from 'react-router-dom';


function Categorias() {
    const [data, setData] = useState();
    useEffect(() => {
   setData(categorias)
    }, [setData]); 
  
  
    
    if (data) {
  
    return (
      <div>
        <h2 style={{display:'flex', flexDirection:'row', justifyContent:'center', marginRight:'3%'}}>Categorias de productos</h2>
        <div style={{ display: 'flex', flexDirection: 'row', justifyContent: "space-around"  }}>
          {data.map((categoria) => (
              <Link
              key={categoria.id}
              to={`/catalogo/${categoria.id}`}
              state={{ categoria }}
            >
              <ItemListContainer
                key={categoria.id}
                hoverable
                style={{ width: 240, margin: '3%' }}
                cover={<img  style={{maxHeight:"240px"}} alt={categoria.titulo} src={categoria.url} />}
                title={ categoria.titulo}
              />
              
            </Link>
          ))}
        </div>
      </div>
    );
  }
  }
  export default Categorias;