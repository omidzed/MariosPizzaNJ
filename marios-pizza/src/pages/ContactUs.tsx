import { FormEvent } from "react";
import { Footer } from "../components/Footer";

export function ContactUs() {
  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    console.log("submitted");
  }

  return (
    <>
      <div>Contact Us</div>
      <form onSubmit={handleSubmit}>
        <label className="block">
          Name:
          <input className="border border-black" type="text" />
        </label>
        <label className="block">
          Email:
          <input className="border border-black" type="text" />
        </label>
        <label className="block">
          How can we help?
          <input className="border border-black" type="text" />
        </label>
        <button>Send</button>
      </form>
      <div>
        <Footer />
      </div>
    </>
  );
}
