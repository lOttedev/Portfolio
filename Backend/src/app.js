const express = require("express");

const router = express.Router();
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());
app.use("/", router);
app.listen(3000, () => console.log("Server Running"));

export default app;

/*const contactEmail = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "***************@gmail.com",
    pass: "********",
  },
});

contactEmail.verify((error) => {
  if (error) {
    console.log(error);
  } else {
    console.log("Ready to Send");
  }
});

router.post("/contact", (req, res) => {
  const fName = req.body.firstname;
  const lName = req.body.lastname;
  const email = req.body.email;
  const message = req.body.message;
  const mail = {
    from: fName,
    to: "***************@gmail.com",
    subject: "Contact Form Submission",
    html: `<p>Name: ${fName} ${lName}</p>
             <p>Email: ${email}</p>
             <p>Message: ${message}</p>`,
  };
  contactEmail.sendMail(mail, (error) => {
    if (error) {
      res.json({ status: "ERROR" });
    } else {
      res.json({ status: "Message Sent" });
    }
  });
});*/
