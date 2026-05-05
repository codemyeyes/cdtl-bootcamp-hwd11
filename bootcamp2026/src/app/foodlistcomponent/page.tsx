import AppFoodList from "@/components/app-food-list";

export default function FoodListComponentPage() {
  const foodItems = [
    { id: 1, name: "Pizza", calories: 300 },
    { id: 2, name: "Burger", calories: 500 },
    { id: 3, name: "Salad", calories: 150 },
    { id: 4, name: "Pasta", calories: 400 },
    { id: 5, name: "Ice Cream", calories: 200 },
    { id: 6, name: "Sushi", calories: 250 },
    { id: 7, name: "Steak", calories: 600 },
    { id: 8, name: "Fries", calories: 350 },
    { id: 9, name: "Tacos", calories: 450 },
    { id: 10, name: "Smoothie", calories: 180 },
  ];

  return (
    <div>
      <h1>Food List</h1>
      <AppFoodList foodItems={foodItems} />
    </div>
  );
}
