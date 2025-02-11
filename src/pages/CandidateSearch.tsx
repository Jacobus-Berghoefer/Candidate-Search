// GIVEN a candidate search application
// WHEN the candidate search page loads
// THEN the information for one candidate should be displayed, including the candidate's name, username, location, avatar, email, html_url, and company

// WHEN there are no candidates available to review
// THEN an appropriate message should be shown indicating no more candidates are available

import { useState, useEffect } from 'react';
import { searchGithub, searchGithubUser } from '../api/API';
import type { Candidate } from '../utils/interfaces/CandidateInfo';
import CandidateCard from '../components/CandidateCard';
import AddCandidate from '../components/AddCandidate';
import RejectCandidate from '../components/RejectCandidate';


const CandidateSearch = () => {
    const [candidate, setCandidate] = useState<Candidate | null>(null);
    
    const fetchNewCandidate = () => {
        searchGithub().then((users: Candidate[]) => {
          if (users.length > 0) {
            searchGithubUser(users[0].login).then((user) => {
              if (user) setCandidate(user);
            });
          } else {
            setCandidate(null);
          }
        });
    };

    useEffect(() => {
        fetchNewCandidate();
    }, []);

    return (
        <div>
          <h1>Candidate Search</h1>
          {candidate ? (
            <>
              <CandidateCard candidate={candidate} />
              <div style={{ display: 'flex', justifyContent: 'center', gap: '20px', marginTop: '10px' }}>
              <AddCandidate candidate={candidate} onNext={fetchNewCandidate} />
              <RejectCandidate onNext={fetchNewCandidate} />
              </div>
            </>
          ) : (
            <p>No more candidates available</p>
          )}
        </div>
      );
    };

export default CandidateSearch;