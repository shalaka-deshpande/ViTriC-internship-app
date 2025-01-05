import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import {createBrowserRouter, RouterProvider } from 'react-router-dom';
import Documents from './app/pages/Documents.tsx';
import Grades from './app/pages/Grades.tsx';
import StrongSkills from './app/pages/Strong-Skills.tsx';
import WeakSkills from './app/pages/Weak-Skills.tsx';
import IntermediateSkills from './app/pages/Intermediate-Skills.tsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App/>,
    errorElement: <div>404: Page not</div>
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
    path:'/skills/strong',
    element:<StrongSkills />
  },
  {
    path:'/skills/weak',
    element:<WeakSkills />
  },
  {
    path:'/skills/intermediate',
    element:<IntermediateSkills />
  },
]);

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider  router={router}/>
  </StrictMode>,
)
// reportWebVitals();
