import React from 'react'
import bgimg from "../../assets/herobackground.jpeg"

const Herosection = () => {
  return (

    <section id="hero" style={{height: '100vh', background: 'linear-gradient(to right, #2980b9, #8e44ad)', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', color: '#fff', textAlign: 'center', padding: '0 2rem', boxShadow: '0 4px 10px rgba(0, 0, 0, 0.2)'}}>
    <h1 style={{fontSize: '3.5rem', fontWeight: 'bold', marginBottom: '1rem', textShadow: '2px 2px 4px rgba(0, 0, 0, 0.4)'}}>Welcome to Our Beautiful Website</h1>
    <p style={{fontSize: '1.7rem', marginBottom: '2rem', maxWidth: '800px', lineHeight: '1.5'}}>We craft seamless and modern experiences tailored for your needs.</p>
    <button style={{padding: '0.8rem 2.5rem', fontSize: '1.3rem', color: '#fff', backgroundColor: '#e74c3c', border: 'none', borderRadius: '50px', cursor: 'pointer', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)', transition: 'background 0.3s ease'}}>Get Started</button>
  </section>
  )
}

export default Herosection