// components/Navbar.tsx
import Link from 'next/link';

export default function Navbar() {
  return (
    <nav style={{ padding: '20px', backgroundColor: '#333', color: '#fff', display: 'flex', justifyContent: 'space-around' }}>
      <Link href="/">Home</Link>
      <Link href="/about">About</Link>
      <Link href="/projects">Projects</Link>
      <Link href="/contact">Contact</Link>
    </nav>
  );
}
