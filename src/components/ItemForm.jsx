import { useState } from 'react';

const ItemForm = ({ onSubmit }) => {
  const [form, setForm] = useState({
    title: '',
    description: '',
    image: '',
    category: 'фэнтези',
    year: new Date().getFullYear()
  });

  const handleChange = (e) => {
    setForm(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (form.title && form.description) {
      onSubmit(form);
      setForm({
        title: '',
        description: '',
        image: '',
        category: 'фэнтези',
        year: new Date().getFullYear()
      });
    }
  };

  return (
    <div className="form-container">
      <h2 className="form-title">Добавить новеллу</h2>
      <form onSubmit={handleSubmit} className="form-grid">
        <div className="form-group">
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

        <div className="form-group">
          <label className="form-label">Год</label>
          <input
            type="number"
            name="year"
            value={form.year}
            onChange={handleChange}
            min="2000"
            max="2030"
            className="form-input"
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
          <label className="form-label">Изображение</label>
          <input
            type="url"
            name="image"
            value={form.image}
            onChange={handleChange}
            placeholder="https://example.com/image.jpg"
            className="form-input"
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

        <button
          type="submit"
          className="submit-btn"
          style={{ gridColumn: '1 / -1' }}
        >
          Добавить новеллу
        </button>
      </form>
    </div>
  );
};

export default ItemForm;