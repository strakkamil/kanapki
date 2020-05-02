import React from 'react'
import './history.css'

const History = (props) => {
  return (
    <section className="history">
      <div className="history-photo">
        <span>Z szynka</span>
        <span>Kanapkarnia</span>
      </div>
      <div className="history-info">
        <h2>Wierzymy w nasze kanapki</h2>
        <p>Kanapkarnia jest firmą działającą na rynku od 12 lat. W swojej ofercie posiadamy szeroki wybór kanapek, sałatek wytwarzanych ze świeżych produktów, dostarczanych od lokalnych dostawców. Kanapki pakujemy w ekologiczne, estetyczne torebki utrzymujące świeżość produktów.</p>
        <button>Zamów teraz</button>
      </div>
    </section>
  )
}

export default History