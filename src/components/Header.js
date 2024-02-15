const Header = () =>{
  return(
<nav className="navbar navbar-expand-sm navbar-light logocss">
<div className="container-fluid justify-content-between">
<a className="navbar-brand" href="#">
      <img src="https://tse1.mm.bing.net/th?id=OIP.eunWl1mn5mCUvP8OZZSyHgHaG_&pid=Api&P=0&h=180" alt="" width="45" height="40"/>
    </a>
  <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#mynavbar">
    <span className="navbar-toggler-icon"></span>
  </button>
  <div className="collapse navbar-collapse justify-content-center" id="mynavbar">
    <ul className="navbar-nav ">
      <li className="nav-item">
        <a className="nav-link" href="#">Home</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#">About</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#">Contact</a>
      </li>
    </ul>
    {/* <form className="d-flex">
      <input className="form-control me-2" type="text" placeholder="Search"/>
      <button className="btn btn-primary" type="button">Search</button>
    </form> */}
  </div>
</div>
</nav>

  );
  }

export default Header;