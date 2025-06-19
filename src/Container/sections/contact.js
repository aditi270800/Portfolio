import React, { useState } from "react";
// import { MdEmail } from "react-icons/md";
// import { IoCall } from "react-icons/io5";

const Contact = () => {
  const [formFieldsData, setFormFieldsData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const onFieldValueChangeHandler = (event, field) => {
    setFormFieldsData((prev) => ({ ...prev, [field]: event.target.value }));
  };

  console.log("Ad", formFieldsData.name);

  return (
    <div name="contact" className="w-full flex justify-center items-center p-4">
      <div className="flex flex-col max-w-[600px] w-full">
        <div className="flex flex-col justify-center w-full h-full items-center">
          <p className="text-4xl font-bold inline border-b-4 border-[#d98b19] text-[#d98b19]">
            Get in touch with me Today!!
          </p>
        </div>
        {/* <input
          className="p-2 rounded-sm text-black"
          type="text"
          placeholder="Name"
          name="name"
          value={formFieldsData.name}
          onChange={(event) => onFieldValueChangeHandler(event, "name")}
        />
        <input
          className="my-4 p-2 rounded-sm text-black"
          type="email"
          placeholder="Email"
          name="email"
          value={formFieldsData.email}
          onChange={(event) => onFieldValueChangeHandler(event, "email")}
        />
        <textarea
          className="p-2 rounded-sm text-black"
          name="message"
          rows="5"
          placeholder="Message"
          value={formFieldsData.message}
          onChange={(event) => onFieldValueChangeHandler(event, "message")}
        />
        <button className="text-xl border-2 border-[#d98b19] bg-[#d98b19] hover:bg-opacity-90 hover:border-opacity-90 w-full px-4 py-3 my-8 mx-auto flex justify-center items-center">
          Send
        </button> */}
      </div>
    </div>
  );
};

export default Contact;
