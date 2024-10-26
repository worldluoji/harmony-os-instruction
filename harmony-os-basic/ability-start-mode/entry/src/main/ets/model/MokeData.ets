
import { CategoryId, FoodInfo } from './DataModels'

export const vegetablesFoods: Array<FoodInfo> = [
  {
    id: 0,
    letter: 'Tomato',
    name: $r('app.string.food_name_tomato'),
    image: $r('app.media.tomato'),
    categoryId: CategoryId.Vegetable,
    calories: 15,
    protein: 0.9,
    fat: 0.2,
    carbohydrates: 3.3,
    vitaminC: 14.0
  },
  {
    id: 1,
    letter: 'Cucumber',
    name: $r('app.string.food_name_cucumber'),
    image: $r('app.media.cucumber'),
    categoryId: CategoryId.Vegetable,
    calories: 16,
    protein: 0.8,
    fat: 0.2,
    carbohydrates: 2.9,
    vitaminC: 9.0
  }
]

export const fruitsFoods: Array<FoodInfo> = [
  {
    id: 0,
    letter: 'Walnut',
    name: $r('app.string.food_name_walnut'),
    image: $r('app.media.walnut'),
    categoryId: CategoryId.Nut,
    calories: 646,
    protein: 14.9,
    fat: 58.8,
    carbohydrates: 19.1,
    vitaminC: 1.0
  },
  {
    id: 1,
    letter: 'Blueberry',
    name: $r('app.string.food_name_blueberry'),
    image: $r('app.media.blueberry'),
    categoryId: CategoryId.Fruit,
    calories: 57,
    protein: 0.7,
    fat: 0.3,
    carbohydrates: 14.5,
    vitaminC: 9.7
  }

]

export const otherFoods: Array<FoodInfo> = [
  {
    id: 0,
    letter: 'IceCream',
    name: $r('app.string.food_name_ice_cream'),
    image: $r('app.media.icecream'),
    categoryId: CategoryId.Dessert,
    calories: 150,
    protein: 3.5,
    fat: 11,
    carbohydrates: 24,
    vitaminC: 0.6
  },
  {
    id: 1,
    letter: 'Crab',
    name: $r('app.string.food_name_crab'),
    image: $r('app.media.crab'),
    categoryId: CategoryId.Seafood,
    calories: 97,
    protein: 19,
    fat: 1.5,
    carbohydrates: 0,
    vitaminC: 7.6
  }
]
