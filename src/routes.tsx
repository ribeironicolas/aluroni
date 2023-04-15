import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from 'pages/Home'
import Menu from 'pages/Menu'
import Nav from 'components/Nav'
import DefaultPage from 'components/DefaultPage'
import About from 'pages/About'
import Footer from 'components/Footer'
import NotFound from 'pages/NotFound'
import Plate from 'pages/Plate'

export default function appRouter() {
  return (
    <main className='container'>
      <Router basename={process.env.PUBLIC_URL}>
        <Nav />
        <Routes>
          <Route path='/' element={<DefaultPage />} >
            <Route index element={<Home />} />
            <Route path='menu' element={<Menu />} />
            <Route path='about' element={<About />} />
          </Route>
          <Route path='plate/:id' element={<Plate />}/>
          <Route path='*' element={<NotFound />}/>
        </Routes>
        <Footer />
      </Router>
    </main>
  )
}