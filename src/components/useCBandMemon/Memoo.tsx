import { memo } from 'react';
import { Button } from "antd";

interface PropTypes {
  onIncrease: () => void
}

const Memoo = ({ onIncrease }: PropTypes) => {
  console.log('Render-RE')
  return (
    <div>
      <Button
        onClick={onIncrease}
      >Count</Button>
      Memoo</div>
  )
}

export default memo(Memoo)

// Tránh render componet khi mà không có dữ liệu gì thay đổi