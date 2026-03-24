import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Header from './components/Header'
import Main from './components/Main'
import NotFound from './components/NotFound'
import Product from './components/Product'
import Product2 from './components/Product2'
import Save from './components/Save'
import Menu from './components/Menu'
import Nav from './components/Nav'
 

function App() {


   return (
    <div className='App'>
      <BrowserRouter>
        <Header>
          <Menu />
        </Header>
        <Nav />
        <hr/>
        
        <Routes>
          <Route path='/' element={<Main/>}></Route>
          {/*/product/:code/detail/:q */}
          <Route path='/Product/:code/detail/:q' element={<Product/>}></Route>
          <Route path='/Product2' element={<Product2/>}></Route>
          <Route path='*' element={<NotFound/>}></Route>
        </Routes>
 
      </BrowserRouter>
    </div>
  )
}


export default App
