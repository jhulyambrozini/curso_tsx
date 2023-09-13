import { useData } from "../Context/DataContext"
import SaleItem from "../components/SaleItem/SaleItem"

const Sales = () => {
    const {data} = useData()
  return (
    <ul>
        {data?.map(sale => (
            <li key={sale.id}>
                <SaleItem sale={sale} />
            </li>
        ))}
    </ul>
  )
}

export default Sales