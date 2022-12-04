import { useState } from 'react'

const Toogle = () => {
  const [toogle, setToogle] = useState(true)
  const handleClick = () => {
    setToogle(!toogle)
  }
  return (
    <div>
      <button
        className='bg-teal-400 w-1/6 shadow-lg rounded-lg p-2 hover:animate-pulse'
        onClick={handleClick}
      >
        Toogle State
      </button>
      {toogle ? (
        <ul className='underline  p-4 space-y-6 cursor-pointer'>
          <li>Home</li>
          <li>Contact</li>
          <li>About</li>
          <li>Services</li>
        </ul>
      ) : (
        <></>
      )}
    </div>
  )
}

export default Toogle
