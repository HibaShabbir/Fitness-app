import { Menu , Button } from 'antd';
import { useEffect, useState } from 'react';
import { HomeOutlined, InfoCircleOutlined, PhoneOutlined } from '@ant-design/icons';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { AboutUs } from './AboutUs';
import { HomePage } from './HomePage.js'
import { SleepTracking } from './SleepTracking';
import { SuggestedBlogs } from './SuggestedBlogs';
import WaterTracking from './WaterTracking';
import { SuggestedMeals } from './SuggestedMeals';
import { SuggestedWorkoutPlans } from './SuggestedWorkoutPlans';
import { AdminOptionsPage } from './AdminOptionsPage';
import { Login } from './Login.js';
import Videos from './Videos';
import { SignUp } from './SignUp';

export function NavBar(props) {
  const { theme } = props;
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isAdmin, setIsAdmin] = useState(false);

  useEffect(() => {
    // Check localStorage for auth state on page load
    const authState = localStorage.getItem('isLoggedIn');
    const userType = localStorage.getItem('isAdmin');
    setIsLoggedIn(authState === 'true');
    setIsAdmin(userType==='true');
  }, []);

  const handleAdmin = () => {
    localStorage.setItem('isLoggedIn', 'true');
    localStorage.setItem('isAdmin', 'true');
    setIsLoggedIn(true);
    setIsAdmin(true);
  };
  const handleLogin = () => {
    // Update localStorage and state when user logs in
    localStorage.setItem('isLoggedIn', 'true');
    setIsLoggedIn(true);
  };

  const handleLogout = () => {
    // Update localStorage and state when user logs out
    localStorage.setItem('isLoggedIn', 'false');
    setIsLoggedIn(false);
    localStorage.setItem('isAdmin', 'false');
    setIsAdmin(false);
  };

  return (
    <Router>
      
        {isLoggedIn && isAdmin &&(
           <Routes>
            <Route path ="/" element={<AdminOptionsPage logout={handleLogout}/>}/>
            </Routes>)}
        {isLoggedIn && (
        <>
        
          <Menu mode="horizontal" defaultSelectedKeys={['1']} style={{display:"flex"}}>
            <Menu.Item key="1">
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

          <Menu.Item style={{ marginLeft: "auto" }}>
          <Button onClick={handleLogout}>
              Logout
            </Button>
          </Menu.Item>
        </Menu>
        <Routes>     
          <Route path ="/workout-plan" element={<SuggestedWorkoutPlans/>}/>
          <Route path ="/nutrition-plan" element={<SuggestedMeals/>}/>
          <Route path ="/water-tracking" element={<WaterTracking/>}/>
          <Route path="/view-blogs" element={<SuggestedBlogs />}/>
          <Route path="/sleep-tracking" element={<SleepTracking />}/>
          <Route path="/watch-videos" element={<Videos />}/>
          <Route path="/about"  element = {<AboutUs/>}>
          </Route>
          <Route path="/contact">
            {/* Add your Contact page component here */}
          </Route>
          <Route path="/" element = {<HomePage/>}>
          </Route>
        </Routes></>)}



      {!isLoggedIn && (
         <Routes>
          <Route path ="/" element={<Login onLogin={{handleLogin , handleAdmin}}></Login>}/>
          <Route path="/signup" element={<SignUp/>}/>
         </Routes>
            

        )}

    </Router>
  );
}