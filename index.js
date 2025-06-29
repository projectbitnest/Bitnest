import Link from 'next/link';

export default function Home() {
  return (
    <div style={{ padding: 40 }}>
      <h1>Welcome to BitNest</h1>
      <p>The most trusted crypto investment platform with over 1 million users, secure wallets, and instant deposits in USDT, BTC, and ETH.</p>
      <Link href="/login">Login</Link>
    </div>
  );
}