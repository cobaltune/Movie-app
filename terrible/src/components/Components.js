export function Navigation() {
  return (
    <ul className='nav'>
      <NavLink href='/'>Home</NavLink>
      <NavLink href='/movie/:id'>About</NavLink>
    </ul>
  );
}

function NavLink({ href, children }) {
  return (
    <li>
      <a href={href}>{children}</a>
    </li>
  );
}
