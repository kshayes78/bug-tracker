//styles & images
import './Navbar.css';
import Bug from '../assets/bug.svg';
import { Link } from 'react-router-dom';
import { useLogout } from '../hooks/useLogout';

export default function Navbar() {
  const { logout, isPending } = useLogout();
  return (
    <div className='navbar'>
      <ul>
        <li className='logo'>
          <img src={Bug} alt='bug logo' />
          <span>Bug Tracker</span>
        </li>
        <li>
          <Link to='/login'>Login</Link>
        </li>
        <li>
          <Link to='/signup'>Signup</Link>
        </li>
        <li>
          {!isPending && (
            <button className='btn' onClick={logout}>
              Logout
            </button>
          )}
          {isPending && (
            <button className='btn' disabled>
              Logging out...
            </button>
          )}
        </li>
      </ul>
    </div>
  );
}
