import React from 'react'

const Counter = ({ value, id, name, onIncrement, onDecrement, onDelete }) => {
  // console.log(props)

  const formValue = () => {
    return value === 0 ? 0 : value
  }

  const getBadgeClasses = () => {
    let classes = 'badge m-2 bg-'
    classes += value === 0 ? 'danger' : 'primary'
    return classes
  }
  return (
    <>
      <div>
        <h4>{name}</h4>
        <span className={getBadgeClasses}>{formValue()}</span>
        <button
          className="btn btn-secondary btn-sm"
          onClick={() => {
            onIncrement(id)
          }}
        >
          Increment
        </button>
        <button
          className="btn btn-secondary btn-sm m-2"
          onClick={() => {
            onDecrement(id)
          }}
        >
          Decrement
        </button>
        <button
          className="btn btn-danger btn-sm m-2"
          onClick={() => {
            onDelete(id)
          }}
        >
          Delete
        </button>
        {/* <div>{JSON.stringify(props)}</div> */}
      </div>
    </>
  )
}

export default Counter
