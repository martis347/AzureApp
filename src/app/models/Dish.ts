import {DishType} from "./DishType.enum";

export class Dish {
  public name: string;
  public price: Number;
  public category: string;
  public dishType: DishType ;
  public sideDishes: string[];
  public mainDishes: string[];
}
