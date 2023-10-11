import React, { useState, useEffect } from 'react';
import ItemListContainer from '../../Components/ItemListContainer';
import { Link } from 'react-router-dom';
import categorias from "../../../BaseDeDatosCategorias"
import { useParams} from 'react-router-dom';

function Catalogo() {
  const { id } = useParams();
  const [categoriaSeleccionada, setCategoriaSeleccionada] = useState(null);

  useEffect(() => {
  
    const categoria = categorias.find((cat) => cat.id === id);

    if (categoria) {
      setCategoriaSeleccionada(categoria);
    } else {
      console.error(`No se encontró una categoría con el ID ${id}`);
    }
  }, [id]);



  


    return (
      <div>
        <h2 style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', marginRight: '3%' }}>
          Lista de Productos
        </h2>
        <div style={{ display: 'flex', flexDirection: 'row', justifyContent: "space-around" }}>
          {categoriaSeleccionada && categoriaSeleccionada.productos.map((producto) => (
            <Link key={producto.id} to={`/detalle-catalogo/${producto.id}`}>
              <ItemListContainer
                key={producto.id}
                hoverable
                style={{ width: 240, margin: '3%' }}
                cover={<img alt={producto.prenda} src={producto.url} />}
                title={producto.prenda}
                description={`Precio: ${producto.valor}`}
              />
            </Link>
          ))}
        </div>
      </div>
    );
  }
  
  


export default Catalogo;