import React from 'react'

const ProductSection = () => {
  return (
    
    <section id="products" style={{padding: '5rem 2rem', backgroundColor: '#ecf0f1', textAlign: 'center'}}>
    <h2 style={{fontSize: '2.8rem', marginBottom: '3rem', color: '#2c3e50', textTransform: 'uppercase'}}>Our Products</h2>
    <div style={{display: 'flex', justifyContent: 'space-around', flexWrap: 'wrap', gap: '2rem'}}>
      <div style={{backgroundColor: '#fff', padding: '2.5rem', borderRadius: '15px', boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)', flex: '1 1 calc(30% - 2rem)', boxSizing: 'border-box', transition: 'transform 0.3s ease'}}>
        <h3 style={{fontSize: '1.8rem', marginBottom: '1rem', color: '#2980b9'}}>Product 1</h3>
        <p style={{fontSize: '1.1rem', color: '#7f8c8d'}}>An exceptional product that meets all your needs.</p>
      </div>
      <div style={{backgroundColor: '#fff', padding: '2.5rem', borderRadius: '15px', boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)', flex: '1 1 calc(30% - 2rem)', boxSizing: 'border-box', transition: 'transform 0.3s ease'}}>
        <h3 style={{fontSize: '1.8rem', marginBottom: '1rem', color: '#2980b9'}}>Product 2</h3>
        <p style={{fontSize: '1.1rem', color: '#7f8c8d'}}>The perfect solution for your everyday challenges.</p>
      </div>
      <div style={{backgroundColor: '#fff', padding: '2.5rem', borderRadius: '15px', boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)', flex: '1 1 calc(30% - 2rem)', boxSizing: 'border-box', transition: 'transform 0.3s ease'}}>
        <h3 style={{fontSize: '1.8rem', marginBottom: '1rem', color: '#2980b9'}}>Product 3</h3>
        <p style={{fontSize: '1.1rem', color: '#7f8c8d'}}>Innovative design and exceptional functionality.</p>
      </div>
    </div>
  </section>
  
  )
}

export default ProductSection
