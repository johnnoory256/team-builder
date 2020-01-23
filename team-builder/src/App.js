import React, {useState} from 'react';
import MembersForm from './components/MembersForm';
import Members from './components/Members';
import './App.css';

function App() {
  const [members, setMembers] = useState([]);
  const addMember = member => {
    setMembers([...members, member]);
  };
  return (
    <div className="App">
      <h1>Members</h1>
      <MembersForm addMember={addMember}/>
      <Members memberList={members}/>
    </div>
  );
}

export default App;