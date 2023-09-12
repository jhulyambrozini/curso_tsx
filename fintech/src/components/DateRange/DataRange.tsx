import { useData } from "../../Context/DataContext"
import DateInput from "../DateInput/DateInput"

const DataRange = () => {
  const {initial, setInitial, final, setFinal} = useData()
  return (
    <form className="box flex" onSubmit={(e) => e.preventDefault()}>
      <DateInput
        label="Início"
        id="initial"
        value={initial}
        onChange={({target}) => setInitial(target.value)}
      />

      <DateInput
        label="Final"
        id="final"
        value={final}
        onChange={({target}) => setFinal(target.value)}
      />
    </form>
  )
}

export default DataRange