import {Routes, Route} from 'react-router-dom';

import './App.css';
import { Playground } from './components/Playground';
import { HeroSection } from './components/HeroSection';
import { Panel } from './components/Panel';

function App() {
  return (
    <div className="container mx-auto ">
      <HeroSection/>
      <Panel/>
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

      {/* <Navbar />

      <Routes>

        <Route path='/' element={<HomePage />} />
        <Route path='/posts/:id' element={<PostPage />}/>
        <Route path='/posts/edit/:id' element={<EditPostPage />}/>

        <Route path='*' element={<NotFound />}/>

      </Routes> */}
    </div>
  );
}

export default App;