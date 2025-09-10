import ItemCard from './ItemCard';

const ItemList = ({ items, onDelete, onEdit, onToggleFavorite }) => {
  if (items.length === 0) {
    return (
      <div className="text-center py-12">
        <h2 className="mb-4">Новеллы не найдены</h2>
        <p>Попробуйте изменить поиск или добавьте новую новеллу</p>
      </div>
    );
  }

  return (
    <div className="mt-4">
      <h2 className="mb-4">Каталог веб-новелл</h2>
      <div className="grid">
        {items.map(item => (
          <ItemCard
            key={item.id}
            item={item}
            onDelete={onDelete}
            onEdit={onEdit}
            onToggleFavorite={onToggleFavorite}
          />
        ))}
      </div>
    </div>
  );
};

export default ItemList;