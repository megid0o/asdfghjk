const Header = ({ activeTab, setActiveTab, searchQuery, setSearchQuery, favoritesCount }) => {
  return (
    <header className="header">
      <div className="container">
        <div className="header-content">
          <div className="logo">
            <div className="logo-icon">WB</div>
            <h1 className="logo-text">WebNovels</h1>
          </div>
          
          <nav className="nav">
            <button 
              className={`nav-button ${activeTab === 'catalog' ? 'active' : ''}`}
              onClick={() => setActiveTab('catalog')}
            >
              Каталог
            </button>
            <button 
              className={`nav-button ${activeTab === 'favorites' ? 'active' : ''}`}
              onClick={() => setActiveTab('favorites')}
            >
              Избранное ({favoritesCount})
            </button>
          </nav>
          
          <input
            type="text"
            placeholder="Поиск новелл..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="search-input"
          />
        </div>
      </div>
    </header>
  );
};

export default Header;