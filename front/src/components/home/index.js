import React, { Fragment } from 'react';

import { ConfigConsumer } from "../../context/config";


const Home = (props) => {

  console.log(`Home props`, props);

  // return <div>Home</div>



  return (
    <ConfigConsumer>
      {(config, data) => {

        console.log(`config`, config, data);
        return <div>Home</div>
      }}
    </ConfigConsumer>
  );
};

export default Home;