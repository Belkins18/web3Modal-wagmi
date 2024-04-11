import { Route, Routes } from 'react-router-dom'
import { MainPage, WagmiPage, EthersPage } from './pages'

function App() {
  return (
    <>
      <Routes>
        <Route path="/">
          <Route index element={<MainPage />} />
        </Route>
        <Route path="wagmi">
          <Route index element={<WagmiPage />} />
        </Route>
        <Route path="ethers">
          <Route index element={<EthersPage />} />
        </Route>
        {/* <Route path="test">
          <Route index element={<ReadContract />} />
        </Route> */}
      </Routes>
    </>
  )
}

export default App
