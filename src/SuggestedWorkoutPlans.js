import { useState } from 'react';
import { Card, Button, Divider, Select, Progress } from 'antd';

const { Option } = Select;

export function SuggestedWorkoutPlans() {
const [workoutLevel, setWorkoutLevel] = useState('beginner');
const [completedDays, setCompletedDays] = useState(0);

const handleSelectChange = (value) => {
    setWorkoutLevel(value);
};

const handleDayCompletion = () => {
setCompletedDays(completedDays + 1);
};
const resetProgress=()=>{
    setCompletedDays(0);
}
const renderWorkoutPlan = () => {
    switch (workoutLevel) {
    case 'beginner':
    return (
    <>
    <Card title="Beginner Workout Plan">
        <p>Day 1: 30 minutes of cardio and basic strength training exercises.</p>
        <p>Day 2: Rest day.</p>
        <p>Day 3: 30 minutes of cardio and more advanced strength training exercises.</p>
        <p>Day 4: Rest day.</p>
        <p>Day 5: 30 minutes of cardio and a full-body workout.</p>
        <p>Day 6: Rest day.</p>
        <p>Day 7: Light cardio or stretching.</p>
    </Card>
    </>
    );
    case 'intermediate':
    return (
    <>
    <Card title="Intermediate Workout Plan">
        <p>Day 1: 45 minutes of cardio and upper body strength training.</p>
        <p>Day 2: Rest day.</p>
        <p>Day 3: 45 minutes of cardio and lower body strength training.</p>
        <p>Day 4: Rest day.</p>
        <p>Day 5: 45 minutes of cardio and full-body strength training.</p>
        <p>Day 6: Rest day.</p>
        <p>Day 7: Light cardio or stretching.</p>
    </Card>
    </>
    );
    case 'advanced':
    return (
    <>
    <Card title="Advanced Workout Plan">
        <p>Day 1: 60 minutes of cardio and upper body strength training.</p>
        <p>Day 2: Rest day.</p>
        <p>Day 3: 60 minutes of cardio and lower body strength training.</p>
        <p>Day 4: Rest day.</p>
        <p>Day 5: 60 minutes of cardio and full-body strength training.</p>
        <p>Day 6: Rest day.</p>
        <p>Day 7: Light cardio or stretching.</p>
    </Card>
    </>
    );
    }
    };

    const progressPercentage = (completedDays / 7) * 100;

    return (
    <div style={{minWidth: '100vw', minHeight: '100vh', maxHeight:"fit-content" , maxWidth:'fit-content',display:'flex' , alignItems:'center', justifyContent:'center'}} >
        <div style={{hHeight:"fit-content" , width:'fit-content'}}>
        <h1> Suggested Workouts </h1>
        <Select defaultValue="beginner" style={{ width: 120 }} onChange={handleSelectChange}>
            <Option value="beginner">Beginner</Option>
            <Option value="intermediate">Intermediate</Option>
            <Option value="advanced">Advanced</Option>
        </Select>
        {renderWorkoutPlan()}
        <Divider />
        <p>Completed days: {completedDays} out of 7</p>
        <Progress percent={progressPercentage} />
        <Button disabled={completedDays === 7} onClick={handleDayCompletion}>
        Complete Day {completedDays + 1}
        </Button>
        <Button  onClick={resetProgress}>
            Reset
        </Button>
        </div>
        
    </div>
    );
}