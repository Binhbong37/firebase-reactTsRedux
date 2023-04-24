import { useEffect, useState } from 'react';
import { Button, Table, Modal, Input, Spin } from 'antd';
import { EditOutlined, DeleteOutlined, PlusCircleOutlined } from "@ant-design/icons";
import { Link } from 'react-router-dom';
import './addUser.css'

import { useTypeSelector } from '../../../helpers/useTypeSelector';
import { useAction } from '../../../helpers/useAction';
const User = () => {
  const [isEdit, setEditing] = useState(false);
  const [userEdit, setUserEdit] = useState<any>({});
  const [err, setErr] = useState('')

  const columns = [
    { key: 'id', title: "ID", dataIndex: 'id' },
    { key: 'lName', title: "Name", dataIndex: 'lName' },
    { key: "age", title: "Age", dataIndex: "age" },
    { key: 'email', title: "Email", dataIndex: 'email' },
    {
      key: 'Action',
      title: "Action",
      render: (record: any) => {
        return (
          <>
            <EditOutlined
              style={{ fontSize: "20px" }}
              onClick={() => handleEdit(record)} />
            <DeleteOutlined style={{ color: 'red', marginLeft: "10px", fontSize: "20px" }}
              onClick={() => handleDelete(record)}
            />
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

  const { fetchData, deleteUser, editUser } = useAction();
  const { data, loading } = useTypeSelector(state => state.fetchData);
  // console.log(err)

  useEffect(() => {

    fetchData()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const handleDelete = (user: any) => {
    Modal.confirm({
      title: 'Are you sure to delete this user?',
      okText: "Yes",
      okType: 'danger',
      onOk: () => {
        deleteUser(user.id)
      }
    })


  }

  const handleEdit = (user: any) => {
    setEditing(true)
    setUserEdit(user)
  }

  const resetEdit = (): void => {
    setEditing(false)
    setErr('');
    setUserEdit(false)
  }


  return (
    <div className='view-list'>

      <h2>List User</h2>
      {loading ? <Spin size='large' /> : (
        <>

          <Link to={'/addUser'}>
            <Button style={{ marginBottom: '10px' }}>
              <PlusCircleOutlined /> {" "}
              Add User
            </Button>
          </Link>
          <Table rowKey="id" columns={columns} dataSource={data}
            scroll={{ y: 500 }}
          />
        </>)}
      <Modal
        title="Edit User"
        open={isEdit}
        okText="Save"
        onCancel={() => {
          resetEdit()
        }}
        onOk={() => {
          if (userEdit.lName === '' || userEdit.email === "") {
            setErr('Fill is required')
            return;
          }
          editUser(userEdit)

          resetEdit()
        }}

      >
        <Input value={userEdit?.lName} onChange={(e: any) => setUserEdit((prev: any) => {
          return { ...prev, lName: e.target.value }
        })}

          style={{ marginBottom: '10px' }} />
        <span style={{ color: "red" }}>{err ? err : ''}</span>
        <Input value={userEdit?.email}
          onChange={(e: any) => {
            setUserEdit((prev: any) => {
              return { ...prev, email: e.target.value }
            })
          }}

        />

      </Modal>
    </div>
  )
}

export default User