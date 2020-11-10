import React from 'react'
import { Categories, Sortpopup, PizzaBlock } from '../components/';

const Home = ({ items }) => {
    return (
        <div className="container">
          <div className="content__top">
            <Categories
              onClick={(items) => console.log(items)}
              items={['Мясные', 'Вегетарианская', 'Гриль', 'Острые', 'Закрытые']}
            />
            <Sortpopup items={['по популярности', 'цене', 'алфавите']} />
          </div>
          <h2 className="content__title">Все пиццы</h2>
          <div className="content__items">
 
            {
              items.map( obj =>
              <PizzaBlock key={obj.id} {...obj}/>)
            }
          </div>
          </div>
    )
}

export default Home