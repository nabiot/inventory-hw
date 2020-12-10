import React, {component} from 'react';
import InventoryComponent from './Inventory/InventoryComponent';
import './App.css';

function App() {
  return (
    <div>
      <div className = "inventory">
      <h1>Clothing Inventories</h1>
      </div>
      <InventoryComponent item = "Shoes" startingCount = {5} Reset = {0} Props = {''}/>
      <InventoryComponent item = "Jackets " startingCount = {10} Reset = {0} Props = {''}/>
      <InventoryComponent item = "Pants " startingCount = {15} Reset = {0} Props = {''}/>
      <InventoryComponent item = "Hats" startingCount = {20} Reset = {0} Props = {''}/>
    </div>
  );
}

export default App;
