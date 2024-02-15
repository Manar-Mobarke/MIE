import {
  Box,
  Card,
  CardContent,
  CardMedia,
  Grid,
  Typography,
} from "@mui/material";

export default function Projects() {
  const projects = [
    {
      projectName: "Project 1",
      projectDescription: "Project 1 Description",
      projectImg: "https://picsum.photos/200",
    },
    {
      projectName: "Project 2",
      projectDescription: "Project 2 Description",
      projectImg: "https://picsum.photos/200",
    },
    {
      projectName: "Project 3",
      projectDescription: "Project 3 Description",
      projectImg: "https://picsum.photos/200",
    },
    {
      projectName: "Project 4",
      projectDescription: "Project 4 Description",
      projectImg: "https://picsum.photos/200",
    },
  ];
  return (
    <>
      <h1>Projects</h1>
      <Grid container>
        {projects.map((project, index) => (
          <Grid item key={index} xs="1" sm="4" sx={{ padding: "10px" }}>
            <Card className="project">
              <CardMedia
                component="img"
                alt={project.projectName}
                height="200"
                width={200}
                image={project.projectImg}
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  {project.projectName}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {project.projectDescription}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </>
  );
}
