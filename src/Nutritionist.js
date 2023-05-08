import React, { useState } from 'react';
import { List, Avatar, Button, Input, Select } from 'antd';
import './Nutritionist.css'; // Import custom CSS styles

const { Search } = Input;
const { Option } = Select;

const nutritionistsData = [
  { name: 'John Doe', rating: 4.5, specialties: ['Weight Loss', 'Sports Nutrition'] },
  { name: 'Jane Smith', rating: 4.8, specialties: ['Diabetes Management', 'Healthy Eating'] },
  { name: 'Mark Johnson', rating: 4.2, specialties: ['Digestive Health', 'Meal Planning'] },
];

const Nutritionist = () => {
  const [nutritionists, setNutritionists] = useState(nutritionistsData);
  const [sortOrder, setSortOrder] = useState(null);
  const [searchValue, setSearchValue] = useState('');
  const [filterValue, setFilterValue] = useState(null);

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
    const filteredNutritionists = nutritionistsData.filter((nutritionist) => {
      return nutritionist.name.toLowerCase().includes(value.toLowerCase()) || nutritionist.specialties.join(', ').toLowerCase().includes(value.toLowerCase());
    });
    setNutritionists(filteredNutritionists);
    setSearchValue(value);
  };

  const filterNutritionists = (value) => {
    if (value === 'all') {
      setNutritionists(nutritionistsData);
      setFilterValue(null);
    } else {
      const filteredNutritionists = nutritionistsData.filter((nutritionist) => {
        return nutritionist.rating >= Number(value);
      });
      setNutritionists(filteredNutritionists);
      setFilterValue(value);
    }
  };

  const renderItem = (nutritionist) => (
    <List.Item
      key={nutritionist.name}
      actions={[
        <Button type="primary" key="message">
          Message
        </Button>
      ]}
      extra={<img src="https://picsum.photos/100/100" alt={nutritionist.name} />}
    >
      <List.Item.Meta
        avatar={<Avatar src="https://picsum.photos/50/50" alt={nutritionist.name} />}
        title={<a href={`/${nutritionist.name}`}>{nutritionist.name}</a>}
        description={`Rating: ${nutritionist.rating}, Specialties: ${nutritionist.specialties.join(', ')}`}
      />
    </List.Item>
  );

  return (
    <div className="nutritionist-list">
      <div className="nutritionist-list__header">
        <h1 className="nutritionist-list__title">BEST NUTRITIONISTS</h1>
       
        </div>
          <label className='nut'>Search by Name or Speciality :</label>
          <Search className="nutritionist-list__search"
           placeholder="Search by name or specialty"
          allowClear
          value={searchValue}
          onChange={(e) => setSearchValue(e.target.value)}
          style={{ width: 300}}
          />

        <label className='nut'>Sort by rating :</label>
        <Select
          className="nutritionist-list__sort"
          placeholder="Sort by rating"
          size="large"
          onChange={(value) => sortNutritionists(value)}
          >
          <Option value="asc">Lowest to highest</Option>
          <Option value="desc">Highest to lowest</Option>
          </Select>
       
          <label className='nut'>Filter by specialty :</label>
          <Select className="nutritionist-list__filter" defaultValue="all" style={{ width: 200 }} onChange={filterNutritionists}>
          <Option value="all">All</Option>
          <Option value="Weight Loss">Weight Loss</Option>
          <Option value="Sports Nutrition">Sports Nutrition</Option>
          <Option value="Diabetes Management">Diabetes Management</Option>
          <Option value="Healthy Eating">Healthy Eating</Option>
          <Option value="Digestive Health">Digestive Health</Option>
          <Option value="Meal Planning">Meal Planning</Option>
          </Select>
          <br></br><br></br><br></br><br></br><br></br><br></br><br></br>
          <List
               itemLayout="horizontal"
               dataSource={nutritionists}
               renderItem={renderItem}
             />
          
          </div>
          );
          }
          
export default Nutritionist;