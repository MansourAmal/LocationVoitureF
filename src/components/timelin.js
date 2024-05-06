import React from 'react';
import { Timeline } from 'antd';
const Timelin= () => (
  <Timeline
    items={[
      {
        children: 'choose a model ',
      },
      {
        children: 'info and payment',
      },
      {
        children: 'confirmation',
      },
      
    ]}
  />
);
export default Timelin;