// GIVEN a candidate search application
// WHEN the candidate search page loads
// THEN the information for one candidate should be displayed, including the candidate's name, username, location, avatar, email, html_url, and company

// WHEN there are no candidates available to review
// THEN an appropriate message should be shown indicating no more candidates are available

import { useState, useEffect } from 'react';
import { fetchCandidate } from '../API';
import CandidateCard from '../components/CandidateCard';

const CandidateSearch = () => {
  const [candidate, setCandidate] = useState(null);

  useEffect(() => {
    fetchCandidate().then(setCandidate);
  }, []);

  return (
    <div>
      {candidate ? <CandidateCard candidate={candidate} /> : <p>No more candidates available</p>}
    </div>
  );
};

export default CandidateSearch;