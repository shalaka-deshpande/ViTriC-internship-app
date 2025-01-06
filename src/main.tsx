import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import {createBrowserRouter, RouterProvider } from 'react-router-dom';
import Documents from './app/pages/Documents.tsx';
import Grades from './app/pages/Grades.tsx';
import SkillList from './app/pages/Skill-List.tsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App/>,
    errorElement: <div>404: Page</div>
  },
  {
    path: '/docs',
    element: <Documents />
  }, 
  {
    path: '/grades',
    element: <Grades />
  },
  {
    path:'/skills',
    element:<SkillList />
  },
]);

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider  router={router}/>
  </StrictMode>,
)
// reportWebVitals();
