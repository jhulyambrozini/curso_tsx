import BtnMonth from "../BtnMonth/BtnMonth"

const Months = () => {
  return (
    <div className="flex">
      <BtnMonth n={-2} />
      <BtnMonth n={-1} />
      <BtnMonth n={0} />
    </div>
  )
}

export default Months