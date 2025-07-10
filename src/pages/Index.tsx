import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Icon from "@/components/ui/icon";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 to-green-50">
      {/* Header */}
      <header className="bg-white/80 backdrop-blur-sm shadow-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Icon name="Flower" size={32} className="text-pink-400" />
              <span className="text-2xl font-bold text-gray-800">Цветы</span>
            </div>
            <nav className="hidden md:flex items-center gap-6">
              <a
                href="#home"
                className="text-gray-600 hover:text-pink-400 transition-colors"
              >
                Главная
              </a>
              <a
                href="#catalog"
                className="text-gray-600 hover:text-pink-400 transition-colors"
              >
                Каталог
              </a>
              <a
                href="#contacts"
                className="text-gray-600 hover:text-pink-400 transition-colors"
              >
                Контакты
              </a>
            </nav>
            <Button className="bg-pink-400 hover:bg-pink-500 text-white">
              <Icon name="Phone" size={16} className="mr-2" />
              Заказать
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section id="home" className="py-20 px-4">
        <div className="container mx-auto text-center">
          <h1 className="text-5xl md:text-7xl font-bold text-gray-800 mb-6">
            Нежные цветы для
            <span className="text-pink-400 block">особых моментов</span>
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Создаём незабываемые букеты на заказ, оформляем свадьбы и доставляем
            радость по всему городу
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-pink-400 hover:bg-pink-500 text-white"
            >
              <Icon name="ShoppingCart" size={20} className="mr-2" />
              Выбрать букет
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-pink-400 text-pink-400 hover:bg-pink-50"
            >
              <Icon name="Truck" size={20} className="mr-2" />
              Доставка
            </Button>
          </div>
        </div>
      </section>

      {/* Catalog Section */}
      <section id="catalog" className="py-20 px-4 bg-white/50">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-center text-gray-800 mb-16">
            Наши услуги
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <CardHeader>
                <div className="w-full h-48 bg-gradient-to-br from-pink-100 to-pink-200 rounded-lg mb-4 overflow-hidden">
                  <img
                    src="/img/37dde1af-cfba-4fa4-8eff-f6898cedd7ea.jpg"
                    alt="Букеты на заказ"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <CardTitle className="text-2xl text-gray-800 flex items-center gap-2">
                  <Icon name="Heart" size={24} className="text-pink-400" />
                  Букеты на заказ
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Создаём уникальные композиции по вашим пожеланиям. Свежие
                  цветы, профессиональная упаковка.
                </p>
                <Button className="w-full bg-pink-400 hover:bg-pink-500 text-white">
                  Заказать букет
                </Button>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <CardHeader>
                <div className="w-full h-48 bg-gradient-to-br from-green-100 to-green-200 rounded-lg mb-4 overflow-hidden">
                  <img
                    src="/img/447560a9-21ef-4559-b18c-bc6d259c6bab.jpg"
                    alt="Комнатные растения"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <CardTitle className="text-2xl text-gray-800 flex items-center gap-2">
                  <Icon name="Leaf" size={24} className="text-green-400" />
                  Комнатные растения
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Большой выбор домашних растений с рекомендациями по уходу.
                  Создайте зелёный уголок дома.
                </p>
                <Button className="w-full bg-green-400 hover:bg-green-500 text-white">
                  Выбрать растение
                </Button>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <CardHeader>
                <div className="w-full h-48 bg-gradient-to-br from-purple-100 to-purple-200 rounded-lg mb-4 overflow-hidden">
                  <img
                    src="/img/cbbdc348-0956-4742-ab29-56c4a45bec72.jpg"
                    alt="Свадебное оформление"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <CardTitle className="text-2xl text-gray-800 flex items-center gap-2">
                  <Icon name="Crown" size={24} className="text-purple-400" />
                  Свадебное оформление
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Полное флористическое оформление торжества. Букет невесты,
                  декор зала, арки и композиции.
                </p>
                <Button className="w-full bg-purple-400 hover:bg-purple-500 text-white">
                  Обсудить свадьбу
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-center text-gray-800 mb-16">
            Почему выбирают нас
          </h2>
          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-pink-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name="Truck" size={32} className="text-pink-400" />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                Доставка по городу
              </h3>
              <p className="text-gray-600">Бесплатная доставка от 2000₽</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name="Clock" size={32} className="text-green-400" />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                Свежие цветы
              </h3>
              <p className="text-gray-600">Ежедневные поставки</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name="Award" size={32} className="text-purple-400" />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                Опытные флористы
              </h3>
              <p className="text-gray-600">Более 5 лет опыта</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name="Heart" size={32} className="text-orange-400" />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                Индивидуальный подход
              </h3>
              <p className="text-gray-600">Учитываем все пожелания</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contacts Section */}
      <section id="contacts" className="py-20 px-4 bg-white/50">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-center text-gray-800 mb-16">
            Контакты
          </h2>
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-semibold text-gray-800 mb-6">
                Свяжитесь с нами
              </h3>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <Icon name="Phone" size={20} className="text-pink-400" />
                  <span className="text-gray-700">+7 (967) 543-41-57</span>
                </div>
                <div className="flex items-center gap-3">
                  <Icon name="Mail" size={20} className="text-pink-400" />
                  <span className="text-gray-700">info@flowers.ru</span>
                </div>
                <div className="flex items-center gap-3">
                  <Icon name="MapPin" size={20} className="text-pink-400" />
                  <span className="text-gray-700">
                    г. Москва, ул. Цветочная, 15
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <Icon name="Clock" size={20} className="text-pink-400" />
                  <span className="text-gray-700">Работаем: 9:00 - 21:00</span>
                </div>
              </div>
            </div>
            <div>
              <h3 className="text-2xl font-semibold text-gray-800 mb-6">
                Зоны доставки
              </h3>
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <Icon
                    name="CheckCircle"
                    size={20}
                    className="text-green-400"
                  />
                  <span className="text-gray-700">По Москве - от 500₽</span>
                </div>
                <div className="flex items-center gap-3">
                  <Icon
                    name="CheckCircle"
                    size={20}
                    className="text-green-400"
                  />
                  <span className="text-gray-700">
                    Московская область - от 1000₽
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <Icon
                    name="CheckCircle"
                    size={20}
                    className="text-green-400"
                  />
                  <span className="text-gray-700">
                    Экспресс доставка - 2 часа
                  </span>
                </div>
              </div>
              <Button className="mt-6 bg-pink-400 hover:bg-pink-500 text-white">
                <Icon name="MessageCircle" size={20} className="mr-2" />
                Написать в WhatsApp
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-12 px-4">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Icon name="Flower" size={24} className="text-pink-400" />
                <span className="text-xl font-bold">Цветы</span>
              </div>
              <p className="text-gray-300">
                Создаём красоту и дарим радость через цветы уже более 5 лет.
              </p>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Быстрые ссылки</h4>
              <div className="space-y-2">
                <a
                  href="#home"
                  className="block text-gray-300 hover:text-pink-400 transition-colors"
                >
                  Главная
                </a>
                <a
                  href="#catalog"
                  className="block text-gray-300 hover:text-pink-400 transition-colors"
                >
                  Каталог
                </a>
                <a
                  href="#contacts"
                  className="block text-gray-300 hover:text-pink-400 transition-colors"
                >
                  Контакты
                </a>
              </div>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Социальные сети</h4>
              <div className="flex gap-4">
                <Button
                  size="sm"
                  variant="outline"
                  className="border-pink-400 text-pink-400 hover:bg-pink-400 hover:text-white"
                >
                  <Icon name="Instagram" size={16} />
                </Button>
                <Button
                  size="sm"
                  variant="outline"
                  className="border-pink-400 text-pink-400 hover:bg-pink-400 hover:text-white"
                >
                  <Icon name="Facebook" size={16} />
                </Button>
                <Button
                  size="sm"
                  variant="outline"
                  className="border-pink-400 text-pink-400 hover:bg-pink-400 hover:text-white"
                >
                  <Icon name="Phone" size={16} />
                </Button>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 Цветы. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
