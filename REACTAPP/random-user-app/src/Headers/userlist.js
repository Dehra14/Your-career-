import React, { useState, useEffect } from 'react';


const UserDisplay = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await fetch('https://randomuser.me/api/?results=3');
        if (!response.ok) {
          throw new Error('Failed to fetch users');
        }
        const data = await response.json();
        setUsers(data.results);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchUsers();
  }, []);

  const refreshUsers = async () => {
    setLoading(true);
    try {
      const response = await fetch('https://randomuser.me/api/?results=3');
      const data = await response.json();
      setUsers(data.results);
      setError(null);
    } catch (err) {
      setError('Failed to fetch new users');
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return <div className="loading">Loading users...</div>;
  }

  if (error) {
    return <div className="error">Error: {error}</div>;
  }

  return (
    <div className="user-display">
      <button onClick={refreshUsers} className="refresh-btn">
        Refresh Users
      </button>
      
      <div className="user-grid">
        {users.map((user, index) => (
          <div key={index} className="user-card">
            <img 
              src={user.picture.large} 
              alt={`${user.name.first} ${user.name.last}`}
              className="user-avatar"
            />
            <div className="user-info">
              <h3>{`${user.name.first} ${user.name.last}`}</h3>
              <p>Email: {user.email}</p>
              <p>Phone: {user.phone}</p>
              <p>Location: {`${user.location.city}, ${user.location.country}`}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default UserDisplay;