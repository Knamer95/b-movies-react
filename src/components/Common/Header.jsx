import { NavLink } from 'react-router-dom';
import SearchBar from './Searchbar';
// import Language from './language';
import BeeIcon from '../../assets/bee2.svg';

const Header = () => {
    console.log('Header loaded');

    return (
        <div className="header">
            <NavLink to="/" className="logo-container">
                <img className="logo" src={BeeIcon} alt="B-movies_logo" />
                <span>B-movies</span>
            </NavLink>
            <div className="separator" />
            <SearchBar />
            {/* <div className="separator" /> */}
            {/* <Language /> */}
        </div>
    );
}

export default Header;