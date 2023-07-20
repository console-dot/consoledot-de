import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Container,
  Grid,
  Typography,
} from "@mui/material";
import { Layout } from "../Layout/Layout";
import { Header } from "./Header";
import { useEffect, useState } from "react";
import { FILE_URL, getProjectsbyId, getSingleCustomer } from "../../api";
import { useNavigate } from "react-router-dom";

export const Projects = () => {
  const [projects, setProjects] = useState([]);
  const [customer, setCustomer] = useState({});
  const navigate = useNavigate();
  useEffect(() => {
    getSingleCustomer(window.location?.pathname.split("/")[2]).then((res) =>
      setCustomer(res)
    );
    getProjectsbyId(window.location?.pathname.split("/")[2]).then((res) =>
      setProjects(res)
    );
  }, []);
  return (
    <Layout>
      <Header title={customer?.name} logo={customer?.logo} />
      <Container maxWidth="xl" sx={{ p: 2, py: 8 }}>
        <Grid container spacing={2}>
          {projects.map((project, index) => (
            <Grid mb={3} key={index} item lg={3} md={4} sm={12} width={"100%"}>
              <Card sx={{ width: "100%" }}>
                <CardMedia
                  sx={{ height: 140 }}
                  image={`${FILE_URL}/${project?.hero}`}
                  title={project?.title}
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    {project?.title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    <span style={{ fontWeight: "bold" }}>Start Date: </span>
                    {project?.start_date}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    <span style={{ fontWeight: "bold" }}>End Date: </span>
                    {project?.end_date}
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button
                    onClick={() => navigate(`/case_study/${project?._id}`)}
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
                  >
                    View Case Study
                  </Button>
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Layout>
  );
};
