import React from "react";
import './App.css';
import Style from './Components/Style';
//npm install react-router-dom@6 and npm audit fix --force
import { Routes, Route } from "react-router-dom";
import { FunctionalComponent } from "./Components/FunVsClass";
import NavBar from './Components/Nav';
import Prop from './Components/Props';
import NameList from './Components/Map';
import StateDemo from './Components/State';
import IncDec from "./Components/IncrementDecrement";
import ClassComponent from "./Components/FunVsClass";
import Rooks from "./Components/Rooks";
import RouteDemo from "./Components/RouteDemo";
import Spreadsyntax from "./Components/Spreadsyntax";
import Filter from "./Components/Filter";
import Parent from "./Components/Binding";
import Lifecycle from "./Components/Lifecycle";
import Infocard from "./Components/Infocard";
import CondRen from "./Components/Conditional";
import FormValidator from "./Components/FormValidator";
import ComponentDidMountMethod from "./Components/FakeAPI";
import Table from "./Components/Fragments";
import HookForm from "./Components/ReactHookForm";
import PersonList from "./Components/AxiosDemo";
import AwaitAsync from "./Components/AxiosAwaitAsync";
import AxiosuseAxios from "./Components/useAxiosDemo";
import Events from "./Components/Events";
import ApiSearch from "./Components/APIFilterSearch";
import SignDemo from "./Components/SignaturePad";
import AddToCart from "./Components/AddToCart";
import RenderProps from "./Components/RenderProps";
import ReactHooks from "./Components/ReactHooks";
import Callback from "./Components/Callback";
import Memo from "./Components/Memo";
import TableDemo from "./Components/ReactTable";
import TodosItems from "./Components/TodoHOC";
import Carousel from "./Components/Carousel";
import Sample1 from "./Components/Sample1";
import Sample2 from "./Components/Sample2";
// ARRAYS
const myLists = ['Peter', 'Sachin', 'Kevin', 'Dhoni', 'Alisa','Ajith','Peter'];

function App() {
  return (
    <div className="App">
      <NavBar />
      <Carousel/>

      {/* Child Component - Welcome Component  */}
      {/* <span style={{ color: 'blue', marginTop: 150, padding: 5 }}><Message/><br></br><Welcome /><br></br><Course/><br></br><Demo/></span>
      <Prop company1="ABC" company2="XYZ" /> */}
      {/* ROUTING */}
      <Routes>
        <Route exact path="sample1" element={<Sample1/>}/>
        <Route exact path="routedemo" element={<RouteDemo />} />
        <Route exact path="comp" element={<ClassComponent />} />
        <Route exact path="cond" element={<CondRen />} />
        <Route exact path="filter" element={<Filter />} />
        <Route exact path="binding" element={<Parent />} />
        <Route exact path="cards" element={<Infocard />} />
        <Route exact path="style" element={<Style />} />
        <Route exact path="lifecycle" element={<Lifecycle />} />
        <Route exact path="hookform" element={<HookForm />} />
        <Route exact path="fragments" element={<Table/>} />
        <Route exact path="prop" element={<Prop company1="CG-VAK" company2="G2" />} />
        <Route exact path="state" element={<StateDemo />} />
        <Route exact path="map" element={<NameList myLists={myLists} />} />
        <Route exact path="form" element={<FormValidator />} />
        <Route exact path="incdec" element={<IncDec />} />
        <Route exact path="fakeapi" element={<ComponentDidMountMethod />} />
        <Route exact path="rooks" element={<Rooks />} />
        <Route exact path="spread" element={<Spreadsyntax />} />
        <Route exact path="axios" element={<PersonList />} />
        <Route exact path="awaitasync" element={<AwaitAsync />} />
        <Route exact path="useAxios" element={<AxiosuseAxios />} />
        <Route exact path="events" element={<Events />} />
        <Route exact path="apisearch" element={<ApiSearch />} />
        <Route exact path="sign" element={<SignDemo />} />
        <Route exact path="cart" element={<AddToCart/>}/>
        <Route exact path="renderProps" element={<RenderProps/>}/>
        <Route exact path="hooks" element={<ReactHooks/>}/>
        <Route exact path="callback" element={<Callback/>}/>
        <Route exact path="memo" element={<Memo/>}/>
        <Route exact path="reacttable" element={<TableDemo/>}/>
        <Route exact path="hoc" element={<TodosItems/>}/>
      </Routes>
    </div>
  );
}

// CHILD COMPONENT

//Functional Component
// function Welcome() {
//   return <h1>REACT TRAINING</h1>
// }

// function Message()
// {
//   return <h2>Welcome Team!!!</h2>
// }

// //Class Component

// class Course extends React.Component {
  
//   render() {
//     return <h2>Welcome to React!</h2>;
//   }
// }

export default App;
