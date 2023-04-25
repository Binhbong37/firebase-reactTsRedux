import React from 'react';
import { Button, Result } from 'antd';
import { Link } from 'react-router-dom';

const E404Page: React.FC = () => (
  <Result
    status="404"
    title="404"
    subTitle="Sorry, the page you visited does not exist."
    extra={
      <Link to={'/'}>
        <Button type="primary">Back Home</Button>
      </Link>
    }
  />
);

export default E404Page;

