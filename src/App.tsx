import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Layout } from './components/Layout';
import { Login } from './pages/Login';
import { Dashboard } from './pages/Dashboard';
import { Sessions } from './pages/Sessions';
import { Courses } from './pages/Courses';
import { Assignments } from './pages/Assignments';
import { Forums } from './pages/Forums';
import { Calendar } from './pages/Calendar';
import { People } from './pages/People';
import { Settings } from './pages/Settings';
import { Payments } from './pages/Payments';
import { ProtectedRoute } from './components/ProtectedRoute';
import { useAuth } from './store/auth';

export function App() {
  const { user } = useAuth();

  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route element={<ProtectedRoute user={user} />}>
          <Route element={<Layout />}>
            <Route path="/" element={<Dashboard />} />
            <Route path="/sessions" element={<Sessions />} />
            <Route path="/courses" element={<Courses />} />
            <Route path="/assignments" element={<Assignments />} />
            <Route path="/forums" element={<Forums />} />
            <Route path="/calendar" element={<Calendar />} />
            <Route path="/people" element={<People />} />
            <Route path="/payments" element={<Payments />} />
            <Route path="/settings" element={<Settings />} />
          </Route>
        </Route>
      </Routes>
    </Router>
  );
}