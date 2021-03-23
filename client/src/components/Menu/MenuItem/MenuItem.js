
import './MenuItem.css';

function MenuItem({
  children
}) {
  return (
    <li className='menu-item'>
      <a href="#">
{children}
      </a>
    </li>
  );
}

export default MenuItem;
