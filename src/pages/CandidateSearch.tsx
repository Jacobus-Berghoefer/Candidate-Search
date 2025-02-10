// GIVEN a candidate search application
// WHEN the candidate search page loads
// THEN the information for one candidate should be displayed, including the candidate's name, username, location, avatar, email, html_url, and company

// WHEN there are no candidates available to review
// THEN an appropriate message should be shown indicating no more candidates are available

import { useState, useEffect } from 'react';
import { searchGithub, searchGithubUser } from '../api/API';
import CandidateCard from '../components/CandidateCard';


const CandidateSearch = () => {
  const [candidate, setCandidate] = useState(null);

  useEffect(() => {
    searchGithub().then(users => {
      if (users.length > 0) {
        searchGithubUser(users[0].login).then(setCandidate);
      }
    });
  }, []);

  return (
    <div>
    <h1>CandidateSearch</h1>
      {candidate ? <CandidateCard candidate={candidate} /> : <p>No more candidates available</p>}
    </div>
  );
};

export default CandidateSearch;