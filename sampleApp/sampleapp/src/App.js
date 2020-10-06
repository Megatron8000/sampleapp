import React from 'react';
import './App.css';
import ContentArea from './components/ContentArea/contentArea';
import Form from './components/Form/form';
import Sidebar from './components/Sidebar/sidebar';

function App() {
  return (
    <div>
      <Sidebar />
      <ContentArea />
      <Form />
    </div>
  );
}
export default App;
