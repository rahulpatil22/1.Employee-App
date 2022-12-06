import * as React from 'react';
import Employees from './Employees';
import AddContractEmployee from './AddContractEmployee';

export default function App() {
  return (
    <main className="App">
      <h1>My Todos</h1>
      <AddContractEmployee />
      <Employees />
    </main>
  );
}
