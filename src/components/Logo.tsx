import { Link } from 'react-router-dom';

export function Logo() {
  return (
    <Link to="/" className="logo" aria-label="GNS home">
      <span className="logo-image">
        <img src="/favicon.png" alt="GNS Gulf Net Solution SPC" />
      </span>
    </Link>
  );
}
