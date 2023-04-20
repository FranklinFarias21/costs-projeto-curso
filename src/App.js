import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from './components/pages/Home'
import Company from './components/pages/Company'
import Contact from './components/pages/Contact'
import NewProject from './components/pages/NewProject'
import Projects from './components/pages/Projects'

import Container from './components/layout/Container'
import Navbar from './components/layout/Navbar'
import Footer from './components/layout/Footer'

function App() {
  return (
    <BrowserRouter>
      <Navbar />

      <Container customClass="min-height"> 
        <Routes>
          <Route path="/" exact Component={Home}/>
          <Route path="/company" exact Component={Company}/>
          <Route path="/contact" exact Component={Contact}/>
          <Route path="/projects" exact Component={Projects}/>
          <Route path="/newproject" exact Component={NewProject}/>
        </Routes>
      </Container>

      <Footer />
    </BrowserRouter>
  )
}

export default App
