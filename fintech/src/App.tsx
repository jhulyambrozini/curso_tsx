import Sidenav from './components/SideNav/Sidenav.tsx'
import Header from './components/Header/Header.tsx'
import Resume from './pages/Resume'

import './style.ts'
import GlobalStyle from './style.ts'
import { DataContextProvider } from './Context/DataContext.tsx'
import Sales from './pages/Sales.tsx'

function App() {
  return (
    <DataContextProvider>
      <GlobalStyle />
      <div className='container'>
        <Sidenav />
        <main>
          <Header />
          <Resume />
          <Sales />
        </main>
      </div>
    </DataContextProvider>
  )
}

export default App
