import Sidenav from './components/SideNav/Sidenav.tsx'
import Header from './components/Header/Header.tsx'
import Resume from './pages/Resume'

import './style.ts'
import GlobalStyle from './style.ts'
import { DataContextProvider } from './Context/DataContext.tsx'
import Sales from './pages/Sales.tsx'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Sale from './pages/Sale.tsx'

function App() {
  return (
    <BrowserRouter>
      <DataContextProvider>
        <GlobalStyle />
        <div className='container'>
          <Sidenav />
          <main>
            <Header />
            <Routes>
              <Route path='/' element={<Resume />}/>
              <Route path='/sales' element={<Sales />}/>
              <Route path='/sales/:id' element={<Sale />}/>
            </Routes> 
          </main>
        </div>
      </DataContextProvider>
    </BrowserRouter>
  )
}

export default App
