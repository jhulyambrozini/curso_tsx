import { createContext, Dispatch, PropsWithChildren, SetStateAction, useContext, useState } from "react";
import useFetch from "../hooks/useFetch";

type IDataContext = {
    loading: boolean
    error: string | null
    data: Sales[] | null
    initial: string
    final: string
    setInitial: Dispatch<SetStateAction<string>>
    setFinal: Dispatch<SetStateAction<string>>
}

const DataContext = createContext<IDataContext | null>(null)

export const useData = () => {
    const context = useContext(DataContext)
    if(!context) throw new Error('useData precisa estar em DataContextProvider')
    return context
}

const getDateAgo = (n: number) => {
    const date = new Date()
    date.setDate(date.getDate() - n)
    const day = String(date.getDate()).padStart(2, '0')
    const month = String(date.getMonth() + 1).padStart(2, '0')
    const year = String(date.getFullYear())

    return `${year}-${month}-${day}`
}

export const DataContextProvider = ({children}: PropsWithChildren) => {
    const [initial, setInitial] = useState(getDateAgo(30))
    const [final, setFinal] = useState(getDateAgo(0))
    
    const {data, loading, error} = useFetch<Sales[]>(`https://data.origamid.dev/vendas/?inicio=${initial}&final=${final}`)

    return <DataContext.Provider value={{data, loading, error, initial, setInitial, final, setFinal}}>{children}</DataContext.Provider>
}