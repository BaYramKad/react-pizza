import React from 'react';

const Categories = () => {
  const [idLi, setActiveId] = React.useState(0);
  const categories = ['Все', 'Мясные', 'Вегетарианская', 'Гриль', 'Острые', 'Закрытые'];

  return (
    <div className="categories">
      <ul>
        {categories.map((item, i) => {
          return (
            <li key={i} onClick={() => setActiveId(i)} className={idLi === i ? 'active' : ''}>
              {item}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Categories;
