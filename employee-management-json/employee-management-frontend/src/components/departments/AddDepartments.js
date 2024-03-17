import React, {useState} from "react";
import { useDispatch, useSelector } from "react-redux";
import {createDepartment} from "../../actions/DepartmentActions";
import { Form } from "react-router-dom";

const AddDepartment = () => {
  const dispatch = useDispatch();
  const errors = useSelector((state) => state.errorsReducersContent);

  const [name, setName] = useState("");

  const onChange = (e) => {
      setName(e.target.vale);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    const newDepartment = {name};
    dispatch(createDepartment(newDepartment));
  };

  return(
    <div className="bg-gray-100 min-h-screen py-6 flex flex-col justify-center sm:py-12">
       <div className="relative py-3 sm:mac-w-xl sm:mx-auto">
        <div className="relative px-4 py-10 bg-white mx-8 md:mx-0 shadow p-8 sm:p-10">
          <h5 className="text-center text-3xl">Create Department Form</h5>
          <hr className="my-4"/>
          
          <form onSubmit={onSubmit} className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-gray-700">
                Department Name
              </label>
            </div>

            </form>  
        </div>

       </div>
    </div>
  )
}