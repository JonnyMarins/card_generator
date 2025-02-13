function Header() {
  return (
    <header className="bg-blue-600 text-white">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold">VoLoco</h1>
        <nav>
          <a href="http://localhost:5173">
            <button className="mr-2 px-3 py-1 rounded hover:bg-blue-700">
              Home
            </button>
          </a>
          <a href="http://localhost:5173/favorites">
            <button className="px-3 py-1 rounded hover:bg-blue-700">
              Preferiti
            </button>
          </a>
        </nav>
      </div>
    </header>
  );
}

export default Header;
