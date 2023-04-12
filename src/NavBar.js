import { Menu } from 'antd';

export function NavBar (){    
    return (
    <>
     <Menu mode="horizontal" defaultSelectedKeys={['1']}>
      
        <Menu.Item key="1">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Home</Menu.Item>
        <Menu.Item key="2">About</Menu.Item>
        <Menu.Item key="3">Contact</Menu.Item>
      
    </Menu>
    
    </>
   

    );
}
