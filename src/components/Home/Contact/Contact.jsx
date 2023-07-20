import {
  Button,
  Container,
  Grid,
  Snackbar,
  TextField,
  Typography,
} from "@mui/material";
import { useState } from "react";
import { sendMessage } from "../../../api";

export const Contact = () => {
  const [toast, setToast] = useState(false);
  const [disableSend, setDisableSend] = useState(false);
  const handleSendMessage = (e) => {
    e.preventDefault();
    setDisableSend(true);
    const formData = new FormData(e.currentTarget);
    sendMessage({
      fname: formData.get("fname"),
      lname: formData.get("lname"),
      email: formData.get("email"),
      message: formData.get("message"),
    }).then(() => {
      setToast(true);
      e.target.reset();
      setDisableSend(false);
    });
  };
  return (
    <>
      <Container maxWidth="xl" id="Contact Us">
        <Grid
          container
          display={"flex"}
          alignItems="center"
          justifyContent={"center"}
          my={3}
          spacing={4}
        >
          <Grid
            item
            sm={12}
            md={6}
            p={2}
            py={5}
            textAlign={"center"}
            sx={{ display: { md: "block", sm: "none", xs: "none" } }}
          >
            <img
              src="/images/logo.png"
              alt="Logo"
              style={{ borderRadius: 10, width: "50%", marginRight: 12 }}
            />
          </Grid>
          <Grid item sm={12} md={6} p={2} py={5}>
            <Typography variant="h4" component={"h1"} mb={2}>
              GET IT TOUCH
            </Typography>
            <Typography variant="body1" component={"p"} mb={3}>
              Are you ready to embrace the power of technology and elevate your
              business to new heights? Contact us today to discuss your project
              requirements. Let ConsoleDot be your trusted partner on your
              journey to success.
            </Typography>
            <form method="POST" onSubmit={handleSendMessage}>
              <Grid container spacing={2} mb={3}>
                <Grid item width={"100%"} sm={6}>
                  <TextField
                    name="fname"
                    placeholder="First Name"
                    label="First Name"
                    fullWidth
                    required
                  />
                </Grid>
                <Grid item width={"100%"} sm={6}>
                  <TextField
                    name="lname"
                    placeholder="Last Name"
                    label="Last Name"
                    fullWidth
                    required
                  />
                </Grid>
                <Grid item width={"100%"} sm={12}>
                  <TextField
                    name="email"
                    type={"email"}
                    placeholder="Email Address"
                    label="Email Address"
                    fullWidth
                    required
                  />
                </Grid>
                <Grid item width={"100%"} sm={12}>
                  <TextField
                    name="message"
                    placeholder="Message"
                    label="Message"
                    multiline
                    rows={5}
                    fullWidth
                    required
                  />
                </Grid>
              </Grid>
              <Button
                variant="contained"
                sx={{
                  color: "#fff",
                  borderColor: "#224575",
                  background: "#224575",
                  "&:hover": {
                    background: "#0D7789",
                    borderColor: "#0D7789",
                    color: "#fff",
                  },
                }}
                type="submit"
                disabled={disableSend}
              >
                Send Message
              </Button>
            </form>
          </Grid>
        </Grid>
      </Container>
      <Snackbar
        open={toast}
        autoHideDuration={6000}
        onClose={() => setToast(false)}
        message={"Message Sent"}
      />
    </>
  );
};
