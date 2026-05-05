type Props = {
  foodItems: FoodItem[];
};

type FoodItem = {
  id: number;
  name: string;
  calories: number;
};

export default function AppFoodList({ foodItems }: Props) {
  return (
    <ul>
      {foodItems.map((item) => (
        <li key={item.id}>
          {item.name} - {item.calories} calories
        </li>
      ))}
    </ul>
  );
}
