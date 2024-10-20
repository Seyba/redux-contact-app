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
import { ContactDetails } from './components/ContactDetails';
import { ContactSearch } from './pages/ContactSearch';

function App() {
  return (
    <div className="mx-auto mt-10 md:w-2/4 w-full">
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/contacts/edit/:id' element={<EditContactPage />}/>
        <Route path="/contacts/:id" element={<ContactDetails/>}/>
        <Route path='/contacts/create' element={<CreateContactPage/>}/>
        <Route path='/contacts/search' element={<ContactSearch/>}/>
        <Route path='*' element={<NotFoundPage />}/>
      </Routes> 
    </div>
  );
}

export default App;