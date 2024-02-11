import { Box, Grid, Paper, TextField, Typography } from "@mui/material";

function App() {
  return (
    <Box
      sx={{
        mx: {
          xs: "0%",
          sm: "25%",
        },
        mt: "10%",
        display: "flex",
        flexDirection: "column",
        gap: "3ch",
      }}
    >
      {/* Header content for description */}
      <Paper
        sx={{
          p: "3ch",
        }}
      >
        <Typography variant="p" fontWeight={"bolder"}>
          {" "}
          Enter you data{" "}
        </Typography>
        <br />
        <br />
        <Typography variant="p">
          {" "}
          sign in to reach out for the great event in aswan{" "}
        </Typography>
      </Paper>
      {/* Form content */}
      <Paper
        sx={{
          p: "3ch",
        }}
      >
        <Grid
          container
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "3ch",
          }}
        >
          {/* id : string
name : string
certificateName : string    
email : string
phone : number
birth  : date
university : string 
otherUniversity : string
faculty : string
otherFaculties : string
year : number
department : string
track : string */}

          {/* 5 is for title */}
          {/* 7 is for input */}

          <Grid
            container
            sx={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
            }}
          >
            <Grid item xs={5}>
              <Typography variant="p"> ID </Typography>
            </Grid>
            <Grid item xs={7}>
              <TextField variant="outlined" fullWidth />
            </Grid>
          </Grid>
          <Grid
            container
            sx={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
            }}
          >
            <Grid item xs={5}>
              <Typography variant="p"> Name </Typography>
            </Grid>
            <Grid item xs={7}>
              <TextField variant="outlined" fullWidth />
            </Grid>
          </Grid>

          <Grid
            container
            sx={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
            }}
          >
            <Grid item xs={5}>
              <Typography variant="p"> Certificate Name </Typography>
            </Grid>
            <Grid item xs={7}>
              <TextField variant="outlined" fullWidth />
            </Grid>
          </Grid>

          <Grid
            container
            sx={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
            }}
          >
            <Grid item xs={5}>
              <Typography variant="p"> Email </Typography>
            </Grid>
            <Grid item xs={7}>
              <TextField variant="outlined" fullWidth />
            </Grid>
          </Grid>

          <Grid
            container
            sx={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
            }}
          >
            <Grid item xs={5}>
              <Typography variant="p"> Phone </Typography>
            </Grid>
            <Grid item xs={7}>
              <TextField variant="outlined" fullWidth type="number" />
            </Grid>
          </Grid>
          <Grid
            container
            sx={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
            }}
          >
            <Grid item xs={5}>
              <Typography variant="p"> Birth </Typography>
            </Grid>
            <Grid item xs={7}>
              <TextField variant="outlined" fullWidth type="date" />
            </Grid>
          </Grid>

          <Grid
            container
            sx={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
            }}
          >
            <Grid item xs={5}>
              <Typography variant="p"> University </Typography>
            </Grid>
            <Grid item xs={7}>
              <TextField variant="outlined" fullWidth />
            </Grid>
          </Grid>

          <Grid
            container
            sx={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
            }}
          >
            <Grid item xs={5}>
              <Typography variant="p"> Other University </Typography>
            </Grid>
            <Grid item xs={7}>
              <TextField variant="outlined" fullWidth />
            </Grid>
          </Grid>

          <Grid
            container
            sx={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
            }}
          >
            <Grid item xs={5}>
              <Typography variant="p"> Faculty </Typography>
            </Grid>
            <Grid item xs={7}>
              <TextField variant="outlined" fullWidth />
            </Grid>
          </Grid>

          <Grid
            container
            sx={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
            }}
          >
            <Grid item xs={5}>
              <Typography variant="p"> Other Faculties </Typography>
            </Grid>
            <Grid item xs={7}>
              <TextField variant="outlined" fullWidth />
            </Grid>
          </Grid>

          <Grid
            container
            sx={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
            }}
          >
            <Grid item xs={5}>
              <Typography variant="p"> Year </Typography>
            </Grid>
            <Grid item xs={7}>
              <TextField variant="outlined" fullWidth />
            </Grid>
          </Grid>

          <Grid
            container
            sx={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
            }}
          >
            <Grid item xs={5}>
              <Typography variant="p"> Department </Typography>
            </Grid>
            <Grid item xs={7}>
              <TextField variant="outlined" fullWidth />
            </Grid>
          </Grid>

          <Grid
            container
            sx={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
            }}
          >
            <Grid item xs={5}>
              <Typography variant="p"> Track </Typography>
            </Grid>
            <Grid item xs={7}>
              <TextField variant="outlined" fullWidth />
            </Grid>
          </Grid>
        </Grid>
      </Paper>
    </Box>
  );
}

export default App;
