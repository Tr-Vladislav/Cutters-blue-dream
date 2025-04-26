import '../css/About.css';
import { motion } from 'framer-motion';
import {
  Wrench,
  Monitor,
  Users,
  Bot,
  Repeat,
  Settings2,
  BarChart2,
  LifeBuoy
} from 'lucide-react';

const features = [
  { icon: <Wrench size={32} />, title: 'Гарантия на работы' },
  { icon: <Monitor size={32} />, title: 'Современный интерфейс', desc: 'Удобное управление с сенсорного экрана' },
  { icon: <Users size={32} />, title: 'Аккаунты операторов', desc: 'Каждый — со своими программами' },
  { icon: <Bot size={32} />, title: 'Полная автоматизация', desc: 'Запускайте резку по готовой программе' },
  { icon: <Repeat size={32} />, title: 'Режим повторов', desc: 'Повторяющиеся действия — без усилий' },
  { icon: <Settings2 size={32} />, title: 'Автоподстройка выбегов', desc: 'Машина сама подстраивается под задачу' },
  { icon: <BarChart2 size={32} />, title: 'Статистика и отчёты', desc: 'Отчёты по работе операторов и машин' },
  { icon: <LifeBuoy size={32} />, title: 'Сервис и поддержка' },
];

function About() {
  return (
    <div className="about-section">
      <h2>Что даст вам модернизация</h2>
      <ul>
        {features.map((item, idx) => (
          <motion.li
            key={idx}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: idx * 0.1 }}
          >
            <div className="icon">{item.icon}</div>
            <h3>{item.title}</h3>
            {item.desc && <p>{item.desc}</p>}
          </motion.li>
        ))}
      </ul>

      <p className='footer'>
        Мы не просто обновляем прошивку — мы превращаем вашу гильотину в умную машину,
        экономящую время, деньги и ресурс оператора.
      </p>
    </div>
  );
}

export default About;
