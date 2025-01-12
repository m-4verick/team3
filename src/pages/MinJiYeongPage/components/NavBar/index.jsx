function NavItem({ children }) {
  return (
    <li className="py-[12px] px-[8px] cursor-pointer hover:border-b hover:border-[#01754F]">
      {children}
    </li>
  );
}

export default function NavBar() {
  return (
    <nav>
      <ul className="flex gap-[16px]">
        <NavItem>취미</NavItem>
        <NavItem>음악</NavItem>
        <NavItem>영화</NavItem>
      </ul>
    </nav>
  );
}
