import Gasto from './Gasto'

const ListadoGastos = ({gastos, setGastoEditar, eliminarGasto, filtro, gastosFiltrados}) => {
  return (
    <div className="listado-gastos contenedor">
      {/* <h2>{gastos.length ? 'Listado de Gastos' : 'Añade un Nuevo Gastos'}</h2> */}

      {
        filtro ? (
          <>
            <h2>{gastosFiltrados.length ? 'Listado de Gastos' : 'Añade un Nuevo Gastos'}</h2>
              {gastosFiltrados.map( gasto => (
                
                      <Gasto
                          key={gasto.id}
                          gasto={gasto}
                          setGastoEditar={setGastoEditar}
                          eliminarGasto={eliminarGasto}
                      />
               ))}
            </>
        ) : (
            <>
            <h2>{gastos.length ? 'Listado de Gastos' : 'Añade un Nuevo Gastos'}</h2>
                      {gastos.map( gasto => (
                        <Gasto
                            key={gasto.id}
                            gasto={gasto}
                            setGastoEditar={setGastoEditar}
                            eliminarGasto={eliminarGasto}
                        />
                      ))}
            </>
        )
      }
    </div>
  )
}

export default ListadoGastos