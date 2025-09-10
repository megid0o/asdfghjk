import { useState, useEffect } from 'react';
import Header from './components/Header';
import ItemList from './components/ItemList';
import ItemForm from './components/ItemForm';
import FavoritesList from './components/FavoritesList';
import { initialItems } from './data';

function App() {
  const [items, setItems] = useState([]);
  const [activeTab, setActiveTab] = useState('catalog');
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    const saved = localStorage.getItem('webnovels');
    setItems(saved ? JSON.parse(saved) : initialItems);
  }, []);

  useEffect(() => {
    localStorage.setItem('webnovels', JSON.stringify(items));
  }, [items]);

  const addItem = (newItem) => {
    const item = {
      ...newItem,
      id: Date.now().toString(),
      isFavorite: false
    };
    setItems([...items, item]);
  };

  const deleteItem = (id) => {
    setItems(items.filter(item => item.id !== id));
  };

  const editItem = (updatedItem) => {
    setItems(items.map(item => item.id === updatedItem.id ? updatedItem : item));
  };

  const toggleFavorite = (id) => {
    setItems(items.map(item => 
      item.id === id ? { ...item, isFavorite: !item.isFavorite } : item
    ));
  };

  const filteredItems = items.filter(item => 
    item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    item.description.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const favorites = items.filter(item => item.isFavorite);

  return (
    <div className="App">
      <Header 
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        favoritesCount={favorites.length}
      />
      
      <div className="container">
        {activeTab === 'catalog' && (
          <>
            <ItemForm onSubmit={addItem} />
            <ItemList 
              items={filteredItems}
              onDelete={deleteItem}
              onEdit={editItem}
              onToggleFavorite={toggleFavorite}
            />
          </>
        )}
        
        {activeTab === 'favorites' && (
          <FavoritesList 
            items={favorites}
            onDelete={deleteItem}
            onEdit={editItem}
            onToggleFavorite={toggleFavorite}
          />
        )}
      </div>
    </div>
  );
}

export default App;