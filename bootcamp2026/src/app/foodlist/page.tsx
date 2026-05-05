export default function FoodListPage() {
  const foodItems = [
    { id: 1, name: "Pizza", calories: 300 },
    { id: 2, name: "Burger", calories: 500 },
    { id: 3, name: "Salad", calories: 150 },
  ];

  return (
    <div>
      <h1>Food List</h1>
      <ul>
        {foodItems.map((item) => (
          <li key={item.id}>
            {item.name} - {item.calories} calories
          </li>
        ))}
      </ul>
    </div>
  );
}
