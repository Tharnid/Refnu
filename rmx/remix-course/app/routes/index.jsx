import { Link } from '@remix-run/react';

export default function Index() {
  return (
    <>
    <h1>Hello, from Remix!!!</h1>
    <Link to="/demo">Go to Demo Page</Link>
    </>
  );
}
