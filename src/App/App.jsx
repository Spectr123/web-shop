import React, { useState, useCallback, useMemo, useRef } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Items from "../components/Items";
import Categories from "../components/Categories";

const App = () => {
  const [orders, setOrders] = useState([]);
  const lastToastTimestamp = useRef(0);
  const [items] = useState([
    {
      id: 1,
      title: "Хлеб goMART, Казахстан",
      price: 430,
      img: "bread.jpg",
      desc: "Свежий белый хлеб, выпеченный по традиционному рецепту.",
      category: "Выпечка",
    },
    {
      id: 2,
      title: "Булочка творожник galmart",
      price: 330,
      img: "buns.jpg",
      desc: "Вкусная булочка с творожной начинкой, идеально подходит к чаю.",
      category: "Выпечка",
    },
    {
      id: 3,
      title: "Хлеб goMART, Казахстан",
      price: 530,
      img: "bread_chiabata.jpg",
      desc: "Свежий белый хлеб, выпеченный по традиционному рецепту goMART.",
      category: "Выпечка",
    },
    {
      id: 65,
      title: "Багет французский galmart, 270 г",
      price: 620,
      img: "bread_baton_france.jpg",
      desc: "Свежий багет, выпеченный по традиционному рецепту Франции.",
      category: "Выпечка",
    },
    {
      id: 66,
      title: "Булочка Ярославская galmart, 100 г",
      price: 200,
      img: "buns_yaraslavskaya.jpg",
      desc: "Вкусная булочка Ярославская, идеально подходит к чаю.",
      category: "Выпечка",
    },
    {
      id: 67,
      title: "Круассан galmart, 1 шт, Казахстан",
      price: 300,
      img: "croissant.jpg",
      desc: "Вкусный круассан с хрустящей корочкой, идеально подходит к кофе.",
      category: "Выпечка",
    },
    {
      id: 4,
      title: "Молоко Родина 3,2%",
      price: 470,
      img: "milk.jpg",
      desc: "Пастеризованное молоко высшего качества.",
      category: "Молочные продукты",
    },
    {
      id: 5,
      title: "Сыр Ламбер 50%, 230 г",
      price: 1980,
      img: "cheese.jpg",
      desc: "Натуральный сыр, изготовленный по традиционным рецептам.",
      category: "Молочные продукты",
    },
    {
      id: 6,
      title: "Творог President Домашний 5%, 450 г",
      price: 1070,
      img: "cottage_cheeseъ.jpg",
      desc: "Нежный творог, богатый кальцием и белком.",
      category: "Молочные продукты",
    },
    {
      id: 69,
      title: "Молоко Шадринское концентрированное, 7,1%, 500 мл",
      price: 960,
      img: "milk_shadrinskoe.jpg",
      desc: 'Концентрированное молоко "Шадринское" стерилизованное без caxapа, приготовлено из цельного молока.',
      category: "Молочные продукты",
    },
    {
      id: 70,
      title: "Сливки Домик в деревне стерилизованные 20%, 200 мл,",
      price: 720,
      img: "cream.jpg",
      desc: "Сливки Домик в деревне приготовлены из свежего отборного молока, прошедшего строгий контроль качества.",
      category: "Молочные продукты",
    },
    {
      id: 71,
      title: "Сметана President 20%, 200 г",
      price: 1070,
      img: "sour cream.jpg",
      desc: 'Сметана "President" 20% производится из свежих нормализованных сливок и закваски по традиционной технологии.',
      category: "Молочные продукты",
    },
    {
      id: 7,
      title: "Орехи кедровые очищенные",
      price: 4704,
      img: "nuts.jpg",
      desc: "Кедровые орехи, богатые витаминами и минералами.",
      category: "Закуски",
    },
    {
      id: 8,
      title: "Чипсы Лейс, 150 г",
      price: 600,
      img: "chips_onion.jpg",
      desc: "Хрустящие, рифленные картофельные чипсы со вкусом лука.",
      category: "Закуски",
    },
    {
      id: 9,
      title: "Квашеная капуста, 500 г",
      price: 400,
      img: "sauerkraut.jpeg",
      desc: "Полезная квашеная капуста, богатая витаминами.",
      category: "Закуски",
    },
    {
      id: 10,
      title: "Гранола Sante Granola с шоколадом, 350 г",
      price: 2500,
      img: "corn_flakes.jpg",
      desc: "Хрустящие кукурузные хлопья для завтрака.",
      category: "Закуски",
    },
    {
      id: 72,
      title: "Чипсы Рringles паприка, 165 г",
      price: 2170,
      img: "pringles.jpg",
      desc: "Полезная квашеная капуста, богатая витаминами.",
      category: "Закуски",
    },
    {
      id: 73,
      title: "Крекер Tuc с сыром, 100 г",
      price: 620,
      img: "tuc.jpg",
      desc: "Печенье Tuc Крекер с сыром - это хрустящая закуска, которая идеально подходит для перекуса в любое время дня. ",
      category: "Закуски",
    },
    {
      id: 11,
      title: "Яйцо Казгер-Құс, 10 шт, Казахстан",
      price: 850,
      img: "eggs.jpg",
      desc: "Свежие куриные яйца от местных фермеров, премиум качества.",
      category: "Яйца и мясо",
    },
    {
      id: 12,
      title: "Курица охлажденная, 1 кг",
      price: 3200,
      img: "chicken.jpg",
      desc: "Свежая курица, выращенная без антибиотиков.",
      category: "Яйца и мясо",
    },
    {
      id: 13,
      title: "Куриные крылышки, 1 кг",
      price: 2800,
      img: "chicken_wings.jpg",
      desc: "Вкусные куриные крылышки, идеально подходят для запекания.",
      category: "Яйца и мясо",
    },
    {
      id: 14,
      title: "Куриные бедра Кус вкус, 1 кг",
      price: 1900,
      img: "chicken_thighs.jpg",
      desc: "Сочные куриные бедра, идеально подходят для запекания.",
      category: "Яйца и мясо",
    },
    {
      id: 15,
      title: "Куриные филе, 1 кг",
      price: 2200,
      img: "chicken_breast.png",
      desc: "Нежное куриное филе, идеально подходит для жарки и запекания.",
      category: "Яйца и мясо",
    },
    {
      id: 16,
      title: "Огурцы Миринда, вес, Казахстан",
      price: 422,
      img: "cucumbers.jpeg",
      desc: "Хрустящие огурцы, выращенные без использования химикатов.",
      category: "Овощи",
    },
    {
      id: 17,
      title: "Картофель, 1 кг",
      price: 430,
      img: "potato.jpg",
      desc: "Свежий картофель, идеален для приготовления различных блюд.",
      category: "Овощи",
    },
    {
      id: 18,
      title: "Морковь, 1 кг",
      price: 400,
      img: "carrot.jpg",
      desc: "Свежая морковь, богатая витаминами и минералами.",
      category: "Овощи",
    },
    {
      id: 19,
      title: "Лук репчатый, 1 кг",
      price: 300,
      img: "onion.jpg",
      desc: "Свежий репчатый лук, необходимый для многих блюд.",
      category: "Овощи",
    },
    {
      id: 20,
      title: "Капуста белокочанная, 1 кг",
      price: 540,
      img: "cabbage.jpg",
      desc: "Свежая белокочанная капуста, необходимая для салатов и гарниров.",
      category: "Овощи",
    },
    {
      id: 21,
      title: "Свекла, 1 кг",
      price: 138,
      img: "beetroot.jpg",
      desc: "Свежая свекла, богатая витаминами и минералами.",
      category: "Овощи",
    },
    {
      id: 22,
      title: "Паста Raguso Linguine, 500 г ",
      price: 2500,
      img: "pasta.jpg",
      desc: "Итальянская паста из твердых сортов пшеницы.",
      category: "Макаронные изделия",
    },
    {
      id: 23,
      title: "Макароны Султан спираль, 400 г,",
      price: 810,
      img: "macaroni.jpg",
      desc: "Макароны из твердых сортов пшеницы, идеально подходят для приготовления различных блюд.",
      category: "Макаронные изделия",
    },
    {
      id: 24,
      title: "Макароны Barilla Farfalle фарфалле, 500 г",
      price: 920,
      img: "macaroni_barila.jpg",
      desc: "Макароны из твердых сортов пшеницы. Паста занимает главное место в итальянской культуре еды.",
      category: "Макаронные изделия",
    },
    {
      id: 25,
      title: "Кофе в зернах Lavazza Qualita Oro",
      price: 5000,
      img: "coffee.jpg",
      desc: "Ароматный кофе из лучших сортов.",
      category: "Напитки",
    },
    {
      id: 26,
      title: "Чай Greenfield Ассам, 25 пак.",
      price: 1055,
      img: "tea.jpg",
      desc: "Чай из высококачественных листьев, собранных вручную.",
      category: "Напитки",
    },
    {
      id: 27,
      title: "Сок Апельсиновый Primo, 200мл",
      price: 600,
      img: "orange_juice.png",
      desc: "Освежающий апельсиновый сок без добавления сахара.",
      category: "Напитки",
    },
    {
      id: 28,
      title: "Томатный сок, 750 мл",
      price: 1400,
      img: "tomato_juice.jpg",
      desc: "Освежающий томатный сок без добавления сахара.",
      category: "Напитки",
    },
    {
      id: 29,
      title: "Шоколад Казахстанский",
      price: 900,
      img: "chocolate.jpeg",
      desc: "Темный шоколад с высоким содержанием какао.",
      category: "Сладости",
    },
    {
      id: 30,
      title: "Печенье Орео, 154 г",
      price: 600,
      img: "oreo.jpg",
      desc: "Популярное печенье с кремовой начинкой.",
      category: "Сладости",
    },
    {
      id: 31,
      title: "Мед Столичный майский, 430 г",
      price: 2270,
      img: "honey.jpg",
      desc: "Ароматный мед, собранный с цветущих лугов.",
      category: "Сладости",
    },
    {
      id: 32,
      title: "Печенье курабье goMART",
      price: 990,
      img: "sandwich_cookies.png",
      desc: "Вкусное песочное печенье с начинкой.",
      category: "Сладости",
    },
    {
      id: 33,
      title: "Масло сливочное President 82%, 400 г",
      price: 3885,
      img: "butter.jpg",
      desc: "Качественное сливочное масло, идеально подходит для выпечки.",
      category: "Масло",
    },
    {
      id: 34,
      title: "Масло оливковое Ege bal 250мл",
      price: 3770,
      img: "olive_oil.jpg",
      desc: "Высококачественное оливковое масло первого отжима.",
      category: "Масло",
    },
    {
      id: 35,
      title: "Масло подсолнечное Шедевр, 1 л",
      price: 947,
      img: "sunflower_oil.jpg",
      desc: "Качественное подсолнечное масло, идеально подходит для готовки.",
      category: "Масло",
    },
    {
      id: 36,
      title: "Рис Мистраль басмати , 500 г",
      price: 1200,
      img: "rice.jpg",
      desc: "Ароматный рис басмати, идеально подходит для гарниров.",
      category: "Зерновые продукты",
    },
    {
      id: 37,
      title: "Гречка Ярмарка, 900 г",
      price: 860,
      img: "buckwheat.jpg",
      desc: "Полезная гречневая крупа, богатая клетчаткой.",
      category: "Зерновые продукты",
    },
    {
      id: 38,
      title: "Крупа Ярмарка чечевица красная платинум, 350 г",
      price: 860,
      img: "lentils.jpg",
      desc: "Красная чечевица во многих странах считается символом богатства и удачи, поэтому её обязательно подают к праздничному столу.",
      category: "Зерновые продукты",
    },
    {
      id: 39,
      title: "Колбаса Докторская, 500 г",
      price: 1200,
      img: "sausage.jpg",
      desc: "Классическая докторская колбаса, изготовленная из натуральных ингредиентов.",
      category: "Колбасы и мясные деликатесы",
    },
    {
      id: 40,
      title: "Сервелат Мясодел Мусульманский, 500 г",
      price: 2110,
      img: "smoked_sausage.jpg",
      desc: "Сосиска малютка высший сорт. Продукт мясной,изделие колбасное,вареное.",
      category: "Колбасы и мясные деликатесы",
    },
    {
      id: 68,
      title: "Сосиски Бижан малютка детскиe 470г",
      price: 550,
      img: "sausage_bijan.png",
      desc: "Обычный сахар-песок, необходимый для выпечки и напитков.",
      category: "Колбасы и мясные деликатесы",
    },
    {
      id: 41,
      title: "Яблоки Гренни Смит, 1 кг",
      price: 800,
      img: "apples.jpg",
      desc: "Сочные и хрустящие яблоки, идеально подходят для перекуса.",
      category: "Фрукты",
    },
    {
      id: 42,
      title: "Бананы, 1 кг",
      price: 1000,
      img: "bananas.jpg",
      desc: "Сладкие бананы, богатые калием и витаминами.",
      category: "Фрукты",
    },
    {
      id: 43,
      title: "Груша Конференц, 1 кг",
      price: 2300,
      img: "pears.jpg",
      desc: "Сладкие груши, богатые витаминами и минералами.",
      category: "Фрукты",
    },
    {
      id: 44,
      title: "Клубника",
      price: 1200,
      img: "strawberries.jpg",
      desc: "Сладкая клубника, идеально подходит для десертов.",
      category: "Фрукты",
    },
    {
      id: 45,
      title: "Кукуруза консервированная, Bonduelle, 340 г",
      price: 550,
      img: "corn.jpg",
      desc: "Консервированная кукуруза, готовая к употреблению.",
      category: "Консервация",
    },
    {
      id: 46,
      title: "Тунец Celeste для салатов натуральный, 185 г",
      price: 800,
      img: "tuna.jpg",
      desc: "Консервированный тунец, готовая к употреблению.",
      category: "Консервация",
    },
    {
      id: 47,
      title: "Горошек Bonduelle, 212 мл",
      price: 640,
      img: "peas.jpg",
      desc: "Консервированный горошек, готовая к употреблению.",
      category: "Консервация",
    },
    {
      id: 48,
      title: "Пицца La Bottega Маргарита, замороженная, 400 г",
      price: 2200,
      img: "pizza.jpg",
      desc: "Вкусная пицца с томатным соусом и сыром.",
      category: "Готовые блюда",
    },
    {
      id: 49,
      title: "Пельмени Бижан говяжьи, 450 г",
      price: 1500,
      img: "dumplings.jpg",
      desc: "Вкусные пельмени с мясной начинкой, готовые к варке.",
      category: "Готовые блюда",
    },
    {
      id: 50,
      title: "Пицца La Bottega с тунцом, 400 г",
      price: 2900,
      img: "fish_pizza.jpg",
      desc: "Вкусная пицца с тунцом и сыром.",
      category: "Готовые блюда",
    },
    {
      id: 51,
      title: "Наггетсы Willma куриные классические, замороженные, 300 г",
      price: 800,
      img: "chicken_nuggets.jpg",
      desc: "Хрустящие куриные наггетсы, готовые к жарке.",
      category: "Готовые блюда",
    },
    {
      id: 52,
      title: "Салат Оливье, готовый",
      price: 1200,
      img: "olivie_salas.jpg",
      desc: "Вкусный салат с курицей овощами.",
      category: "Готовые блюда",
    },
    {
      id: 53,
      title: "Картофельное пюре с котлетой, 400 г",
      price: 1400,
      img: "mashed_potatoes.jpg",
      desc: "Готовое картофельное пюре с котлетой.",
      category: "Готовые блюда",
    },
    {
      id: 54,
      title: "Пирожки с мясом",
      price: 210,
      img: "meat_pies.jpg",
      desc: "Вкусные пирожки с мясной начинкой, готовые к выпечке.",
      category: "Готовые блюда",
    },
    {
      id: 55,
      title: "Пицца La Bottega грибная, 400 г",
      price: 2400,
      img: "mashroom_pizza.jpeg",
      desc: "Вкусная пицца с грибами.",
      category: "Готовые блюда",
    },
    {
      id: 56,
      title: "Пирог клубничный, 1000 г",
      price: 5850,
      img: "strawberry_pie.jpg",
      desc: "Вкусный клубничный пирог, готовый к употреблению.",
      category: "Готовые блюда",
    },
    {
      id: 57,
      title: "Котлеты Sarqyt куриные замороженные 300г",
      price: 2700,
      img: "chicken_cutlets.jpg",
      desc: "Вкусные куриные котлеты, готовые к жарке.",
      category: "Готовые блюда",
    },
    {
      id: 58,
      title: "Пицца La Bottega 4 Сыра, замороженная, 400 г",
      price: 2500,
      img: "four_cheeses_pizza..png",
      desc: "Вкусная пицца с четырьмя видами сыра.",
      category: "Готовые блюда",
    },
    {
      id: 59,
      title: "Паста томатная Томастер, 200 г",
      price: 540,
      img: "tomato_paste.jpg",
      desc: "Натуральная томатная паста, идеальна для соусов и супов.",
      category: "Соусы и приправы",
    },
    {
      id: 60,
      title: "Кетчуп Heinz, 320 г",
      price: 800,
      img: "ketchup.jpg",
      desc: "Популярный кетчуп с насыщенным вкусом.",
      category: "Соусы и приправы",
    },
    {
      id: 61,
      title: "Горчица 3 Желания Заправская 130г",
      price: 250,
      img: "mustard.jpg",
      desc: "Острая горчица, отлично подходит к мясным блюдам.",
      category: "Соусы и приправы",
    },
    {
      id: 62,
      title: "Соль Аралтұз йодированная, 1 кг",
      price: 100,
      img: "salt.jpg",
      desc: "Обычная поваренная соль, необходимая в каждом доме.",
      category: "Специи",
    },
    {
      id: 63,
      title: "Перец черный Эстетика Вкуса молотый, 36 г",
      price: 1670,
      img: "black_pepper.jpg",
      desc: "Ароматный черный перец, добавит пикантности вашим блюдам.",
      category: "Специи",
    },
    {
      id: 64,
      title: "Сахар-песок Отличная Кухня, 500 г",
      price: 550,
      img: "sugar.jpg",
      desc: "Обычный сахар-песок, необходимый для выпечки и напитков.",
      category: "Специи",
    }
  ]);
  const [selectedCategory, setSelectedCategory] = useState("Все товары");

  // Функция для фильтрации товаров по категории
  const filterItemsByCategory = useMemo(() => {
    if (selectedCategory === "Все товары") {
      return items;
    }
    return items.filter((item) => item.category === selectedCategory);
  }, [items, selectedCategory]);

  // Функция для выбора категории
  const handleCategorySelection = useCallback((category) => {
    setSelectedCategory(category);
  }, []);

  // Функция для удаления товара из корзины
  const removeItemFromCart = useCallback((id) => {
    setOrders((prevOrders) => prevOrders.filter((order) => order.id !== id));
  }, []);

  // Функция для уменьшения и увелечения количества товара
  const updateItemQuantity = useCallback((id, operation) => {
    setOrders((prevOrders) =>
      prevOrders.map((order) =>
        order.id === id
          ? {
              ...order,
              quantity:
                operation === "increase"
                  ? order.quantity + 1
                  : Math.max(1, order.quantity - 1),
            }
          : order
      )
    );
  }, []);

  // Функция для добавления товара в корзину
  const addItemToCart = useCallback((item, quantity = 1) => {
    setOrders((prevOrders) => {
      const existingOrder = prevOrders.find((order) => order.id === item.id);
      const now = Date.now();
      if (now - lastToastTimestamp.current > 100) {
        toast.success(
          existingOrder
            ? `Количество ${item.title} увеличено`
            : ` ${item.title} добавлен(а) в корзину`,
          {
            position: "bottom-right",
            autoClose: 1700,
          }
        );
        lastToastTimestamp.current = now;
      }

      return existingOrder
        ? prevOrders.map((order) =>
            order.id === item.id
              ? { ...order, quantity: order.quantity + quantity }
              : order
          )
        : [...prevOrders, { ...item, quantity: quantity }];
    });
  }, []);

  // Функция для расчета общей стоимости
  const calculateTotalPrice = useCallback(() => {
    return orders.reduce(
      (total, order) => total + order.price * order.quantity,
      0
    );
  }, [orders]);

  // Функция для расчета общего количества товаров
  const calculateTotalItems = useCallback(() => {
    return orders.reduce((total, order) => total + order.quantity, 0);
  }, [orders]);

  return (
    <div className="wrapper">
      <Header
        orders={orders}
        onDelete={removeItemFromCart}
        onIncrease={(id) => updateItemQuantity(id, "increase")}
        onDecrease={(id) => updateItemQuantity(id, "decrease")}
        totalPrice={calculateTotalPrice()}
        totalItems={calculateTotalItems()}
      />
      <Categories chooseCategory={handleCategorySelection} />
      <Items items={filterItemsByCategory} onAdd={addItemToCart} />
      <Footer />
      <ToastContainer newestOnTop />
    </div>
  );
};

export default App;
