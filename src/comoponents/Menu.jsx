import React, {useState} from 'react'

const Menu = ({titulo}) => {
  const [count, setCount] = useState(0)
  return (
    <div>
      <h2>{titulo}</h2>
      <ul>
        <li>1 <button onClick={() => setCount(count + 2)}>Agregar platillo</button></li>
      </ul>
      <p>Cantidad de platillos es {count}</p>
    </div>
  )
}

export default Menu