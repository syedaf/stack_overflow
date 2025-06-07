import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';

// Missing interface export
interface UserData {
  id: number;
  name: string;
  email: string;
}

// Unused variable
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const UNUSED_CONSTANT = 'this should trigger a warning';

const MessyComponent: React.FC = () => {
  const [users, setUsers] = useState<UserData[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const router = useRouter();

  // Missing dependency in useEffect
  useEffect(() => {
    fetchUsers();
  }, []); // Should include fetchUsers in dependency array

  // Async function not properly handled
  const fetchUsers = async () => {
    setLoading(true);
    try {
      const response = await fetch('/api/users');
      const data = await response.json();
      setUsers(data);
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
    } catch (err) {
      setError('Failed to fetch users');
    }
    setLoading(false); // This should be in finally block
  };

  // Unused parameter
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const handleUserClick = (user: UserData, index: number) => {
    console.log(user); // index is unused
    router.push(`/users/${user.id}`);
  };

  // Missing return type annotation
  const renderUser = (user: UserData) => {
    return (
      <div key={user.id} onClick={() => handleUserClick(user, 0)}>
        <h3>{user.name}</h3>
        <p>{user.email}</p>
      </div>
    );
  };

  // Unused variable in scope
  const handleSubmit = () => console.log('Submitting...');

  // Missing alt attribute, missing key in map
  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;

  return (
    <div className="container">
      <h1>Users</h1>
      <img src="/logo.png" /> {/* Missing alt attribute */}
      <button onClick={handleSubmit}>Submit</button>
      {users.map(
        (
          user // Missing key prop
        ) => renderUser(user)
      )}
      <div>
        {/* Unreachable code after return */}
        {users.length === 0 && <p>No users found</p>}
      </div>
    </div>
  );
};

// Unused export
export default MessyComponent;
