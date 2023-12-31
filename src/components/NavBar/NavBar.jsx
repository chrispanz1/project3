import { Link } from 'react-router-dom';
import * as userService from '../../utilities/users-service'


export default function NavBar({ user, setUser }) {
    function handleLogOut() {
        userService.logOut();

        setUser(null);
    }

    return (
        <nav><Link to='/'>Home</Link>
        &nbsp; | &nbsp;
        <Link to='/update'>Update</Link>
        &nbsp; | &nbsp;
        <Link to='/create'>Create Song</Link>
        &nbsp; | &nbsp;
        <Link to='/MusicQue'>song list</Link>
        &nbsp;&nbsp; <span>Welcome, {user?user.name:''}</span>
        &nbsp;&nbsp;
        <Link to='' onClick={handleLogOut}>
            Log Out
        </Link>
        </nav>
    );
}