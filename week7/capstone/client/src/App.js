import Header from './components/Header'
import { useLocation } from 'react-router-dom'
import PageNav from './components/PageNav'
import Footer from './components/Footer'

export default function App() {
  
  const location = useLocation()

  return (
    <div id="background">
      <div 
        id={location.pathname === '/' ? 'page' : ''}
        className={location.pathname !== '/' ? 'page' : ''}>
        <Header />
        <PageNav />
        <Footer />
      </div>
    </div>
  )
}
