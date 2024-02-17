import React from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { deleteDepartment } from "../../actions/DepartmentActions";

function Department(props) {
  const dispatch = useDispatch();

  const { department } = props;

  if (!department) {
    return <div>Department not found</div>;
  }

  const onDeleteClick = (id) => {
    dispatch(deleteDepartment(id));
  };

  return (
    <div className="bg-white p-2 mb-3 rounded-md shadow-md">
      <div className="container">
        <h2 className="text-2xl font-semibold">Department</h2>
        <div className="p-3 bg-white shadow-md rounded-md">
          <div className="flex justify-between items-center">
            <div className="flex-1">
              <h3 className="text-xl font-semibold mb-2 text-center">{department.name}</h3>
            </div>
            <div className="lg:block hidden">
              <ul className="space-y-4">
                  <li>
                    <Link to={`/employees/${department.id}`} className="text-white hover:text-white focus:outline-none bg-blue-500 hover:bg-blue-700  font-semibold py-2 px-4 rounded-full transition duration-300 ease-in-out transform hover:scale-105 block w-full text-center">Department Board</Link>
                  </li>
                  <li>
                    <Link to={`/updateDepartment/${department.id}`} className="text-white hover:text-white focus:outline-none bg-blue-500 hover:bg-blue-700  font-semibold py-2 px-4 rounded-full transition duration-300 ease-in-out transform hover:scale-105 block w-full text-center"> Update Department
                    </Link>
                  </li>
                  <li>
                    <button className="bg-red-500 hover:bg-red-700 text-white font-semibold py-2 px-2 rounded-full transition duration-300 ease-in-out transform hover:scale-105 block w-full text-center" onClick={() => onDeleteClick(department.id)}>
                    </button>
                  </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

Department.propTypes = {
  department: PropTypes.object,
};

export default Department;
