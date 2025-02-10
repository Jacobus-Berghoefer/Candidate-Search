// WHEN I click the "-" button
// THEN the next candidate's information should be displayed without saving the current candidate
import { searchGithubUser } from '../api/API';

interface Props {
    onNext: () => void;
  }  

const RejectCandidate: React.FC<Props> = ({ onNext }) => {
    return <button onClick={() => searchGithubUser('octocat').then(onNext)}>-</button>;
  };
  
  export default RejectCandidate;