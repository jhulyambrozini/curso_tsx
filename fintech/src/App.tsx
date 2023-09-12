import Sidenav from './components/SideNav/Sidenav.tsx'
import Header from './components/Header/Header.tsx'
import Resume from './pages/Resume'

import './style.ts'
import GlobalStyle from './style.ts'
import { DataContextProvider } from './Context/DataContext.tsx'

function App() {
  return (
    <DataContextProvider>
      <GlobalStyle />
      <div className='container'>
        <Sidenav />
        <main>
          <Header />
          <Resume />
        </main>
      </div>
    </DataContextProvider>
  )
}

export default App
