import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Items from "./components/Items";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [
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
          title: "Молоко Родина 3,2%",
          price: 470,
          img: "milk.jpg",
          desc: "Пастеризованное молоко высшего качества.",
          category: "Молочные продукты",
        },
        {
          id: 3,
          title: "Орехи кедровые очищенные",
          price: 4704,
          img: "nuts.jpg",
          desc: "Кедровые орехи, богатые витаминами и минералами.",
          category: "Закуски",
        },
        {
          id: 4,
          title: "Яйцо Казгер-Құс, 10 шт, Казахстан",
          price: 850,
          img: "eggs.jpg",
          desc: "Свежие куриные яйца от местных фермеров, премиум качества.",
          category: "Яйца и мясо",
        },
        {
          id: 5,
          title: "Огурцы Миринда, вес, Казахстан",
          price: 422,
          img: "cucumbers.jpeg",
          desc: "Хрустящие огурцы, выращенные без использования химикатов.",
          category: "Овощи",
        },
        {
          id: 6,
          title: "Паста Raguso Linguine, 500 г ",
          price: 2500,
          img: "pasta.jpg",
          desc: "Итальянская паста из твердых сортов пшеницы.",
          category: "Макаронные изделия",
        },
        {
          id: 7,
          title: "Кофе в зернах Lavazza Qualita Oro",
          price: 5000,
          img: "coffee.jpg",
          desc: "Ароматный кофе из лучших сортов.",
          category: "Напитки",
        },
        {
          id: 8,
          title: "Чай",
          price: 1055,
          img: "tea.jpg",
          desc: "Чай из высококачественных листьев, собранных вручную.",
          category: "Напитки",
        },
        {
          id: 9,
          title: "Шоколад",
          price: 900,
          img: "chocolate.jpeg",
          desc: "Темный шоколад с высоким содержанием какао.",
          category: "Сладости",
        },
      ],
    };
  }

  render() {
    return (
      <div className="wrapper">
        <Header />
        <Items items={this.state.items} />
        <Footer />
      </div>
    );
  }
}

export default App;
