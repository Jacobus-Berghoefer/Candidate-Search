// nav bar
import { Link } from 'react-router-dom';

const Nav = () => {
  return (
    <nav>
      <Link to='/'>Search Candidates</Link>
      <Link to='/SavedCandidates'>Saved Candidates</Link>
    </nav>
  );
};

export default Nav;
