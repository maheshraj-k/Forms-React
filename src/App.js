import React from 'react'
import InstructorList from './co/inst.js';
import FamilyList from './co/family.js';
import ProgramList from './co/program.js';
import StudentList from './co/studentlist.js';
import TerritorieList from './co/territorielist.js';
import SessionList from './co/sessionlist.js';
import ClassList from './co/classlist.js';
import Venue from './co/Venue.js';






function App() {
  return (
    <div>
      <Venue/>
      <InstructorList/>
      <StudentList/> 
      <FamilyList/>
      <TerritorieList/>
      <ProgramList/>
      <SessionList/>
      <ClassList/>
    </div>
  );
}


export default App;

