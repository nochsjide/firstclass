import React from 'react'

const Homepage = () => {
  return (
    <>
        <div className="container text-center mt-5">
      <h1>Welcome to Pizzacle Shop</h1>
      <p>Your one-stop shop for the best pizzas in town!</p>
      <div className="row mt-4">
        <div className="col-md-4">
          <div className="card">
            <img src="https://via.placeholder.com/150" className="card-img-top" alt="Pizza 1" />
            <div className="card-body">
              <h5 className="card-title">Pizza 1</h5>
              <p className="card-text">Delicious pizza with fresh ingredients.</p>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card">
            <img src="https://via.placeholder.com/150" className="card-img-top" alt="Pizza 2" />
            <div className="card-body">
              <h5 className="card-title">Pizza 2</h5>
              <p className="card-text">A blend of the best cheeses and toppings.</p>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card">
            <img src="https://via.placeholder.com/150" className="card-img-top" alt="Pizza 3" />
            <div className="card-body">
              <h5 className="card-title">Pizza 3</h5>
              <p className="card-text">Perfectly baked to perfection.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  )
}

export default Homepage