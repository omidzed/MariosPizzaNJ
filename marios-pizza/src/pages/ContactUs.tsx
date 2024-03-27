import React, { useState } from "react";

export function ContactUs() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    subject: "",
    message: "",
  });
  const [result, setResult] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setResult("Sending...");
    const formData = new FormData(e.currentTarget);

    formData.append("access_key", "ac3a14dc-2a7d-4d90-bf27-9a8780088d27");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      setFormData({
        fullName: "",
        email: "",
        subject: "",
        message: "",
      });
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };

  const inputStyle = " rounded h-7 pl-2";
  const textAreaStyle = "h-24 rounded p-2";
  const buttonStyle = "m-2 xl:m-4 py-2 rounded text-white bg-tertiary";
  const formStyle =
    "flex p-4 m-2 md:my-8 md:p-8 flex-col bg-secondary rounded-md xl:mx-12 w-4/5 md:w-1/2";
  const labelStyle = "text-white md:leading-6";

  return (
    <div className="w-full flex flex-col md:flex-row overflow-auto 100vh">
      <div className="flex justify-center 100vh lg:w-2/3">
        <form className={formStyle} onSubmit={handleSubmit}>
          <h2 className="text-white p-2 font-bold text-2xl xl:mb-4 whitespace-nowrap">
            Contact Form
          </h2>
          <div className="p-2 flex flex-col md:gap-1">
            <label className={labelStyle}>Full Name</label>
            <input
              type="text"
              name="fullName"
              value={formData.fullName}
              onChange={handleChange}
              className={inputStyle}
            />
          </div>
          <div className="p-2 flex flex-col md:gap-1">
            <label className={labelStyle}>Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className={inputStyle}
            />
          </div>
          <div className="p-2 flex flex-col md:gap-1">
            <label className={labelStyle}>Subject</label>
            <input
              type="text"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              className={inputStyle}
            />
          </div>
          <div className="xl:mt-4 p-2 flex flex-col md:gap-1">
            <label className={labelStyle}>Message</label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              className={textAreaStyle}
            />
          </div>
          <button className={buttonStyle} type="submit">
            Send Message
          </button>
        </form>
        <span>{result}</span>
      </div>
      <div className="flex flex-col mx-16 lg:w-1/2 justify-center gap-2 p-6 text-xl  md:text-3xl lg:text-5xl w-1/3 md:w-1/2">
        <span className="md:mb-6 whitespace-nowrap text-2xl md:text-3xl lg:text-4xl mb-1">
          Contact Details
        </span>
        <div className="flex justify-between md:justify-start items-center text-lg md:text-2xl">
          <img className="h-6 mr-2" src="/images/mail.png" />
          <a href="mailto:info@mariosnj.pizza">info@mariosnj.pizza</a>
        </div>
        <div className="flex justify-between md:justify-start whitespace-nowrap items-center text-lg md:text-2xl">
          <img className="h-6 mr-2" src="/images/phone.png" />
          <a href="tel:+12018438700">+1(201)843-8700</a>
        </div>
      </div>
    </div>
  );
}
