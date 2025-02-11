// Candidate Card with name, username, location, avatar, email, html_url, and company
// import React from 'react'; (delete?)
import { Candidate } from '../../src/utils/interfaces/CandidateInfo';

const CandidateCard: React.FC<{ candidate: Candidate }> = ({ candidate }) => {
    if (!candidate) return <p>No candidate data available</p>;

  return (
    <div className='candidate-card'>
      <img className="avatar"  src={candidate.avatar_url || ''} alt={candidate.name || 'No Name'} />
      <div className="card-content">
        <h2>
            <span className="name">{candidate.name || 'Unknown'} </span>
            <span className="username">({candidate.login})</span>
        </h2>
        <p><strong>Location:</strong> {candidate.location || 'N/A'}</p>
        <p><strong>Email:</strong> {candidate.email || 'N/A'}</p>
        <p><strong>Company:</strong> Company: {candidate.company || 'N/A'}</p>
        <a href={candidate.html_url} target='_blank' rel='noopener noreferrer'>GitHub Profile</a>
      </div>
    </div>
  );
};

export default CandidateCard;
