function Header() {
  return (
    <div className="fixed top-0 left-0 right-0 z-10 w-screen py-4 px-4">
      <nav className="mx-auto max-w-3xl ">
        <ul className="flex justify-between">
          <li>Kundeportalen</li>
          <li>Login</li>
        </ul>
      </nav>
    </div>
  );
}

export default Header;
