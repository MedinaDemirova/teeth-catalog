import Menu from './Menu';
import Display from './Display';

function Header(){
    return(
        <div className = "main">
       <img className="header-logo" src="header-logo.png" alt="Tooth logo" />
        <Menu />
        <Display />
        </div>
    )
}

export default Header;