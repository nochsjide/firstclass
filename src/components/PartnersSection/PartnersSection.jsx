import React from 'react';

const PartnersSection = () => {
  return (
    <section id="partners" style={{padding: '5rem 2rem', backgroundColor: '#ecf0f1', textAlign: 'center'}}>
      <h2 style={{fontSize: '2.8rem', marginBottom: '3rem', color: '#2c3e50', textTransform: 'uppercase'}}>Our Partners</h2>
      <div style={{display: 'flex', justifyContent: 'space-around', flexWrap: 'wrap', gap: '2rem'}}>
        <div style={{backgroundColor: '#ddd', padding: '2.5rem', borderRadius: '15px', boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)', flex: '1 1 calc(30% - 2rem)', boxSizing: 'border-box'}}>Partner 1</div>
        <div style={{backgroundColor: '#ddd', padding: '2.5rem', borderRadius: '15px', boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)', flex: '1 1 calc(30% - 2rem)', boxSizing: 'border-box'}}>Partner 2</div>
        <div style={{backgroundColor: '#ddd', padding: '2.5rem', borderRadius: '15px', boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)', flex: '1 1 calc(30% - 2rem)', boxSizing: 'border-box'}}>Partner 3</div>
      </div>
    </section>
  );
};

export default PartnersSection;
