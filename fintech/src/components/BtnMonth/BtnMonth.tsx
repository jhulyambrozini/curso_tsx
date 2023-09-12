import { useData } from "../../Context/DataContext"
import { ButtonMonth } from "./style"

const monthName = (n: number) => {
    const date = new Date()
    date.setMonth(date.getMonth() + n)
    return new Intl.DateTimeFormat('pt-br', { month: 'long'}).format(date)

}

const formatDate = (date: Date) => {
    const day = String(date.getDate()).padStart(2, '0')
    const month = String(date.getMonth() + 1).padStart(2, '0')
    const year = String(date.getFullYear())

    return `${year}-${month}-${day}`
}

const BtnMonth = ({n}: {n: number}) => {
    const {setInitial, setFinal} = useData()

    const setMonth = (n: number) => {
        const date = new Date()
        date.setMonth(date.getMonth() + n)

        const firstDay = new Date(date.getFullYear(), date.getMonth(), 1)
        const lastDay = new Date(date.getFullYear(), date.getMonth() + 1, 0)

        setInitial(formatDate(firstDay))
        setFinal(formatDate(lastDay))
    }

    return (
        <ButtonMonth onClick={() => setMonth(n)}>{monthName(n)}</ButtonMonth>
    )
}

export default BtnMonth