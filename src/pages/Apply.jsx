import React, { useState } from "react";

const Apply = () => {
  const [formData, setFormData] = useState({ name: "", email: "", cnic: "" });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Application Submitted Successfully!");
  };

  return (
    <div className="p-6 text-white bg-gray-900 min-h-screen">
      <h2 className="text-3xl font-bold text-yellow-400 text-center">Apply for Pakistan Army</h2>
      <form onSubmit={handleSubmit} className="mt-6 max-w-lg mx-auto bg-gray-800 p-6 rounded-md">
        <label className="block">Name:</label>
        <input type="text" name="name" onChange={handleChange} className="w-full p-2 rounded-md bg-gray-700 text-white" required />
        
        <label className="block mt-4">Email:</label>
        <input type="email" name="email" onChange={handleChange} className="w-full p-2 rounded-md bg-gray-700 text-white" required />

        <label className="block mt-4">CNIC:</label>
        <input type="text" name="cnic" onChange={handleChange} className="w-full p-2 rounded-md bg-gray-700 text-white" required />

        <button type="submit" className="mt-4 w-full bg-yellow-500 text-black p-2 rounded-md">Submit</button>
      </form>
    </div>
  );
};

export default Apply;
