import React from 'react';
import { Select, Space } from 'antd';
const handleChange = (value) => {
  console.log(`selected ${value}`);
};
const MySelect = () => (
  <Space wrap>
    <Select
      defaultValue="Select Option"
      style={{
        width: 300,
      }}
      onChange={handleChange}
      options={[
        {
          value: 'Keep it up',
          label: 'Keep it up',
        },
        {
          value: 'Respect yourself',
          label: 'Respect yourself',
        }
      ]}
    />

  </Space>
);
export default MySelect;