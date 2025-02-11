function SideBar({selectedTab, setSelectedTab}) {

    return(
        
        <div className="d-flex flex-column flex-shrink-0 p-3 bg-body-tertiary" style={{width:'180px', height:'800px'}}>
    <ul className="nav nav-pills flex-column mb-auto">
      <li className="nav-item" onClick={() => {setSelectedTab("Home")}}>
        <a href="#" className={`nav-link  ${selectedTab === "Home" && "active"}`} aria-current="page">
          <svg className="bi pe-none me-2" width="16" height="16"><use xlinkHref="#home"></use></svg>
          Home
        </a>
      </li>
      <li onClick={() => {setSelectedTab("Account")}}>
        <a href="#" className={`nav-link ${selectedTab === "Account" && "active"}`}>
          <svg className="bi pe-none me-2" width="16" height="16"><use xlinkHref="#speedometer2"></use></svg>
          Create Post
        </a>
      </li>
    </ul>
    <hr/>
    </div>
        
    )
}

export default SideBar;