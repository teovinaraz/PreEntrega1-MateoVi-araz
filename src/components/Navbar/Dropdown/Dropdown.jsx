

const Dropdown = () => {
    return (

        <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Our Products
          </a>
          <ul className="dropdown-menu">
            <li><a className="dropdown-item" href="#">Blenders</a></li>
            <li><a className="dropdown-item" href="#">Microwaves</a></li>
            <li><a className="dropdown-item" href="#">Fridges</a></li>
            <li><a className="dropdown-item" href="#">Hovens</a></li>
            <li><hr className="dropdown-divider" /></li>
          </ul>
        </li>

    );
}

export default Dropdown;
