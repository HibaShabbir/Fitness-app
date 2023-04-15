import { Menu , Button } from 'antd';
import { HomeOutlined, InfoCircleOutlined, PhoneOutlined } from '@ant-design/icons';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { AboutUs } from './AboutUs';
import { HomePage } from './HomePage.js'
import { SleepTracking } from './SleepTracking';
import { SuggestedBlogs } from './SuggestedBlogs';
import WaterTracking from './WaterTracking';
import { SuggestedMeals } from './SuggestedMeals';
import { SuggestedWorkoutPlans } from './SuggestedWorkoutPlans';

export function NavBar(props) {
  
  const { theme } = props;
 

  return (
    <Router>
      <Menu mode="horizontal" defaultSelectedKeys={['1']}>
        <Menu.Item key="1" icon={<HomeOutlined />}>
          <Link to="/">Home</Link>
        </Menu.Item>
        <Menu.Item key="2" icon={<InfoCircleOutlined />}>
          <Link to="/about">About</Link>
        </Menu.Item>
        <Menu.Item key="3" icon={<PhoneOutlined />}>
          <Link to="/contact">Contact</Link>
        </Menu.Item>
        <Menu.Item>
        <Button onClick={theme.handleClick}>
            Change Theme to {theme.isDarkMode ? "Light" : "Dark"}
          </Button>
        </Menu.Item>
      </Menu>
      <Routes>
        <Route path ="/workout-plan" element={<SuggestedWorkoutPlans/>}/>
        <Route path ="/nutrition-plan" element={<SuggestedMeals/>}/>
        <Route path ="/water-tracking" element={<WaterTracking/>}/>
        <Route path="/view-blogs" element={<SuggestedBlogs />}/>
        <Route path="/sleep-tracking" element={<SleepTracking />}>
        </Route>
        <Route path="/about"  element = {<AboutUs/>}>
        </Route>
        <Route path="/contact">
          {/* Add your Contact page component here */}
        </Route>
        <Route path="/" element = {<HomePage/>}>
        </Route>
      </Routes>
    </Router>
  );
}