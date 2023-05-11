import React, { useState } from "react";
import { Table, Button } from "antd";
import './DietPlan.css'

const weeklyDietPlans = {
  cardiac: [
    ["Monday", "Oatmeal", "Greek Yogurt", "Grilled Chicken Salad", "Apple", "Grilled Fish"],
    ["Tuesday", "Egg White Omelette", "Fruit Smoothie", "Grilled Fish", "Almonds", "Quinoa Salad"],
    ["Wednesday", "Whole Wheat Toast", "Cottage Cheese", "Chicken and Vegetable Stir Fry", "Orange", "Baked Chicken"],
    ["Thursday", "Greek Yogurt", "Fruit Salad", "Grilled Salmon", "Carrots", "Grilled Chicken Breast"],
    ["Friday", "Omelette with Vegetables", "Green Smoothie", "Grilled Chicken Salad", "Celery Sticks", "Grilled Fish"],
    ["Saturday", "Whole Wheat Pancakes", "Cottage Cheese", "Tuna Salad", "Grapefruit", "Baked Chicken"],
    ["Sunday", "Egg White Omelette", "Greek Yogurt", "Grilled Chicken Breast", "Apple", "Grilled Fish"],
  ],
  gastritis: [
    ["Monday", "Oatmeal", "Banana", "Rice with Boiled Chicken", "Papaya", "Grilled Fish"],
    ["Tuesday", "Egg White Omelette", "Cucumber Slices", "Lentil Soup", "Almonds", "Boiled Vegetables"],
    ["Wednesday", "Whole Wheat Toast", "Cottage Cheese", "Grilled Chicken Breast", "Orange", "Baked Fish"],
    ["Thursday", "Greek Yogurt", "Fruit Salad", "Grilled Fish", "Carrots", "Steamed Vegetables"],
    ["Friday", "Omelette with Vegetables", "Green Smoothie", "Tuna Salad", "Celery Sticks", "Grilled Chicken Breast"],
    ["Saturday", "Whole Wheat Pancakes", "Cottage Cheese", "Chicken and Vegetable Stir Fry", "Grapefruit", "Baked Fish"],
    ["Sunday", "Egg White Omelette", "Greek Yogurt", "Grilled Fish", "Apple", "Grilled Chicken Breast"],
  ],
  weightLoss: [
    ["Monday", "Oatmeal", "Banana", "Grilled Chicken Salad", "Carrots", "Grilled Fish"],
    ["Tuesday", "Egg White Omelette", "Green Smoothie", "Grilled Fish", "Almonds", "Quinoa Salad"],
    ["Wednesday", "Whole Wheat Toast", "Cottage Cheese", "Chicken and Vegetable Stir Fry", "Grapefruit", "Baked Chicken"],
    ["Thursday", "Greek Yogurt", "Fruit Salad", "Grilled Chicken Breast", "Celery Sticks", "Grilled Fish"],
    ["Friday", "Omelette with Vegetables", "Apple", "Grilled Chicken Salad", "Orange", "Grilled Fish"],
    ["Saturday", "Whole Wheat Pancakes", "Cottage Cheese", "Tuna Salad", "Carrots", "Baked Chicken"],
    ["Sunday", "Egg White Omette", "Greek Yogurt", "Grilled Fish", "Apple", "Grilled Chicken Breast"],
  ],
  diabetes: [
    ["Monday", "Oatmeal with Nuts", "Green Smoothie", "Lentil Soup", "Almonds", "Grilled Fish"],
    ["Tuesday", "Egg White Omelette", "Fruit Salad", "Grilled Chicken Breast", "Celery Sticks", "Steamed Vegetables"],
    ["Wednesday", "Whole Wheat Toast", "Cottage Cheese", "Grilled Fish", "Orange", "Baked Chicken"],
    ["Thursday", "Greek Yogurt", "Carrots", "Tuna Salad", "Papaya", "Grilled Chicken Breast"],
    ["Friday", "Omelette with Vegetables", "Apple", "Grilled Fish", "Carrots", "Boiled Vegetables"],
    ["Saturday", "Whole Wheat Pancakes", "Cottage Cheese", "Grilled Chicken Salad", "Grapefruit", "Baked Fish"],
    ["Sunday", "Egg White Omelette", "Greek Yogurt", "Brown Rice with Boiled Chicken", "Apple", "Grilled Fish"],
  ],
  muscleGain: [
    ["Monday", "Oatmeal with Nuts", "Greek Yogurt", "Grilled Chicken Breast", "Almonds", "Baked Fish"],
    ["Tuesday", "Egg White Omelette", "Fruit Smoothie", "Grilled Fish", "Celery Sticks", "Quinoa Salad"],
    ["Wednesday", "Whole Wheat Toast", "Cottage Cheese", "Grilled Chicken Breast", "Grapefruit", "Baked Chicken"],
    ["Thursday", "Greek Yogurt", "Carrots", "Tuna Salad", "Papaya", "Grilled Fish"],
    ["Friday", "Omelette with Vegetables", "Apple", "Grilled Chicken Salad", "Orange", "Steak"],
    ["Saturday", "Whole Wheat Pancakes", "Cottage Cheese", "Grilled Chicken Breast", "Almonds", "Baked Fish"],
    ["Sunday", "Egg White Omelette", "Greek Yogurt", "Grilled Fish", "Carrots", "Steak"],
  ],
};

function DietPlan() {
  const [dietPlan, setDietPlan] = useState("cardiac");

  const columns = [    {      title: "",      dataIndex: 0,      key: 0,    },    {      title: "Breakfast",      dataIndex: 1,      key: 1,    },    {      title: "Snack 1",      dataIndex: 2,      key: 2,    },    {      title: "Lunch",      dataIndex: 3,      key: 3,    },    {      title: "Snack 2",      dataIndex: 4,      key: 4,    },    {      title: "Dinner",      dataIndex: 5,      key: 5,    },  ];

  const data = weeklyDietPlans[dietPlan];

  const handlePlanChange = (plan) => {
    setDietPlan(plan);
  };

  return (
    <>
      <div>
      <div className="logo" >
        <h2>DIET PLAN</h2>
        </div><br></br>
        <Button onClick={() => handlePlanChange("cardiac")}>Cardiac </Button>
        <Button onClick={() => handlePlanChange("gastritis")}>Gastritis </Button>
        <Button onClick={() => handlePlanChange("weightLoss")}>Weight Loss</Button>
        <Button onClick={() => handlePlanChange("diabetes")}>Diabetes </Button>
        <Button onClick={() => handlePlanChange("muscleGain")}>Muscle Gain</Button>
      </div><br></br>
      <Table columns={columns} dataSource={data} pagination={false} />
   </>
   );
  }
  
  export default DietPlan;
