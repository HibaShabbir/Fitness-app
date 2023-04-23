import { useState } from 'react';
import { Layout, Menu, Breadcrumb, Table, Popconfirm, Button } from 'antd';
import { PlusOutlined, DeleteOutlined } from '@ant-design/icons';

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


export function AdminOptionsPage() {
  const [dataSource, setDataSource] = useState(data);
  const [selectedMenuKey, setSelectedMenuKey] = useState('1');

  const handleMenuClick = (event) => {
    setSelectedMenuKey(event.key);
  };

  const handleDelete = (key) => {
    // TODO: Implement delete functionality
    setDataSource((prevDataSource) => prevDataSource.filter((item) => item.key !== key));
  };


  const handleAdd = () => {
    // TODO: Implement add functionality
  };
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
              <div>TODO: Implement user management</div>
            )}
          </div>
        </Content>
      </Layout>
    </Layout>
  );
}
