import React from 'react';
import ItemDetailContainer from '../../Components/ItemDetailContainer';
import { useParams} from 'react-router-dom';

function DetalleCatalogo(props) {
    const { id } = useParams();
    const producto = props.produ;
  
    console.log("productoSeleccionado:", producto.prenda);
    return (
      <div>
        <ItemDetailContainer
          foto={[<img alt={producto.prenda} src={producto.url} />]}
          titulo={producto.prenda}
          color={"rojo verde azul"}
          talle={[]}
          valor={[]}
        />
      </div>
    );
  }
  
  export default DetalleCatalogo;




