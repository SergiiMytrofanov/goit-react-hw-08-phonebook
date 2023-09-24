import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { logoutUser } from '../redux/authSlice'; 
import { Link } from 'react-router-dom';

const UserMenu = () => {
  const user = useSelector((state) => state.auth.user);
  const dispatch = useDispatch();

  const handleLogout = () => {

    dispatch(logoutUser());
  };

  return (
    <div>
      {user ? (
        <div>
          <p>{user.email}</p>
          <button onClick={handleLogout}>Вийти</button>
        </div>
      ) : (
        <div>
          <Link to="/register">Реєстрація</Link>
          <Link to="/login">Логін</Link>
        </div>
      )}
    </div>
  );
};

export default UserMenu;
