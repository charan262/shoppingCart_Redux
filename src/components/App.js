import React, { Component } from 'react';
import ItemList from '../containers/items_list';
import ItemsDisplay from '../containers/items_display'
import CurentItem from '../containers/current_item'
require('../style.css');
const App=()=> (
    <div>
    <h1>Items List</h1>
      <h2><ItemList/></h2><hr/>

      <h1>Item Description</h1>
        <div> <ItemsDisplay/></div><hr/>
        <h1>Items in Cart</h1>
        <CurentItem/>

    </div>

)

export default App;
