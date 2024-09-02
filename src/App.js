import {Routes, Route} from 'react-router-dom';

import './App.css';
import { Playground } from './components/Playground';
import { HomePage } from './pages/HomePage';
import { NotFoundPage } from './pages/NotFoundPage'
import { HeroSection } from './components/HeroSection';
import { Panel } from './components/Panel';
import { SideNav } from './components/Sidenav';
import { EditContactPage } from './pages/EditContactPage';
import { ContactPage } from './pages/ContactPage';
import { CreateContactPage } from './pages/CreateContactPage';

function App() {
  return (
    <div className="">
      <HomePage />
      {/* <SideNav/> */}
      
      {/* <Panel/> */}
      
      {/* <div className="container bg-slate-400 px-4">
        <h2>Hello</h2>
        <p>cont lkjslkjd slkjdflj lkjsdlkfj</p>
      </div>
      <div className="container bg-slate-100">
        <div className="container bg-slate-200">
          <h2>Hello</h2>
          <p>cont lkjslkjd slkjdflj lkjsdlkfj</p>
        </div>
        <div className="container bg-slate-400">
          <h2>Hello</h2>
          <p>cont lkjslkjd slkjdflj lkjsdlkfj</p>
        </div>
      </div> */}

      

      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/contacts/:id' element={<ContactPage />}/>
        <Route path='/contacts/edit/:id' element={<EditContactPage />}/>
        <Route path='/contacts/create' element={<CreateContactPage/>}/>
        <Route path='*' element={<NotFoundPage />}/>
      </Routes> 
    </div>
  );
}

export default App;