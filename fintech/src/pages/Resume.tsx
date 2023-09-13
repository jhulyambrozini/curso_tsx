import { useData } from "../Context/DataContext"
import GraphicsSales from "../components/GraphicsSales/GraphicsSales"

const Resume = () => {
  const {data} = useData()
  if(data === null) return null

  const getSalesData = (data: Sales[]) => {
    return data
            .reduce((acc, item) => acc + item.preco, 0)
            .toLocaleString('pt-br', {
              style: 'currency',
              currency: 'BRL'
            })
  }

  return <section>
    <div className="resume flex mb">
      <div className="box">
        <h2>Vendas</h2>
        <span>
        {getSalesData(data
            .filter(i => i.status !== 'falha')     
            )}
        </span>
      </div>

      <div className="box">
        <h2>Recebidos</h2>
        <span>
          {getSalesData(data
            .filter(i => i.status === 'pago')     
            )}
        </span>
      </div>

      <div className="box">
        <h2>Processando</h2>
        <span>
        {getSalesData(data
            .filter(i => i.status === 'processando')     
            )}
        </span>
      </div>
    </div>
    <div className="box mb">
      <GraphicsSales data={data} />
    </div>
  </section>
}

export default Resume
