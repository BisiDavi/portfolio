import { useState } from "react";
import Button from "./button";
import postData from "@utils/postData";
import styles from "@styles/styles.module.css";
import useLoading from "@hooks/useLoading";
import { toast } from "react-toastify";
import Loading from "./loading";
import "react-toastify/dist/ReactToastify.css";

export default function ContactForm() {
  const { loading, loadingState } = useLoading();
  const [contact, setContact] = useState({
    email: "",
    message: "",
  });
  function handleChange(e) {
    setContact({
      ...contact,
      [e.target.name]: e.target.value,
    });
  }

  async function submitForm(e) {
    e.preventDefault();
    loadingState(true);
    postData("/api/contact", contact)
      .then((data) => {
        toast.success(`Hello ${data.data.email} Thanks for reaching out`);
        setContact({
          email: "",
          message: "",
        });
        loadingState(false);
      })
      .catch((error) => {
        toast.error(`please try again, an error just occured`);
        loadingState(false);
      });
  }

  return (
    <>
      {loading && <Loading />}
      <section id="contact" className={`contact ${styles.contact}`}>
        <h3>Get in touch</h3>

        <form onSubmit={submitForm}>
          <label htmlFor="email">EMAIL</label>
          <input
            id="email"
            name="email"
            value={contact.email}
            onChange={handleChange}
            type="email"
            placeholder="Email"
            required
          />
          <label htmlFor="message">MESSAGE</label>
          <textarea
            name="message"
            id="message"
            rows={10}
            value={contact.message}
            onChange={handleChange}
            cols={50}
          ></textarea>
          <div className="button">
            <Button type="submit" text="Submit" />
          </div>
        </form>
        <style jsx>
          {`
            .contact {
              display: flex;
              justify-content: center;
              flex-direction: column;
              align-items: center;
              margin-bottom: 30px;
              font-family: "Raleway", sans-serif;
            }
            .contact h3 {
              margin: 30px auto;
            }
            .contact form {
              display: flex;
              flex-direction: column;
            }
            .button {
              width: 200px;
              margin: 20px auto;
              display: flex;
              justify-content: center;
            }
            .contact form label {
              margin-bottom: 20px;
            }
            .contact form input::placeholder {
              text-align: center;
              font: normal normal 20px/30px "Raleway", sans-serif;
            }
            .contact form input {
              height: 40px;
              border-radius: 25px;
              margin-bottom: 20px;
            }

            @media (max-width: 500px) {
              section#contact form {
                width: 70%;
                margin: auto;
              }
            }
          `}
        </style>
      </section>
    </>
  );
}
