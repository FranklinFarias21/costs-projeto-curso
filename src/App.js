import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from './components/pages/Home'
import Contact from './components/pages/Contact'
import NewProject from './components/pages/NewProject'
import Projects from './components/pages/Projects'
import Project from './components/pages/Project'

import Container from './components/layout/Container'
import Navbar from './components/layout/Navbar'
import Footer from './components/layout/Footer'
import About from './components/pages/About'

function App() {
  return (
    <BrowserRouter>
      <Navbar />

      <Container customClass="min-height"> 
        <Routes>
          <Route path="/" exact Component={Home}/>
          <Route path="/about" Component={About}/>
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
