import Formulario from './comoponents/Formulario'
import Header from './comoponents/Header'
import Menu from './comoponents/Menu'
import './App.css'

function App() {

  return (
    <div className='principal'>
      <Header />
      <Formulario />
      <Menu titulo="Menú del día" />
    </div>
  )
}

export default App
