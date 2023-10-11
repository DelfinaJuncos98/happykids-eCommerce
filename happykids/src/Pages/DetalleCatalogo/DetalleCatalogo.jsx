import React, { useState, useEffect } from 'react';
import ItemDetailContainer from '../../Components/ItemDetailContainer';
import { useParams } from 'react-router-dom';
import categorias from '../../../BaseDeDatosCategorias';

function DetalleCatalogo() {
  const { id } = useParams();
  const [producto, setProducto] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Buscar el producto en las categorías
        const categoriaSeleccionada = categorias.find((cat) => cat.productos.some((producto) => producto.id === id));

        if (categoriaSeleccionada) {
          const productoSeleccionado = categoriaSeleccionada.productos.find((producto) => producto.id === id);
          setProducto(productoSeleccionado);
        } else {
          console.error(`No se encontró un producto con el ID ${id}`);
        }
      } catch (error) {
        console.error('Error al cargar los datos:', error);
      }
    }

    fetchData(id);

  }, [id]);

  if (producto) {
    return (
      <div>
        <ItemDetailContainer
          categorias={producto} // Pasa el producto como prop
        />
      </div>
    );
  } else {
    return <h1>"Hubo un error"</h1>;
  }
}

export default DetalleCatalogo;
