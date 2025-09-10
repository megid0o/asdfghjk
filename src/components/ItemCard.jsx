import { useState } from 'react';
import EditModal from './EditModal';

const ItemCard = ({ item, onDelete, onEdit, onToggleFavorite }) => {
  const [showModal, setShowModal] = useState(false);

  const handleSave = (updatedItem) => {
    onEdit(updatedItem);
    setShowModal(false);
  };

  return (
    <>
      <div className="card">
        <div className="card-image-container">
          <img 
            src={item.image} 
            alt={item.title}
            className="card-image"
          />
          <button
            onClick={() => onToggleFavorite(item.id)}
            className={`favorite-btn ${item.isFavorite ? 'active' : ''}`}
          >
            ♥
          </button>
        </div>

        <div className="card-content">
          <h3 className="card-title">{item.title}</h3>
          <p className="card-meta">{item.year} • {item.category}</p>
          <p className="card-description">{item.description}</p>
        </div>

        <div className="card-actions">
          <button
            onClick={() => setShowModal(true)}
            className="btn btn-primary"
          >
            Редактировать
          </button>
          <button
            onClick={() => onDelete(item.id)}
            className="btn btn-danger"
          >
            Удалить
          </button>
        </div>
      </div>

      {showModal && (
        <EditModal
          item={item}
          onSave={handleSave}
          onClose={() => setShowModal(false)}
        />
      )}
    </>
  );
};

export default ItemCard;