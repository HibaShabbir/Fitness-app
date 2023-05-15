import { Menu, Layout } from 'antd';
import { MenuOutlined ,TeamOutlined,UserOutlined, UploadOutlined, MailOutlined } from '@ant-design/icons';
import { useState } from 'react';
import { Feedback } from './Feedback';
import { Review } from './Review';
import { useNavigate } from 'react-router-dom';

export function Sidebar()
{
    const navigate = useNavigate();

    const handleViewProfile=()=>{
        navigate('/view-profile'); 
    }
    const handleFindNutionists=()=>{
        navigate('/view-nutrionists'); 
    }
    const handleHealthyRecipes=()=>{
        navigate('/view-healthy-recipes'); 
    }
    const [collapsed, setCollapsed] = useState(true);
    const toggleCollapsed = () => {
      setCollapsed(!collapsed);
    };

    return(
        <div style={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
            <div style={{ textAlign: 'center', padding: '16px' }} onClick={toggleCollapsed}>
                <MenuOutlined style={{ fontSize: '18px' }} />
            </div>
            <Layout.Sider collapsible collapsed={collapsed} onCollapse={setCollapsed} >
                <Menu mode="inline" defaultSelectedKeys={['1']}>
                    <Menu.Item key="1" icon={<UserOutlined />} onClick={handleViewProfile}>
                        My Profile
                    </Menu.Item>
                    <Menu.Item key="2" icon={<TeamOutlined />} onClick={handleFindNutionists}>
                        Find Nutritionist 
                    </Menu.Item>
                    <Menu.Item key="3" icon={<UploadOutlined />} onClick={handleHealthyRecipes}>
                        Healthy Recipes
                    </Menu.Item>
                    <Menu.Item key="2" icon={<MailOutlined />}>
                    <Feedback></Feedback>
                    </Menu.Item>
                    
                </Menu>
            </Layout.Sider>
        </div>
    );
}
