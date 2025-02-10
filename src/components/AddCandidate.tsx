// WHEN I click the "+" button
// THEN the candidate should be saved to the list of potential candidates and the next candidate's information should be displayed
import { Candidate } from '../../src/utils/interfaces/CandidateInfo';

interface Props {
    candidate: Candidate;
    onNext: () => void;
  }  

const AddCandidate: React.FC<Props> = ({ candidate, onNext }) => {
    const saveCandidate = () => {
        const savedCandidates: Candidate[] = JSON.parse(localStorage.getItem('savedCandidates') || '[]');
      localStorage.setItem('savedCandidates', JSON.stringify([...savedCandidates, candidate]));
      onNext();
    };
  
    return <button onClick={saveCandidate}>+</button>;
  };
  
  export default AddCandidate;