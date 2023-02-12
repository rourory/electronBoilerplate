import { HashRouter, Route, Routes } from 'react-router-dom';
import FirstComponent from './components/FirstComponent';
import MainLayout from './layouts/MainLayout';

const Application = () => {
   return (
      <HashRouter>
         <Routes>
            <Route path="/" element={<MainLayout />}>
               <Route path="/" element={<FirstComponent />} />
            </Route>
         </Routes>
      </HashRouter>
   );
};

export default Application;
