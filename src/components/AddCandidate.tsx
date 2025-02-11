// WHEN I click the "+" button
// THEN the candidate should be saved to the list of potential candidates and the next candidate's information should be displayed
import { Candidate } from '../../src/utils/interfaces/CandidateInfo';
import { FcPlus } from "react-icons/fc";

interface AddCandidateProps {
  candidate: Candidate;
  onNext: () => void;
}

const AddCandidate: React.FC<AddCandidateProps> = ({ candidate, onNext }) => {
    if (!candidate) return null;
    
    const saveCandidate = () => {
      const savedCandidates = JSON.parse(localStorage.getItem('savedCandidates') || '[]');
      localStorage.setItem('savedCandidates', JSON.stringify([...savedCandidates, candidate]));
      onNext();
    };
  
    return (

        <button onClick={saveCandidate} style={{ display: 'flex', alignItems: 'center', gap: '5px'}}>
            <FcPlus size={30} /> Add
            </button>
    ); 
  };
  
  export default AddCandidate;
  