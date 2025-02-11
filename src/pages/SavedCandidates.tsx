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
import RejectCandidate from '../components/RejectCandidate';
import type { Candidate } from '../utils/interfaces/CandidateInfo';

const SavedCandidates = () => {
  const [savedCandidates, setSavedCandidates] = useState<Candidate[]>([]);

  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem('savedCandidates') || '[]');
    setSavedCandidates(saved);
  }, []);

  const handleReject = (index: number) => {
    const updatedCandidates = savedCandidates.filter((_, i) => i !== index);
    setSavedCandidates(updatedCandidates);
    localStorage.setItem('savedCandidates', JSON.stringify(updatedCandidates));
  };

  return (
    <div>
      <h1>Potential Candidates</h1>
      {savedCandidates.length > 0 ? (
        <table className="candidate-table">
          <thead>
            <tr>
              <th>Image</th>
              <th>Name</th>
              <th>Location</th>
              <th>Email</th>
              <th>Company</th>
              <th>Bio</th>
              <th>Reject</th>
            </tr>
          </thead>
          <tbody>
            {savedCandidates.map((candidate: Candidate, index) => (
              <tr key={index}>
                <td><img src={candidate.avatar_url} alt={candidate.name} className="candidate-avatar" /></td>
                <td><strong>{candidate.name}</strong> <em>({candidate.login})</em></td>
                <td>{candidate.location || 'N/A'}</td>
                <td><a href={`mailto:${candidate.email}`} className="email-link">{candidate.email || 'N/A'}</a></td>
                <td>{candidate.company || 'N/A'}</td>
                <td>{candidate.bio || 'N/A'}</td>
                <td><RejectCandidate onNext={() => handleReject(index)} /></td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <p>No candidates have been accepted.</p>
      )}
    </div>
  );
};

export default SavedCandidates;
