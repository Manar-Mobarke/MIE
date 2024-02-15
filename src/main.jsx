import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { CssBaseline } from "@mui/material";

// theme black
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Header from "./util/Header.jsx";

const theme = createTheme({
  palette: {
    mode: "dark",
  },
});

// TODO : Dialog for project details
// TODO : SkillMe DESIGN abstraction with import AddToQueueIcon from '@mui/icons-material/AddToQueue';
// TODO : In the form 'main.jsx' add the default data for the project and then the a stepper pagination for every team member - handle the number of members -, and defining the team mentor for the group as primary key.
// ! ENGLISH ONLY
// TODO : try arabic english formatting

ReactDOM.createRoot(document.getElementById("root")).render(
  <>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Header />
      <App />
    </ThemeProvider>
  </>
);
