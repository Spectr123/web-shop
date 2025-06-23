import React, { useState } from "react";
import Header2 from "../components/Header2";

const WorkPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    resume: null,
  });
  const [errors, setErrors] = useState({});
  const [showSuccessModal, setShowSuccessModal] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  const handleFileChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      resume: e.target.files[0],
    }));
    if (errors.resume) {
      setErrors((prev) => ({ ...prev, resume: "" }));
    }
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.name.trim()) newErrors.name = "Имя обязательно";
    if (!formData.phone.trim()) newErrors.phone = "Телефон обязателен";
    else if (!/^[+]?[0-9\s\-()]{10,}$/.test(formData.phone))
      newErrors.phone = "Неверный формат телефона";
    if (!formData.email.trim()) newErrors.email = "Email обязателен";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email))
      newErrors.email = "Неверный формат email";
    if (!formData.resume) newErrors.resume = "Резюме обязательно";

    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = validateForm();

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    console.log("Отправка резюме:", formData);
    setShowSuccessModal(true);
  };

  const closeModal = () => {
    setShowSuccessModal(false);
    setFormData({ name: "", phone: "", email: "", resume: null });
    setErrors({});
  };

  return (
    <div className="wrapper">
      <Header2 />
      <div className="work-content">
        <div className="work-hero">
          <h1>Станьте частью команды galmart</h1>
          <p>
            Присоединяйтесь к нашей дружной команде и развивайтесь вместе с
            нами!
          </p>
        </div>
        <div className="work-form-section">
          <h2>Откликнуться</h2>
          <form className="work-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name">Имя:</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                required
              />
              {errors.name && <span className="error">{errors.name}</span>}
            </div>
            <div className="form-group">
              <label htmlFor="phone">Phone:</label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleInputChange}
                required
              />
              {errors.phone && <span className="error">{errors.phone}</span>}
            </div>
            <div className="form-group">
              <label htmlFor="email">Адрес электронной почты:</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                required
              />
              {errors.email && <span className="error">{errors.email}</span>}
            </div>
            <div className="form-group">
              <label htmlFor="resume">Резюме:</label>
              <div className="file-input-wrapper">
                <input
                  type="file"
                  id="resume"
                  name="resume"
                  onChange={handleFileChange}
                  accept=".pdf,.doc,.docx"
                  className="file-input"
                />
                <label htmlFor="resume" className="file-input-label">
                  {formData.resume ? formData.resume.name : "Файл не выбран"}
                </label>
              </div>
              {errors.resume && <span className="error">{errors.resume}</span>}
            </div>
            <button type="submit" className="submit-btn">
              Отправить резюме
            </button>
          </form>
        </div>
      </div>

      {/* Небольшая модалочка если резюме отправлено(ну пока фунции отправки нет, но будет(наверное)) */}

      {showSuccessModal && (
        <div className="modal-overlay" onClick={closeModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close" onClick={closeModal}>
              ×
            </button>
            <div className="modal-icon">✅</div>
            <h3 className="modal-title">Резюме отправлено!</h3>
            <p className="modal-message">
              Спасибо за ваш интерес к работе в galmart!
              <br />
              Мы рассмотрим ваше резюме и свяжемся с вами в ближайшее время.
            </p>
            <button className="modal-button confirm" onClick={closeModal}>
              Хорошо
            </button>
          </div>
        </div>
      )}
    </div>
  );
};
export default WorkPage;
