import { memo } from 'react'

const Memoo = () => {
  return (
    <div>Memoo</div>
  )
}


// Tránh render componet khi mà không có dữ liệu gì thay đổi
export default memo(Memoo)