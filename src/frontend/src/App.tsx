import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Meal } from './types';

const App: React.FC = () => {
  const [meals, setMeals] = useState<Meal[]>([]);
  const [name, setName] = useState<string>('');
  const [calories, setCalories] = useState<number>(0);

  useEffect(() => {
    axios.get<Meal[]>('http://127.0.0.1:8000/api/meals/')
      .then(res => setMeals(res.data))
      .catch(err => console.error(err));
  }, []);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    axios.post<Meal>('http://127.0.0.1:8000/api/meals/', {
      name,
      calories,
    })
    .then(res => {
      setMeals([res.data, ...meals]);
      setName('');
      setCalories(0);
    })
    .catch(err => console.error(err));
  };

  return (
    <div style={{ maxWidth: '500px', margin: '0 auto' }}>
      <h1>食事記録</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="食事名"
          value={name}
          onChange={e => setName(e.target.value)}
          required
        />
        <input
          type="number"
          placeholder="カロリー"
          value={calories}
          onChange={e => setCalories(Number(e.target.value))}
          required
        />
        <button type="submit">追加</button>
      </form>

      <ul>
        {meals.map((meal) => (
          <li key={meal.id}>
            {meal.name} - {meal.calories} kcal
          </li>
        ))}
      </ul>
    </div>
  );
};

export default App;
