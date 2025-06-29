import { useEffect, useState } from 'react';
import { supabase } from '../lib/supabaseClient';

export default function Dashboard() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    supabase.auth.getUser().then(({ data: { user } }) => {
      setUser(user);
    });
  }, []);

  if (!user) {
    return <p>Loading...</p>;
  }

  return (
    <div style={{ padding: 40 }}>
      <h2>Welcome, {user.email}</h2>
      <p>Your account is being set up.</p>
      <button disabled>Send (activation pending)</button><br/>
      <button disabled>Withdraw (activation pending)</button>
    </div>
  );
}