// Candidate Card with name, username, location, avatar, email, html_url, and company
// import React from 'react'; (delete?)
import { Candidate } from '../../src/utils/interfaces/CandidateInfo';

const CandidateCard: React.FC<{ candidate: Candidate }> = ({ candidate }) => {
    if (!candidate) return <p>No candidate data available</p>;
  return (
    <div className='candidate-card'>
      <img src={candidate.avatar_url} alt={candidate.name} />
      <h2>{candidate.name}</h2>
      <p>Username: {candidate.login}</p>
      <p>Location: {candidate.location || 'N/A'}</p>
      <p>Email: {candidate.email || 'N/A'}</p>
      <p>Company: {candidate.company || 'N/A'}</p>
      <a href={candidate.html_url} target='_blank' rel='noopener noreferrer'>GitHub Profile</a>
    </div>
  );
};

export default CandidateCard;
