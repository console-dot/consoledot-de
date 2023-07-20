import {
  Button,
  Card,
  CardActions,
  CardContent,
  Container,
  Grid,
  Typography,
} from "@mui/material";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getAllCareers, getAllDepartments } from "../../api";
import { Layout } from "../Layout";
import { Header } from "./Header";

export const Careers = () => {
  const [careers, setCareers] = useState([]);
  const [departments, setDepartments] = useState([]);
  const navigate = useNavigate();
  useEffect(() => {
    getAllDepartments().then((res) => setDepartments(res));
    getAllCareers().then((res) => setCareers(res));
  }, []);
  return (
    <Layout>
      <Header />
      <Container maxWidth="xl" sx={{ p: 2, py: 8 }}>
        <Typography variant="h4" component={"h2"} mb={7}>
          Open{" "}
          {careers.filter(
            (career) =>
              career?.status &&
              !isNaN(career?.positions) &&
              parseInt(career?.positions) > 0
          ).length > 1
            ? "Positions"
            : "Position"}{" "}
          (
          {
            careers.filter(
              (career) =>
                career?.status &&
                !isNaN(career?.positions) &&
                parseInt(career?.positions) > 0
            ).length
          }
          )
        </Typography>
        <Grid container spacing={2}>
          {careers.map(
            (career, index) =>
              career?.status &&
              !isNaN(career?.positions) &&
              parseInt(career?.positions) > 0 && (
                <Grid
                  mb={3}
                  key={index}
                  item
                  lg={3}
                  md={4}
                  sm={12}
                  width={"100%"}
                >
                  <Card sx={{ minWidth: 275 }}>
                    <CardContent>
                      <Typography
                        sx={{ fontSize: 14 }}
                        color="text.secondary"
                        gutterBottom
                      >
                        {
                          departments.find(
                            (department) =>
                              department?._id === career?.department
                          )?.title
                        }
                      </Typography>
                      <Typography variant="h5" component="div">
                        {career?.title}
                      </Typography>
                      <Typography color="text.secondary">
                        {career?.positions} open{" "}
                        {!isNaN(career?.positions) &&
                        parseInt(career?.positions) > 1
                          ? "positons"
                          : "position"}
                      </Typography>
                      <Typography sx={{ mb: 1.5 }} color="text.secondary">
                        Minimum Experience {career?.experience}
                      </Typography>
                      <Typography variant="body2">
                        {career?.qualification}
                      </Typography>
                    </CardContent>
                    <CardActions>
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
                        onClick={() => navigate(`/job/${career?._id}`)}
                      >
                        View Job
                      </Button>
                    </CardActions>
                  </Card>
                </Grid>
              )
          )}
        </Grid>
      </Container>
    </Layout>
  );
};
