import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from './components/pages/Home'
import Company from './components/pages/Company'
import Contact from './components/pages/Contact'
import NewProject from './components/pages/NewProject'
import Projects from './components/pages/Projects'
import Project from './components/pages/Project'

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
          <Route path="/company" Component={Company}/>
          <Route path="/contact" Component={Contact}/>
          <Route path="/projects" Component={Projects}/>
          <Route path="/newproject" Component={NewProject}/>
          <Route path="/project/:id" Component={Project}/>
        </Routes>
      </Container>

      <Footer />
    </BrowserRouter>
  )
}

export default App
