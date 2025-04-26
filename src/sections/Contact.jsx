import { useState, useEffect } from 'react';
import emailjs from 'emailjs-com';
import '../css/Contact.css';

function Contact() {
  const [formData, setFormData] = useState({
    company: '',
    model: '',
    name: '',
    phone: '',
    email: '',
    message: '',
  });

  const [errors, setErrors] = useState({});
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const validate = () => {
    let newErrors = {};
    if (!formData.company) newErrors.company = "Введите название фирмы";
    if (!formData.model) newErrors.model = "Введите модель резака";
    if (!formData.name) newErrors.name = "Введите имя";
    if (!formData.phone) newErrors.phone = "Введите телефон";
    if (!formData.email.includes('@')) newErrors.email = "Введите корректный email";
    return newErrors;
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: '' }); // убираем ошибку при вводе
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formErrors = validate();
    if (Object.keys(formErrors).length > 0) {
      setErrors(formErrors);
      return;
    }

    setIsSubmitting(true);
    try {
      await emailjs.send('service_x4ctmai', 'template_cx7hmmn', formData, 'fEcBUgBd6ncU36Ky1');
      setShowSuccessModal(true);
      setFormData({ company: '', model: '', name: '', phone: '', email: '', message: '' });
    } catch (error) {
      console.error('Ошибка отправки:', error);
      alert('Ошибка отправки');
    }
    setIsSubmitting(false);
  };

  const closeModal = () => {
    setShowSuccessModal(false);
  };

  return (
    <section className="contact-section">
      <div className="contact-image"></div>

      <div className={`contact-form ${isSubmitting ? 'submitting' : ''}`}>
        <h2>Оставьте заявку</h2>
        <form onSubmit={handleSubmit}>
          {['company', 'model', 'name', 'phone', 'email', 'message'].map((field) => (
            <div key={field} className="input-wrapper">
              {errors[field] && <span className="error-text">{errors[field]}</span>}
              {field !== 'message' ? (
                <input
                  type={field === 'email' ? 'email' : field === 'phone' ? 'tel' : 'text'}
                  name={field}
                  placeholder={
                    field === 'company' ? 'Название фирмы' :
                    field === 'model' ? 'Фирма и модель бумагорезки' :
                    field === 'name' ? 'Имя' :
                    field === 'phone' ? 'Телефон' :
                    'E-mail'
                  }
                  value={formData[field]}
                  onChange={handleChange}
                  disabled={isSubmitting}
                  className={errors[field] ? 'error-border' : ''}
                />
              ) : (
                <textarea
                  name="message"
                  placeholder="Дополнительное сообщение"
                  value={formData.message}
                  onChange={handleChange}
                  disabled={isSubmitting}
                  className={errors[field] ? 'error-border' : ''}
                ></textarea>
              )}
            </div>
          ))}

          <button type="submit" disabled={isSubmitting}>
            {isSubmitting ? 'Отправка...' : 'Отправить'}
          </button>
        </form>
      </div>

      {showSuccessModal && (
        <div className="modal-overlay" onClick={closeModal}>
          <div className="modal-content show">
            <h3>Спасибо!</h3>
            <p>Ваша заявка отправлена.<br /> Мы скоро с вами свяжемся!</p>
            <button onClick={closeModal}>Закрыть</button>
          </div>
        </div>
      )}
    </section>
  );
}

export default Contact;
