const Footer = () => {
  return (
    <footer className="mt-20 border-t border-neutral-700 py-10 px-4 sm:px-8 max-w-6xl mx-auto text-neutral-300">
      <div 
        id="footer"
        className="flex flex-col md:flex-row justify-between items-start gap-10">
        <div>
          <h3 className="text-md font-semibold mb-4 text-white">Разделы сайта</h3>
          <ul className="space-y-2">
            <li><a href="#home" className="hover:text-white">Главная</a></li>
            <li><a href="#app" className="hover:text-white">Приложение</a></li>
            <li><a href="#analytics" className="hover:text-white">Аналитика</a></li>
            <li><a href="#features" className="hover:text-white">Предложения</a></li>
            <li><a href="#team" className="hover:text-white">Команда</a></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-md font-semibold mb-4 text-white">Контактная информация</h3>
          <ul className="space-y-2">
            <li>Email: <a href="mailto:info@chaika.com" className="hover:text-white">info@chaika.com</a></li>
            <li>Телефон: <a href="tel:+79643374685" className="hover:text-white">+7 (964) 337-46-85</a></li>
          </ul>
        </div>
      </div>

      {/* Optional bottom note */}
      <div className="mt-10 text-sm text-center text-neutral-500">
        © {new Date().getFullYear()} Чайка. Все права защищены.
      </div>
    </footer>
  );
};

export default Footer;
