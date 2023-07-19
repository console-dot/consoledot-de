import {
  Container,
  Grid,
  Typography,
  List,
  ListItem,
  Box,
  Button,
  TextField,
  Snackbar,
} from "@mui/material";
import { useState } from "react";
import { sendMessage } from "../../../api";

export const About = () => {
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
      <Container
        maxWidth="xl"
        sx={{
          p: 3,
          py: 8,
        }}
        id="About Us"
      >
        <Typography variant="h4" component={"h2"} mb={1} textAlign={"center"}>
          ABOUT US
        </Typography>
        <Typography variant="body1" component={"p"} mb={7} textAlign={"center"}>
          At ConsoleDot, we believe in the power of technology to transform
          businesses and drive societal progress. As a leading software
          solutions provider, we are dedicated to delivering high-quality and
          customer-centric experiences that enable enterprises, associates, and
          society to rise.
        </Typography>
        <Container maxWidth="md">
          <Grid container my={3} spacing={2}>
            <Grid
              item
              width={"100%"}
              md={3}
              sm={12}
              p={2}
              py={5}
              textAlign={"center"}
            >
              <Typography variant="h4" component={"p"} mb={1}>
                12+
              </Typography>
              <Typography
                variant="body2"
                component={"p"}
                mb={1}
                textAlign={"center"}
              >
                Countries Where We Have Happy Customers
              </Typography>
            </Grid>
            <Grid
              item
              width={"100%"}
              md={3}
              sm={12}
              p={2}
              py={5}
              textAlign={"center"}
            >
              <Typography variant="h4" component={"p"} mb={1}>
                26
              </Typography>
              <Typography
                variant="body2"
                component={"p"}
                mb={1}
                textAlign={"center"}
              >
                Experienced Employees
              </Typography>
            </Grid>
            <Grid
              item
              width={"100%"}
              md={3}
              sm={12}
              p={2}
              py={5}
              textAlign={"center"}
            >
              <Typography variant="h4" component={"p"} mb={1}>
                05
              </Typography>
              <Typography
                variant="body2"
                component={"p"}
                mb={1}
                textAlign={"center"}
              >
                Scrum Teams
              </Typography>
            </Grid>
            <Grid
              item
              width={"100%"}
              md={3}
              sm={12}
              p={2}
              py={5}
              textAlign={"center"}
            >
              <Typography variant="h4" component={"p"} mb={1}>
                06
              </Typography>
              <Typography
                variant="body2"
                component={"p"}
                mb={1}
                textAlign={"center"}
              >
                Fullstack Developers
              </Typography>
            </Grid>
          </Grid>
        </Container>
        <Typography variant="h5" component={"h2"} mb={1}>
          WHO WE ARE
        </Typography>
        <Typography variant="body1" component={"p"} mb={3}>
          ConsoleDot represents the connected world, where we leverage the
          latest advancements in information technology to create innovative
          solutions. Our team of experts is passionate about crafting software
          solutions that empower businesses across industries. With our
          comprehensive range of services and technical expertise, we are
          committed to helping our clients thrive in the digital era.
        </Typography>
        <Typography variant="h5" component={"h2"} mb={1}>
          OUR SERVICES
        </Typography>
        <Typography variant="body1" component={"p"} mb={3}>
          We offer a wide array of services to address the diverse needs of our
          clients:
        </Typography>
        <List>
          <ListItem>
            <Typography variant="body1" component={"p"} mb={3}>
              <span style={{ fontWeight: 700 }}>Web App Development:</span>{" "}
              Harness the power of the web with our dynamic and secure web
              applications. We build customized solutions that provide seamless
              user experiences and drive business growth.
            </Typography>
          </ListItem>
          <ListItem>
            <Typography variant="body1" component={"p"} mb={3}>
              <span style={{ fontWeight: 700 }}>Mobile App Development:</span>{" "}
              Reach your audience on the go with our cutting-edge mobile
              applications. From intuitive user interfaces to robust
              functionality, we create engaging experiences on iOS and Android
              platforms.
            </Typography>
          </ListItem>
          <ListItem>
            <Typography variant="body1" component={"p"} mb={3}>
              <span style={{ fontWeight: 700 }}>Blockchain Development:</span>{" "}
              Explore the potential of blockchain technology to revolutionize
              your business operations. Our experts develop secure and
              transparent blockchain solutions, enabling trust and efficiency
              across various industries.
            </Typography>
          </ListItem>
          <ListItem>
            <Typography variant="body1" component={"p"} mb={3}>
              <span style={{ fontWeight: 700 }}>
                Artificial Intelligence (AI):
              </span>{" "}
              Unleash the power of AI to gain valuable insights and enhance
              decision-making. Our AI solutions leverage machine learning,
              natural language processing, and computer vision to automate
              processes and create intelligent systems.
            </Typography>
          </ListItem>
          <ListItem>
            <Typography variant="body1" component={"p"} mb={3}>
              <span style={{ fontWeight: 700 }}>
                Cross-Platform App Development:
              </span>{" "}
              Maximize your reach and reduce development costs with our
              cross-platform app development services. We utilize modern
              frameworks to build versatile applications that work seamlessly
              across multiple devices.
            </Typography>
          </ListItem>
          <ListItem>
            <Typography variant="body1" component={"p"} mb={3}>
              <span style={{ fontWeight: 700 }}>Software Development:</span> As
              a full stack development company, we provide end-to-end software
              development services. From conceptualization to deployment, our
              team delivers robust, scalable, and secure software solutions
              tailored to your unique requirements.
            </Typography>
          </ListItem>
        </List>
      </Container>
      <Box sx={{ background: "#224575" }} p={3} py={8}>
        {/* WHY US */}
        <Container maxWidth="xl">
          <Typography
            variant="h4"
            component={"h2"}
            mb={8}
            textAlign={"center"}
            textTransform="uppercase"
            color={"#fff"}
          >
            Why Choose ConsoleDot?
          </Typography>
          <Grid container>
            <Grid
              item
              width={"100%"}
              sm={12}
              md={6}
              lg={3}
              sx={{
                background: "#224575",
                color: "#fff",
                "&:hover": {
                  background: "#0D7789",
                },
              }}
              py={3}
              p={2}
            >
              <Typography variant="h5" component={"h2"} mb={2}>
                Customer-Centric Approach
              </Typography>
              <Typography variant="body1" component={"p"} mb={3}>
                We place our clients at the heart of everything we do. Our team
                works closely with you to understand your specific needs and
                deliver personalized solutions that exceed your expectations.
              </Typography>
            </Grid>
            <Grid
              item
              width={"100%"}
              sm={12}
              md={6}
              lg={3}
              sx={{
                background: "#224575",
                color: "#fff",
                "&:hover": {
                  background: "#0D7789",
                },
              }}
              py={3}
              p={2}
            >
              <Typography variant="h5" component={"h2"} mb={2}>
                Technical Excellence
              </Typography>
              <Typography variant="body1" component={"p"} mb={3}>
                Our skilled professionals stay at the forefront of technological
                advancements. With expertise in cutting-edge tools and
                frameworks, we deliver innovative and future-proof solutions
                that drive your business forward.
              </Typography>
            </Grid>
            <Grid
              item
              width={"100%"}
              sm={12}
              md={6}
              lg={3}
              sx={{
                background: "#224575",
                color: "#fff",
                "&:hover": {
                  background: "#0D7789",
                },
              }}
              py={3}
              p={2}
            >
              <Typography variant="h5" component={"h2"} mb={2}>
                Reliability and Quality
              </Typography>
              <Typography variant="body1" component={"p"} mb={3}>
                We are committed to delivering reliable, high-quality software
                solutions. Our rigorous quality assurance processes ensure that
                our deliverables are thoroughly tested and meet the highest
                industry standards.
              </Typography>
            </Grid>
            <Grid
              item
              width={"100%"}
              sm={12}
              md={6}
              lg={3}
              sx={{
                background: "#224575",
                color: "#fff",
                "&:hover": {
                  background: "#0D7789",
                },
              }}
              py={3}
              p={2}
            >
              <Typography variant="h5" component={"h2"} mb={2}>
                Collaborative Partnership
              </Typography>
              <Typography variant="body1" component={"p"} mb={3}>
                We believe in building strong relationships with our clients
                based on trust, transparency, and open communication. We work
                collaboratively to ensure that your vision is realized and your
                goals are achieved.
              </Typography>
            </Grid>
          </Grid>
        </Container>
      </Box>
      <Container maxWidth="xl" id="Contact Us">
        <Grid container display={"flex"} alignItems="center" my={3} spacing={4}>
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
