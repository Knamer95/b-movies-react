import SpainFlag from '../../assets/sp_flag.png';
import UKFlag from '../../assets/uk_flag.png';

const Language = () => {

    return (
        <div className="language">
            <img className="flag" src={SpainFlag} alt="spain_flag" />
            <img className="flag" src={UKFlag} alt="uk_flag" />
        </div>
    );
}

export default Language;