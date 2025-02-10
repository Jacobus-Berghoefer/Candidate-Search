// WHEN I click the "-" button
// THEN the next candidate's information should be displayed without saving the current candidate

const RejectCandidate = ({ onNext }) => {
    return <button onClick={onNext}>-</button>;
  };
  
  export default RejectCandidate;