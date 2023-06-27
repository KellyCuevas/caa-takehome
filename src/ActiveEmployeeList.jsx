const ActiveEmployeeList = ({ departmentName, employeeArray }) => {
  return (
    <div>
      <h2>{departmentName}</h2>
      <ul>
        {employeeArray.map((employee) => (
          <li key={employee.id}>
            <span>
              <a href={`mailto:${employee.email}`}>{employee.name}</a>
            </span>{" "}
            ({employee.tags.map((tag, i) => (i === 0 ? tag : ", " + tag))})
          </li>
        ))}
      </ul>
    </div>
  );
};
export default ActiveEmployeeList;
