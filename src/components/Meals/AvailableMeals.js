import Card from '../UI/Card';
import MealItem from './MealItem/MealItem';
import classes from './AvailableMeals.module.css';
import jsbook from '../../assets/jsbook.jpeg';
import spiderman from '../../assets/spiderman.jpeg';
import amazingspiderman from '../../assets/amazingspider.jpeg';
import tmnt from '../../assets/tmnt.jpeg';
const DUMMY_bookS = [
  {
    id: 'm1',
    name: 'javascript',
    description: 'from zero to mastery',
    price: 22.99,
    detail: [ ' some more lorem ipsum',
    '  csome more lorem ipsusome more ',
' some more lorem ipsum',
' some more lorem ipsum',
'some more lorem ipsum'
],image:jsbook
  },
  {
    id: 'm2',
    name: 'spider man',
    description: 'marvel out coming',
    price: 16.5,
    detail: [ ' some more lorem ipsum',
    '  csome more lorem ipsusome more ',
' some more lorem ipsum',
' some more lorem ipsum',
'some more lorem ipsum'
],image:spiderman
  },
  {
    id: 'm3',
    name: 'the amazing spiderman',
    description: 'marvel',
    price: 12.99,  
    detail: [ ' some more lorem ipsum',
    '  csome more lorem ipsusome more ',
' some more lorem ipsum',
' some more lorem ipsum',
'some more lorem ipsum'
],image:amazingspiderman
  },
  {
    id: 'm4',
    name: 'tmnt',
    description: 'comics',
    price: 18.99,
    detail: [ ' some more lorem ipsum',
    '  csome more lorem ipsusome more ',
' some more lorem ipsum',
' some more lorem ipsum',
'some more lorem ipsum'
],image:tmnt
  },
  {
    id: 'm5',
    name: 'lorem ipsum',
    description: 'some more lorem ipsum',
    price: 18.99,
    detail: [ 'some more lorem ipsum ',
    '  some more lorem ipsum',
' asome more lorem ipsum',
' some more lorem ipsum',
'some more lorem ipsum'
]
  },
  {
    id: 'm6',
    name: 'lorem ipsum',
    description: 'some more lorem ipsum',
    price: 18.99,
    detail: [ ' some more lorem ipsum',
    '  some more lorem ipsum',
' some more lorem ipsum',
' some more lorem ipsum',
'declaretive and reusable code'
]
  },

];

const AvailableMeals = (props) => {
  const booksList = DUMMY_bookS.map((meal) => (
    <MealItem
      key={meal.id}
      id={meal.id}
      name={meal.name}
      description={meal.description}
      price={meal.price}
      onClick={ () => {
        props.onShowCart(meal)
       }}
       detail={meal.detail}
    />
  ));

  return (
    <section className={classes.meals}>
       
       {booksList} 
      
    </section>
  );
};

export default AvailableMeals;