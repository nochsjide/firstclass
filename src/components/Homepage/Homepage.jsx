import React from 'react'

const Homepage = () => {
  return (
    <section style={{backgroundColor:"black" , color:"white", display:"flex",justifyContent:"space-between", alignItems:"center"}}>
      <div>
        <h1>Home</h1>
      </div>
      <ul style={{display:"flex" , alignItems:"center" ,gap:"60px", listStyleType:"none"}}> 
        <li>About</li>  
        <li>Product</li>
        <li>Scholarship</li>
        <li>FAQ</li>
        <li>login</li>
      </ul>
    </section>
  )
}

export default Homepage