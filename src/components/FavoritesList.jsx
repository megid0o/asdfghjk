import ItemCard from './ItemCard';

const FavoritesList = ({ items, onDelete, onEdit, onToggleFavorite }) => {
  if (items.length === 0) {
    return (
      <div className="text-center py-12">
        <h2 className="mb-4">Избранные новеллы</h2>
        <p>Здесь будут отображаться ваши избранные новеллы</p>
      </div>
    );
  }

  return (
    <div>
      <h2 className="mb-4">Избранные новеллы</h2>
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

export default FavoritesList;