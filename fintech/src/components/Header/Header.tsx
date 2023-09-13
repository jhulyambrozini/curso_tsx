import { useLocation } from "react-router-dom"
import { useState, useEffect } from "react"

import DataRange from "../DateRange/DataRange"

import Months from "../Months/Months"
import { Title } from "./style"

const Header = () => {
  const [title, setTitle] = useState('Resumo')
  const location = useLocation()

  useEffect(() => {
    if(location.pathname === '/') {
      setTitle('Resumo')
      document.title = 'Fintech | Resumo'
    } else if(location.pathname === '/sales'){
      setTitle('Vendas')
      document.title = 'Fintech | Vendas'
    }
  }, [location])

  return <header className="mb">
    <Title className="mb">
      <DataRange />
      <h1 className="box bg-3">
        {title}
      </h1>
    </Title>
      <Months />
  </header>
}

export default Header
