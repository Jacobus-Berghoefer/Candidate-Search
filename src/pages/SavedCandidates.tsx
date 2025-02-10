// WHEN the potential candidates page loads
// THEN the user should see a list of previously saved potential candidates with their name, username, location, avatar, email, html_url, and company
// WHEN the page reloads

// WHEN the page reloads
// THEN the list of potential candidates should persist and be available for viewing

// WHEN there are no potential candidates
// THEN an appropriate message should be displayed indicating no candidates have been accepted

// WHEN I click the "-" button
// THEN the next candidate's information should be displayed without saving the current candidate

import { useState, useEffect } from 'react';
import CandidateCard from '../components/CandidateCard';

const SavedCandidates = () => {
  const [savedCandidates, setSavedCandidates] = useState([]);

  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem('savedCandidates')) || [];
    setSavedCandidates(saved);
  }, []);

  return (
    <div>
      {savedCandidates.length > 0 ? (
        savedCandidates.map((candidate, index) => <CandidateCard key={index} candidate={candidate} />)
      ) : (
        <p>No candidates have been accepted.</p>
      )}
    </div>
  );
};

export default SavedCandidates;