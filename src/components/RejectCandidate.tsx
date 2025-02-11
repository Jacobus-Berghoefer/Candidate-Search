// WHEN I click the "-" button
// THEN the next candidate's information should be displayed without saving the current candidate
import { searchGithub, searchGithubUser } from '../api/API';
import { FcCancel } from "react-icons/fc";

interface RejectCandidateProps {
  onNext: () => void;
}

const RejectCandidate: React.FC<RejectCandidateProps> = ({ onNext }) => {
    const handleReject = () => {
      searchGithub().then(users => {
        if (users.length > 0) {
          searchGithubUser(users[0].login).then(onNext);
        }
      });
    };
  
    return (
        <button onClick={handleReject} style={{ display: 'flex', alignItems: 'center', gap: '5px'}}>
            <FcCancel size={30} /> Reject 
            </button>
    );
  };
  
  export default RejectCandidate;