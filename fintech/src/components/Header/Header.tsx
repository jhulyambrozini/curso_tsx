import DataRange from "../DateRange/DataRange"
import Months from "../Months/Months"

const Header = () => {
  return <header className="mb">
    <div className="mb">
      <DataRange />
    </div>
      <Months />
  </header>
}

export default Header
