import { useEffect } from 'react';
import { Button, Table } from 'antd';
import { EditOutlined, DeleteOutlined } from "@ant-design/icons"


import { useTypeSelector } from '../../../helpers/useTypeSelector';
import { useAction } from '../../../helpers/useAction';
const User = () => {
  const columns = [
    { key: 'id', title: "ID", dataIndex: 'id' },
    { key: 'lName', title: "Name", dataIndex: 'lName' },
    { key: 'email', title: "Email", dataIndex: 'email' },
    {
      key: 'Action',
      title: "Action",
      render: () => {
        return (
          <>
            <EditOutlined />
            <DeleteOutlined style={{ color: 'red', marginLeft: "10px" }} />
          </>
        )
      }
    },

  ]

  // useEffect(() => {
  //   onSnapshot(userCollecion, (snapshot: QuerySnapshot<DocumentData>) => {
  //     const fetchUser = snapshot.docs.map(doc => {
  //       return {
  //         id: doc.id,
  //         ...doc.data()
  //       }
  //     })

  //     // const firstObj = fetchUser[0] || {};
  //     // const cols = [];
  //     // for (const key in firstObj) {
  //     //   const col = {
  //     //     title: key,
  //     //     dataIndex: key,

  //     //   };

  //     //   cols.push(col)
  //     // }
  //     // setColumes(cols)

  //     setUsers(fetchUser)
  //   })
  // }, [])

  const { fetchData } = useAction();
  const { data } = useTypeSelector(state => state.fetchData);
  // console.log(err)
  // console.log(loading)

  useEffect(() => {
    fetchData()
  }, [])

  return (
    <div>
      <Button>Add User</Button>
      <h1>List User</h1>
      <Table rowKey="id" columns={columns} dataSource={data}
        scroll={{ y: 500 }}
      />
    </div>
  )
}

export default User