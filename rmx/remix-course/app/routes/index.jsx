import { Link } from '@remix-run/react';

import homesStyles from '~/styles/home.css';

export default function Index() {
  return (
    <main id="content">
    <h1>A better way of tracking your notes</h1>
    <p id="cta">
      <Link to="/notes">Try Now!!!</Link>
    </p>
    </main>
  );
}

export function links() {
  return [{rel: 'stylesheet', href: homesStyles}]
}