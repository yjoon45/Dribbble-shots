import React from 'react';

const App = (props) => {
  return <div class="container-fluid">
    <div class="row">{props.children}</div>
  </div>;
};

export default App;
