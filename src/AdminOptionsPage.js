import { Layout, Menu, Breadcrumb, Table, Popconfirm, Button } from 'antd';
import { PlusOutlined, DeleteOutlined } from '@ant-design/icons';
import { useState, useEffect } from 'react';
import axios from 'axios';

const { Content } = Layout;

const data = [
  {
    key: '1',
    name: 'Beginner Workout Plan',
    description: 'A workout plan for beginners',
    level: 'Beginner',
  },
  {
    key: '2',
    name: 'Intermediate Workout Plan',
    description: 'A workout plan for intermediate users',
    level: 'Intermediate',
  },
  {
    key: '3',
    name: 'Advanced Workout Plan',
    description: 'A workout plan for advanced users',
    level: 'Advanced',
  },
];


export function AdminOptionsPage(props) {

  const { logout } = props;
  const [dataSource, setDataSource] = useState(data);
  const [userDataSource, setUserDataSource] = useState([]);
  const [selectedMenuKey, setSelectedMenuKey] = useState('1');
  
  const fetchUsers = async () => {
    try {
      const response = await axios.get('http://localhost:5000/api/users');
      const data = response.data;
      console.log("data"+data);
      setUserDataSource(data);
    } catch (error) {
      console.error('Error fetching users:', error);
    }
  };
  
  useEffect(() => {
    if (selectedMenuKey === '2') {
      fetchUsers();
    }
  }, [selectedMenuKey]);
  
  const handleLogout=()=>
  {
    logout();
  }
  const handleMenuClick = (event) => {
    setSelectedMenuKey(event.key);
  };

  const handleDelete = (key) => {
    // TODO: Implement delete functionality
    setDataSource((prevDataSource) => prevDataSource.filter((item) => item.key !== key));
  };

  const handleDeleteUser = async (email) => {
    try {
      // Encode email parameter
      const encodedEmail = encodeURIComponent(email);
      
      // Delete user from backend API
      await fetch(`http://localhost:5000/api/users/${encodedEmail}`, {
        method: 'DELETE',
      });
  
      // Remove user from userDataSource state
      setUserDataSource((prevDataSource) =>
        prevDataSource.filter((item) => item.email !== email)
      );
    } catch (error) {
      console.error(`Error deleting user with email ${email}:`, error);
    }
  };
  

  const handleAdd = () => {
    // TODO: Implement add functionality
  };

  const userColumns = [
    {
      title: 'Email',
      dataIndex: 'email',
      key: 'email',
    },
    {
      title: 'Age',
      dataIndex: 'age',
      key: 'age',
    },
    {
      title: 'Gender',
      dataIndex: 'gender',
      key: 'gender',
    },
    {
      title: 'Height',
      dataIndex: 'height',
      key: 'height',
    },
    {
      title: 'Weight',
      dataIndex: 'weight',
      key: 'weight',
    },
    {
      title: 'Disease',
      dataIndex: 'disease',
      key: 'disease',
    },
    {
      title: 'Food',
      dataIndex: 'food',
      key: 'food',
    },
    {
      title: 'Role',
      dataIndex: 'role',
      key: 'role',
    },
    {
      title: 'Actions',
      key: 'actions',
      render: (text, record) => (
        <Popconfirm
          title="Are you sure you want to delete this user?"
          onConfirm={() => handleDeleteUser(record.email)}
          okText="Yes"
          cancelText="No"
        >
          <Button type="danger" icon={<DeleteOutlined />} />
        </Popconfirm>
      ),
    },
  ];
  
  const columns = [
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: 'Description',
      dataIndex: 'description',
      key: 'description',
    },
    {
      title: 'Level',
      dataIndex: 'level',
      key: 'level',
    },
    {
      title: 'Actions',
      key: 'actions',
      render: (text, record) => (
        <Popconfirm
          title="Are you sure you want to delete this workout plan?"
          onConfirm={() => handleDelete(record.key)}
          okText="Yes"
          cancelText="No"
        >
          <Button type="danger" icon={<DeleteOutlined />} />
        </Popconfirm>
      ),
    },
  ];
  
  return (
    <Layout style={{minWidth: '100vw', minHeight: '100vh', maxHeight:"fit-content" , maxWidth:'fit-content'}}>
      <Layout className="site-layout">
        <Breadcrumb style={{ margin: '16px 0' }}>
          <Breadcrumb.Item>Admin</Breadcrumb.Item>
          <Breadcrumb.Item>{selectedMenuKey}</Breadcrumb.Item>
        </Breadcrumb>
        <div>
          <Button onClick={handleLogout}>
            Logout
          </Button >
        </div>
        <Content style={{ padding: '0 50px' }}>
          <div className="site-layout-background" style={{ padding: 24, minHeight: 360 }}>
            <Menu
              mode="inline"
              selectedKeys={[selectedMenuKey]}
              onClick={handleMenuClick}
            >
              <Menu.Item key="1">Workout Plans</Menu.Item>
              <Menu.Item key="2">Users</Menu.Item>
            </Menu>
            {selectedMenuKey === '1' && (
              <>
                <div style={{ marginBottom: 16 }}>
                  <Button type="primary" icon={<PlusOutlined />} onClick={handleAdd}>
                    Add Workout Plan
                  </Button>
                </div>
                <Table dataSource={dataSource} columns={columns} />
              </>
            )}
            {selectedMenuKey === '2' && (
              <>
              <div style={{ marginBottom: 16 }}>
              
              </div>
              <Table dataSource={userDataSource} columns={userColumns} /></>
              )}
          </div>
        </Content>
      </Layout>
    </Layout>
  );
}
