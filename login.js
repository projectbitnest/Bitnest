import { useState } from 'react';
import { supabase } from '../lib/supabaseClient';
import { useRouter } from 'next/router';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleLogin = async () => {
    setLoading(true);
    const { error } = await supabase.auth.signInWithPassword({ email, password });
    if (error) {
      alert('Login failed');
    } else {
      router.push('/dashboard');
    }
    setLoading(false);
  };

  return (
    <div style={{ padding: 40 }}>
      <h2>Login to BitNest</h2>
      <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} /><br/>
      <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} /><br/>
      <button onClick={handleLogin} disabled={loading}>
        {loading ? 'Logging in...' : 'Login'}
      </button>
    </div>
  );
}