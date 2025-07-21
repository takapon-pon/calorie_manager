import React, { useEffect, useState } from 'react';
import api from '../utils/axios';
import { Meal } from '../types';
import { useNavigate } from 'react-router-dom';

const MealPage: React.FC = () => {
  const [meals, setMeals] = useState<Meal[]>([]);
  const [name, setName] = useState<string>('');
  const [calories, setCalories] = useState<number>(0);
  const navigate = useNavigate();
  const [username, setUsername] = useState<string>('');


    useEffect(() => {
    api.get('/api/user/')
        .then(res => setUsername(res.data.username))
        .catch(err => console.error(err));
    }, []);

  useEffect(() => {
    api.get<Meal[]>('/api/meals/')
      .then(res => setMeals(res.data))
      .catch(err => console.error(err));
  }, []);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    api.post<Meal>('/api/meals/', {
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

  const handleLogout = () => {
    localStorage.removeItem('access');
    localStorage.removeItem('refresh');
    navigate('/login');
  };

  return (
    <div style={{ maxWidth: '500px', margin: '0 auto' }}>
      <h1>食事記録</h1>
      <button onClick={handleLogout} style={{ float: 'right' }}>
        ログアウト
      </button>

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

export default MealPage;