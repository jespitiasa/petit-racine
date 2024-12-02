import "./Navbar.css"

const Navbar = () => {
  return (
    <nav className='navbar'>
        <div className='brand'>
          <img src="./src/assets/LogoPetit.png" alt="Brand Petit, Logo, Petit Racine," />
          {/* <p>Petit Racine</p> */}
        </div>
        <ul className="categories">
            <li>Interior</li>
            <li>Exterior</li>
            <li>Macetas</li>
        </ul>

    </nav>
  )
}

export default Navbar