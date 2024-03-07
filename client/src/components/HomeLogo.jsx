import { Link } from 'react-router-dom';
import HomeIcon from '@mui/icons-material/Home';

function Logo() {
    return (
        <>
            <Link to = {'/'}>   
                <HomeIcon />
            </Link>
        </>
    );
}

export default Logo;