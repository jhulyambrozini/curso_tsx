import Sidenav from './components/Sidenav'
import Header from './components/Header'
import Resume from './pages/Resume'

import './style.ts'
import GlobalStyle from './style.ts'
import { DataContextProvider } from './Context/DataContext.tsx'

function App() {
  return (
    <DataContextProvider>
      <GlobalStyle />
        <Sidenav />
        <main>
          <Header />
          <Resume />
        </main>
    </DataContextProvider>
  )
}

export default App
