import { SaleDiv } from "./style"

const SaleItem = ({sale}: {sale: Sales}) => {
  return (
    <SaleDiv className="box">
        <a href="">{sale.id}</a>
        <div className="sale-name">{sale.nome}</div>
        <div className="sale-price">{sale.preco.toLocaleString('pt-br', {
            style: 'currency',
            currency: 'BRL'
        })}</div>
    </SaleDiv>
  )
}

export default SaleItem