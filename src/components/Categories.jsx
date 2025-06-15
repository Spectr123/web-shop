import React, { Component } from "react";
import clsx from "clsx";

export class Categories extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeCategory: null,
      isExpanded: false,
      categories: [
        { key: 0, name: "Все товары" },
        { key: 1, name: "Выпечка" },
        { key: 2, name: "Молочные продукты" },
        { key: 3, name: "Закуски" },
        { key: 4, name: "Яйца и мясо" },
        { key: 5, name: "Овощи" },
        { key: 6, name: "Макаронные изделия" },
        { key: 7, name: "Напитки" },
        { key: 8, name: "Фрукты" },
        { key: 10, name: "Консервация" },
        { key: 11, name: "Масло" },
        { key: 12, name: "Сладости" },
        { key: 13, name: "Специи" },
        { key: 14, name: "Готовые блюда" },
        { key: 15, name: "Зерновые продукты" },
        { key: 16, name: "Соусы и приправы" },
        { key: 17, name: "Колбасы и мясные деликатесы" },
      ],
    };
  }

  componentDidMount() {
    window.addEventListener("resize", this.handleResize);
    this.handleResize();
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.handleResize);
  }

  handleResize = () => {
    if (window.innerWidth > 768) {
      this.setState({ isExpanded: false });
    }
  };

  toggleCategories = () => {
    this.setState((prevState) => ({
      isExpanded: !prevState.isExpanded,
    }));
  };

  render() {
    return (
      <div className="categories">
        {this.state.categories.map((el) => (
          <div
            key={el.key}
            className={clsx("category", {
              active: this.state.activeCategory === el.name,
              show: this.state.isExpanded,
            })}
            onClick={() => {
              this.setState({ activeCategory: el.name });
              this.props.chooseCategory(el.name);
            }}
          >
            <span>{el.name}</span>
          </div>
        ))}
        <button
          className={clsx("show-more-btn", {
            expanded: this.state.isExpanded,
          })}
          onClick={this.toggleCategories}
        >
          {this.state.isExpanded ? "Скрыть" : "Показать все"}
        </button>
      </div>
    );
  }
}

export default Categories;
