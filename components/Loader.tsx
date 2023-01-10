import React from 'react'

function Loader ({ show }: { show: Boolean }) {
  return show ? <div className='loader'></div> : null
}

export default Loader 
