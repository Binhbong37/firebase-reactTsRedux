import { useState, useEffect } from 'react';
import { userCollecion } from '../../../firebase/controller';
import { DocumentData, QuerySnapshot, onSnapshot } from 'firebase/firestore';
import { NewUsersType } from '../../../type/users.type';
import { Button, Table } from 'antd';
import { EditOutlined, DeleteOutlined } from "@ant-design/icons"



const User = () => {
  const columns = [
    { title: "ID", dataIndex: 'id' },
    { title: "Name", dataIndex: 'lName' },
    { title: "Email", dataIndex: 'email' },
    {
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

  const [users, setUsers] = useState<NewUsersType[]>([])

  useEffect(() => {
    onSnapshot(userCollecion, (snapshot: QuerySnapshot<DocumentData>) => {
      const fetchUser = snapshot.docs.map(doc => {
        return {
          id: doc.id,
          ...doc.data()
        }
      })

      // const firstObj = fetchUser[0] || {};
      // const cols = [];
      // for (const key in firstObj) {
      //   const col = {
      //     title: key,
      //     dataIndex: key,

      //   };

      //   cols.push(col)
      // }
      // setColumes(cols)

      setUsers(fetchUser)
    })
  }, [])


  return (
    <div>
      <Button>Add User</Button>
      <h1>List User</h1>
      <Table columns={columns} dataSource={users}
        scroll={{ y: 500 }}
      />
    </div>
  )
}

export default User