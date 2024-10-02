"use client";

import { useState } from "react";

export default function ContactForm() {
  const [fullName, setFullName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [birthdate, setBirthdate] = useState("");
  const [contactType, setContactType] = useState("");
  const [message, setMessage] = useState("");

  const handleFullNameChange = (event) => {
    // console.dir(event.target.value);
    setFullName(event.target.value);
  };
  const handlePhoneChange = (event) => setPhone(event.target.value);
  const handleEmailChange = (event) => setEmail(event.target.value);
  const handleBirthdateChange = (event) => setBirthdate(event.target.value);
  const handleContactTypeChange = (event) => setContactType(event.target.value);
  const handleMessageChange = (event) => setMessage(event.target.value);

  const handleSubmit = (event) => {
    event.preventDefault();

    let contactData = {
      fName: fullName,
      telnum: phone,
      mail: email,
      birthday: birthdate,
      type: contactType,
      msg: message,
    };

    alert(`
            Name: ${contactData.fName} | 
            Phone: ${contactData.telnum} | 
            Email: ${contactData.mail} | 
            Birthday: ${contactData.birthday} | 
            Contact Type: ${contactData.type} | 
            Message: ${contactData.msg}
        `);

    setFullName("");
    setPhone("");
    setEmail("");
    setBirthdate("");
    // setContactType("");
    setMessage("");
  };

  return (
    <form className="bg-orange-200 p-4 rounded-lg" onSubmit={handleSubmit}>
      <div className="mb-3">
        <label className="inline-block w-40">Full Name:</label>
        <input className="bg-slate-300 px-2 py-1 rounded border border-gray-500 focus:bg-blue-100" type="text" onChange={handleFullNameChange} />
      </div>
      <div className="mb-3">
        <label className="inline-block w-40">Phone Number:</label>
        <input className="bg-slate-300 px-2 py-1 rounded border border-gray-500 focus:bg-blue-100" type="tel" onChange={handlePhoneChange} />
      </div>
      <div className="mb-3">
        <label className="inline-block w-40">Email:</label>
        <input className="bg-slate-300 px-2 py-1 rounded border border-gray-500 focus:bg-blue-100" type="email" onChange={handleEmailChange} />
      </div>
      <div className="mb-3">
        <label className="inline-block w-40">Birthdate:</label>
        <input className="bg-slate-300 px-2 py-1 rounded border border-gray-500 focus:bg-blue-100" type="date" onChange={handleBirthdateChange} />
      </div>
      <div className="mb-3">
        <label className="inline-block w-40">Contact Type: </label>
        <select className="bg-slate-300 px-2 py-1 rounded border border-gray-500 focus:bg-blue-100" onChange={handleContactTypeChange}>
          <option selected value="">
            Please select a contact type
          </option>
          <option value="personal">Personal</option>
          <option value="business">Business</option>
        </select>
      </div>

      <div className="mb-3">
        <label className="inline-block w-40 align-top">Message:</label>
        <textarea className="bg-slate-300 px-2 py-1 rounded border border-gray-500 focus:bg-blue-100" onChange={handleMessageChange}></textarea>
      </div>

      <div>
        <button className="bg-green-700 hover:bg-green-600 active:bg-green-500 text-white px-3 py-2 rounded">Submit</button>
      </div>
    </form>
  );
}
