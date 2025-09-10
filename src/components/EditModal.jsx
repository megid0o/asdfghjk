import { useState } from 'react';

const EditModal = ({ item, onSave, onClose }) => {
  const [form, setForm] = useState({ ...item });

  const handleChange = (e) => {
    setForm(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave(form);
  };

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <div className="modal-header">
          <h2 className="modal-title">Редактировать новеллу</h2>
          <button onClick={onClose} className="close-btn">×</button>
        </div>
        
        <form onSubmit={handleSubmit} className="form-grid">
          <div className="form-group" style={{ gridColumn: '1 / -1' }}>
            <label className="form-label">Название</label>
            <input
              type="text"
              name="title"
              value={form.title}
              onChange={handleChange}
              className="form-input"
              required
            />
          </div>

          <div className="form-group" style={{ gridColumn: '1 / -1' }}>
            <label className="form-label">Описание</label>
            <textarea
              name="description"
              value={form.description}
              onChange={handleChange}
              rows={3}
              className="form-textarea"
              required
            />
          </div>

          <div className="form-group">
            <label className="form-label">Категория</label>
            <select
              name="category"
              value={form.category}
              onChange={handleChange}
              className="form-select"
            >
              <option value="фэнтези">Фэнтези</option>
              <option value="романтика">Романтика</option>
              <option value="приключения">Приключения</option>
              <option value="триллер">Триллер</option>
              <option value="научная фантастика">Научная фантастика</option>
            </select>
          </div>

          <div className="form-group">
            <label className="form-label">Год</label>
            <input
              type="number"
              name="year"
              value={form.year}
              onChange={handleChange}
              className="form-input"
            />
          </div>

          <div className="form-group" style={{ gridColumn: '1 / -1' }}>
            <label className="form-label">Изображение</label>
            <input
              type="url"
              name="image"
              value={form.image}
              onChange={handleChange}
              className="form-input"
            />
          </div>

          <div style={{ gridColumn: '1 / -1', display: 'flex', gap: '12px', justifyContent: 'flex-end' }}>
            <button
              type="button"
              onClick={onClose}
              className="btn"
              style={{ background: '#6b7280', color: 'white' }}
            >
              Отмена
            </button>
            <button
              type="submit"
              className="btn btn-primary"
            >
              Сохранить
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditModal;