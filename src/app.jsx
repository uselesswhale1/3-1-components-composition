import React, { useState } from 'react'
import Counters from './components/counters'
import NavBar from './components/navBar'

function App() {
  const initialState = [
    { value: 0, id: 1, name: 'Ложка' },
    { value: 3, id: 2, name: 'Вилка' },
    { value: 2, id: 3, name: 'Тарелка' },
    { value: 0, id: 4, name: 'Стартов набор минималиста' },
    { value: 0, id: 5, name: 'Ненужные вещи' },
  ]
  const [counters, setCounters] = useState(initialState)

  const handleReset = () => setCounters(initialState)
  const handleDelete = (counterId) => {
    console.log('handleDelete', counterId)
    const newCounters = counters.filter((c) => c.id !== counterId)
    setCounters(newCounters)
  }
  // //My solution "практическое задание 1"
  // const [counter, setCounter] = useState({})
  // const handleIncrement = (counterId) => {
  //   const c = counters[counterId - 1]
  //   c.value += 1
  //   setCounter((prevState) => {
  //     return { ...prevState, value: c.value }
  //   })
  // }
  // const handleDecrement = (counterId) => {
  //   const c = counters[counterId - 1]
  //   if (c.value > 0) {
  //     c.value -= 1
  //     setCounter((prevState) => {
  //       return { ...prevState, value: c.value }
  //     })
  //   }
  // }
  const handleIncrement = (counterId) => {
    const newCounters = [...counters]
    const elementIndex = newCounters.findIndex((c) => c.id === counterId)
    newCounters[elementIndex].value++
    setCounters(newCounters)
  }
  const handleDecrement = (counterId) => {
    const newCounters = [...counters]
    const elementIndex = newCounters.findIndex((c) => c.id === counterId)
    newCounters[elementIndex].value--
    setCounters(newCounters)
  }
  return (
    <div className=" mx-auto p-3 py-md-5">
      <main>
        <NavBar totalItems={counters.reduce((a, c) => a + c.value, 0)} />
        <Counters
          counters={counters}
          onIncrement={handleIncrement}
          onDecrement={handleDecrement}
          onReset={handleReset}
          onDelete={handleDelete}
        />
      </main>
    </div>
  )
}

export default App
