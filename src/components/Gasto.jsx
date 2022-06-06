
const Gasto = ({gasto}) => {
    const {nombre, cantidad, categoria, id} = gasto
  return (
    <div className="gasto sombra">
        <div className="contenido-gasto">
            <div className="descripcion-gasto">
                <p className="categoria">{categoria}</p>
                <p className="nombre-gasto">{nombre}</p>
                <p className="cantidad-gasto">{cantidad}</p>
            </div>
        </div>
    </div>
  )
}

export default Gasto