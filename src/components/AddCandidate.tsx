// WHEN I click the "+" button
// THEN the candidate should be saved to the list of potential candidates and the next candidate's information should be displayed

const AddCandidate = ({ candidate, onNext }) => {
    const saveCandidate = () => {
      const savedCandidates = JSON.parse(localStorage.getItem('savedCandidates')) || [];
      localStorage.setItem('savedCandidates', JSON.stringify([...savedCandidates, candidate]));
      onNext();
    };
  
    return <button onClick={saveCandidate}>+</button>;
  };
  
  export default AddCandidate;