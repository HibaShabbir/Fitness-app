import React, { useState, useEffect } from 'react';
import { List, Avatar, Input, Select } from 'antd';
import axios from 'axios';
import './Nutritionist.css'; // Import custom CSS styles

const { Search } = Input;
const { Option } = Select;

const Nutritionist = () => {
  const [nutritionists, setNutritionists] = useState([]);
  const [sortOrder, setSortOrder] = useState(null);
  const [searchValue, setSearchValue] = useState('');
  const [filterValue, setFilterValue] = useState(null);

  useEffect(() => {
    fetchNutritionists();
  }, []);

  const fetchNutritionists = () => {
    axios
      .get('/nutritionists')
      .then((response) => {
        setNutritionists(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const sortNutritionists = (order) => {
    const sortedNutritionists = [...nutritionists].sort((a, b) => {
      if (order === 'asc') {
        return a.rating - b.rating;
      } else {
        return b.rating - a.rating;
      }
    });
    setNutritionists(sortedNutritionists);
    setSortOrder(order);
  };

  const searchNutritionists = (value) => {
    setSearchValue(value);
  };

  const filterNutritionists = (value) => {
    setFilterValue(value);
  };

  const renderItem = (nutritionist) => (
    <List.Item>
      <List.Item.Meta
        avatar={<Avatar src="https://picsum.photos/50/50" alt={nutritionist.name} />}
        title={<a href={`/${nutritionist.name}`}>{nutritionist.name}</a>}
        description={`Rating: ${nutritionist.rating}, Specialties: ${nutritionist.specialties.join(', ')}`}
      />
    </List.Item>
  );

  const filteredNutritionists = nutritionists.filter((nutritionist) => {
    const nameMatch = nutritionist.name.toLowerCase().includes(searchValue.toLowerCase());
    const specialtyMatch = nutritionist.specialties.join(', ').toLowerCase().includes(searchValue.toLowerCase());
    const filterMatch = filterValue === 'all' || nutritionist.specialties.includes(filterValue);
    return (nameMatch || specialtyMatch) && filterMatch;
  });

  return (
    <div className="nutritionist-list">
      <div className="nutritionist-list__header">
        <h1 className="nutritionist-list__title">BEST NUTRITIONISTS</h1>
      </div>

      <label className="nut">Search by Name or Speciality :</label>
      <Search
        className="nutritionist-list__search"
        allowClear
        value={searchValue}
        onChange={(e) => searchNutritionists(e.target.value)}
        style={{ width: 300, color: 'black' }}
        type="text"
      />

      <label className="nut">Sort by rating :</label>
      <Select
        className="nutritionist-list__sort"
        placeholder="Sort by rating"
        size="large"
        onChange={(value) => sortNutritionists(value)}
      >
        <Option value="asc">Lowest to highest</Option>
        <Option value="desc">Highest to lowest</Option>
      </Select>

      <label className="nut">Filter by specialty :</label>
      <Select
        className="nutritionist-list__filter"
        defaultValue="all"
        style={{width: 200 }}
        onChange={filterNutritionists}
        >
        <Option value="all">All</Option>
        <Option value="Weight Loss">Weight Loss</Option>
        <Option value="Sports Nutrition">Sports Nutrition</Option>
        <Option value="Diabetes Management">Diabetes Management</Option>
        <Option value="Healthy Eating">Healthy Eating</Option>
        <Option value="Digestive Health">Digestive Health</Option>
        <Option value="Meal Planning">Meal Planning</Option>
        </Select>
          <br /><br /><br /><br /><br /><br /><br /><br />

          <List
            itemLayout="horizontal"
            dataSource={filteredNutritionists}
            renderItem={renderItem}
          />
          </div>
);
};

export default Nutritionist;
