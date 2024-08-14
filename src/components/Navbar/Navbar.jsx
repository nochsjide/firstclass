import React from 'react'

const Navbar = () => {
  return (
    <>
       <nav style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '1rem 2rem', backgroundColor: '#2c3e50', color: '#ecf0f1', boxShadow: '0 2px 10px rgba(0, 0, 0, 0.1)'}}>
      <div style={{fontSize: '1.7rem', fontWeight: 'bold', letterSpacing: '2px'}}>MyBrand</div>
      <ul style={{listStyle: 'none', display: 'flex', gap: '2rem', margin: 0, padding: 0}}>
        <li><a href="#hero" style={{color: '#ecf0f1', textDecoration: 'none', fontSize: '1.1rem', transition: 'color 0.3s ease'}}>Home</a></li>
        <li><a href="#products" style={{color: '#ecf0f1', textDecoration: 'none', fontSize: '1.1rem', transition: 'color 0.3s ease'}}>Products</a></li>
        <li><a href="#about" style={{color: '#ecf0f1', textDecoration: 'none', fontSize: '1.1rem', transition: 'color 0.3s ease'}}>About</a></li>
        <li><a href="#partners" style={{color: '#ecf0f1', textDecoration: 'none', fontSize: '1.1rem', transition: 'color 0.3s ease'}}>Partners</a></li>
      </ul>
    </nav>
    </>
  )
}

export default Navbar