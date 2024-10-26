
export enum CategoryId {
  Fruit = 0,
  Vegetable,
  Nut,
  Seafood,
  Dessert
}

export class FoodInfo {
  id: number = 0
  letter: string = ''
  name: string | Resource = ''
  image: string | Resource = ''
  categoryId?: CategoryId
  calories: number = 0
  protein: number = 0
  fat: number = 0
  carbohydrates: number = 0
  vitaminC: number = 0
}