import React, { useCallback, useState } from 'react'
import { useNavigate } from 'react-router-dom'
const Web = () => {
  let navigate = useNavigate()
  const [value, setValue] = useState('')
  const handleSumbit = useCallback(() => {
    if (value) {
      navigate(`/room/${value}`)
    }
  },[navigate,value])

  return (
    <div>
      <input value={value} onChange={(e) => setValue(e.target.value)} type="text" placeholder='Enter Room No' />
      <button onClick={handleSumbit}>Sumbit</button>
    </div>
  )
}

export default Web
