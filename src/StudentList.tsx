type StudentList = {
    list: string[];
  };
  
  function StudentList({ list }: StudentList) {
    return (
      <div className="Student-Lists">
        <h5>list</h5>
        <ul>
          {list.map((list, index) => (
            <li key={index}>{list}</li>
          ))}
        </ul>
      </div>
    );
  }
  
  export default StudentList;
