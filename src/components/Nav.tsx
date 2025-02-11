// nav bar
import { Link } from 'react-router-dom';

const Nav = () => {
  return (
    <nav style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', width: '50%', margin: '0 auto' }}>
        <Link to='/'>Search Candidates</Link>
        <span style={{ margin: '0 20px'}}></span>
        <Link to='/SavedCandidates'>Saved Candidates</Link>
    </nav>
  );
};

export default Nav;
