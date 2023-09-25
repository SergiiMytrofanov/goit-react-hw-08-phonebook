

import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import ContactManager from './ContactManager';

import { useNavigate } from 'react-router-dom';

const PrivateRoute = () => {
  const user = useSelector((state) => state.auth.user);
  const navigate = useNavigate();

  useEffect(() => {
    if (!user) {
      navigate('/goit-react-hw-08-phonebook/login');
    }
  }, [user, navigate]);

  return (
    <div>
      {user && <ContactManager />}
    </div>
  );
};

export default PrivateRoute;
