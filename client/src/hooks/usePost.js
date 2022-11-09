import { useState } from "react";
import axios from "axios";
const usePost = (url1, url2) => {
  const [signup, setSignup] = useState("");

  const handleChange = (e) => {
    setSignup(e.target.value);
  };

  const handleSignup = (e) => {
    let userData = {
      to: signup,
      from: process.env.REACT_APP_SMTP_EMAIL,
      replyTo: process.env.REACT_APP_SMTP_EMAIL,
      subject: "Thanks for signing up",
      html: "<h3>Hi!</h3> <p>You've been subscribed to our primary newsletter. You can expect to receive an email from us when new and interesting books come to our store.</p><p>If you wish to unsubscribe please email us by pressing the following:<a href='mailto:qunwa@emrani.co.uk'>[unsubscribe]</a></p>",
    };
    axios.all([
      axios.post(url1, userData),
      axios.post(url2, { data: { email: signup } }).then((res) => {
        setSignup("Thank you For signing up, you should receive an email soon");
      }),
    ]);
  };

  return {
    signup,
    handleChange,
    handleSignup,
  };
};
export default usePost;
