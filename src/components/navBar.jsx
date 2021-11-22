import React from 'react'

const NavBar = ({ totalItems }) => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav">
            <a className="nav-link active" aria-current="page" href="#">
              Home
            </a>
            <a className="nav-link" href="#">
              Features
            </a>
            <a className="nav-link" href="#">
              Pricing
            </a>
            <a className="nav-link disabled position-relative">
              Корзина
              <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                {totalItems}
                <span className="visually-hidden">unread messages</span>
              </span>
            </a>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default NavBar
