import {
  Button,
  Container,
  Grid,
  Snackbar,
  TextField,
  Typography,
} from "@mui/material";
import { useEffect, useState } from "react";
import {
  applyNow,
  getSingleCity,
  getSingleDepartment,
  getSingleJob,
} from "../../api";
import { Layout } from "../Layout";

export const Job = () => {
  const [toast, setToast] = useState(false);
  const [disableSend, setDisableSend] = useState(false);
  const [department, setDepartment] = useState({});
  const [city, setCity] = useState({});
  const [job, setJob] = useState({});
  const handleSendMessage = (e) => {
    e.preventDefault();
    setDisableSend(true);
    const formData = new FormData(e.currentTarget);
    applyNow({
      name: `${formData.get("fname")} ${formData.get("lname")}`,
      email: formData.get("email"),
      phone: formData.get("phone"),
      job_ref: formData.get("job_ref"),
      myFile: formData.get("myFile"),
    }).then(() => {
      setToast(true);
      e.target.reset();
      setDisableSend(false);
    });
  };
  useEffect(() => {
    getSingleJob(window.location.pathname.split("/")[2])
      .then((res) => {
        setJob(res);
        return res;
      })
      .then((res) => {
        getSingleDepartment(res?.department).then((res) => setDepartment(res));
        getSingleCity(res?.city).then((res) => setCity(res));
      });
  }, []);
  return (
    <Layout>
      <Container maxWidth="xl" sx={{ p: 2, py: 8 }}>
        <Typography variant="h3" component={"h1"} mb={7} textAlign={"center"}>
          {job?.title}
        </Typography>
        <Grid container spacing={2}>
          <Grid item sm={12} md={6} p={7}>
            <Typography
              variant="h4"
              component={"h2"}
              mb={4}
              textAlign={"center"}
            >
              JOB DESCRIPTION
            </Typography>
            <Typography variant="body1" component={"p"} mb={1}>
              <span style={{ fontWeight: 700 }}>Department: </span>
              {department?.title}
            </Typography>
            <Typography variant="body1" component={"p"} mb={1}>
              <span style={{ fontWeight: 700 }}>Location: </span>
              {city?.title}
            </Typography>
            <Typography variant="body1" component={"p"} mb={1}>
              <span style={{ fontWeight: 700 }}>
                Total{" "}
                {!isNaN(job?.positions) && parseInt(job?.positions) > 1
                  ? "Postions"
                  : "Position"}
                :{" "}
              </span>
              {job?.positions}
            </Typography>
            <Typography variant="body1" component={"p"} mb={1}>
              <span style={{ fontWeight: 700 }}>Minimum Experience: </span>
              {job?.experience}
            </Typography>
            <Typography variant="body1" component={"p"} mb={3}>
              <span style={{ fontWeight: 700 }}>Minimum Qualification: </span>
              {job?.qualification}
            </Typography>
            <Typography variant="body1" component={"p"} mb={3}>
              <span style={{ fontWeight: 700 }}>Summary: </span>
              {job?.summary}
            </Typography>
            <Typography variant="body1" component={"p"} mb={3}>
              <span style={{ fontWeight: 700 }}>Responsibilities: </span>
              {job?.responsibilities}
            </Typography>
            <Typography variant="body1" component={"p"} mb={3}>
              <span style={{ fontWeight: 700 }}>Requirements: </span>
              {job?.technologies}
            </Typography>

            {/* <Chip label="Chip Outlined" variant="outlined" /> */}
          </Grid>
          <Grid item sm={12} md={6} p={7}>
            <Typography
              variant="h4"
              component={"h2"}
              mb={4}
              textAlign={"center"}
            >
              APPLY NOW
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
                    name="phone"
                    type={"tel"}
                    placeholder="Phone Number"
                    label="Phone Number"
                    fullWidth
                    required
                  />
                </Grid>
                <Grid item width={"100%"} sm={12}>
                  <Typography variant="body2" component={"label"} htmlFor="cv">
                    CV/Resume *
                  </Typography>
                  <TextField
                    name="myFile"
                    id="cv"
                    type={"file"}
                    fullWidth
                    required
                  />
                </Grid>
              </Grid>
              <input type="hidden" name="job_ref" value={job?._id} />
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
                {!disableSend ? "Apply for this job" : "Sending..."}
              </Button>
            </form>
          </Grid>
        </Grid>
      </Container>
      <Snackbar
        open={toast}
        autoHideDuration={6000}
        onClose={() => setToast(false)}
        message={"Job application was sent to ConsoleDot"}
      />
    </Layout>
  );
};
