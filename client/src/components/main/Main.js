import Menu from './Menu';
import Display from './Display';

function Header(){
    return(
        <div className = "main">
         <div ><img className="header-logo" src="header-logo.png" alt="Tooth logo" /></div>
        <Menu />
        <Display />
        </div>
    )
}

export default Header;