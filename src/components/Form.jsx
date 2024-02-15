import {
  Autocomplete,
  Box,
  Grid,
  Paper,
  TextField,
  Typography,
} from "@mui/material";
import { useRef, useState } from "react";
import { useForm, Controller } from "react-hook-form";
import LoadingButton from "@mui/lab/LoadingButton";
import Button from "@mui/material/Button";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
// import ReCAPTCHA from "react-google-recaptcha";

// theme black
import { CssBaseline } from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";

import Info from "../Info";

export function Form() {
  const [severity, setSeverity] = useState("alert");
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [response, setResponse] = useState("");

  const paymentRef = useRef(null);
  console.log("Abdo Tolba was here :)");

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    // const captchaTempValue = await recaptchaRef.current.executeAsync();

    data["image"] = paymentRef.current?.files[0] || "default";
    // data["Captcha"] = captchaTempValue;

    delete data["paymentProof"];

    const formData = new FormData();

    for (const key in data) {
      formData.append(key, data[key]);
    }

    setIsSubmitting(true);
    setLoading(true);

    console.log(data);

    setIsSubmitting(false);
    setLoading(false);
  };

  return (
    <Box
      component={"form"}
      onSubmit={handleSubmit(onSubmit)}
      sx={{
        // margin: {
        //   sm: "10vw 10vw 5vw 30vw",
        //   xs: "3ch",
        // },

        // display: "flex",
        // flexDirection: "column",
        // gap: "3ch",
        // "& .MuiGrid-container": {},

        // //  ! Make the helper text red and bold. also on the top of the input
        "& p.MuiFormHelperText-root": {
          // position: "absolute",
          // color: "#f44336",
          color: "rgba(255, 255, 255, 0.7) ",
          // textAlign: "center",
          // fontWeight: "bolder",
          direction: "ltr",
          textAlign: "left",
          // ! Add a symbol before the helper text
          "&::before": {
            content: '"ⓘ "',
          },
        },

        // "& .MuiFormLabel-root": {
        //   color: "white",
        //   fontWeight: "bolder",
        // },

        // "& .MuiPaper-root.myPaper": {
        //   border: "1px solid white",
        // },

        // "& .myGridLabel": {
        //   display: {
        //     sm: "flex",
        //     xs: "none",
        //   },
        // },
      }}
    >
      {/* Header content for description */}
      <Paper
        className="myPaper"
        sx={{
          p: {
            sm: "3ch",
            xs: "1ch",
          },
          py: {
            xs: "2ch",
          },
          "&.myPaper ": {
            borderColor: "#a72d25 !important",
            borderWidth: "2px !important",
          },
        }}
        elevation={8}
      >
        <Typography variant="p" fontWeight={"bolder"}>
          By submitting this form, you confirm that you have read and agree to
          our terms and conditions.
        </Typography>
        <br />
        <br />
        <Typography
          variant="p"
          sx={{
            fontSize: ".8rem",
          }}
        >
          <div className="bg-red-100 border border-red-400 text-red-700 pl-7 pr-3 my-3 py-4 rounded relative">
            <Box
              container="ul"
              sx={{
                "& li": {
                  mb: "1.3ch",
                  "&::marker": {
                    content: '"➜ "',
                  },
                },
              }}
            >
              <li>
                Attendees have to bring their own laptops, as IEEE Aswan &
                CREATIVA won&#39;t afford any PCs.
              </li>
              <li>
                Attendees have to bring pens, notebooks, and any other
                stationeries.
              </li>
              <li>
                Attendees will receive digital certificates upon attending at
                least 80% of the course.
              </li>
              <li>
                If any entered data are fake, the ticket shall be canceled
                without a refund.
              </li>
              <li>Your email will be included in our email list.</li>
              <li>
                We do not accept any responsibility for any loss or damage to
                personal property brought to the venue.
              </li>
            </Box>
            <br />
            <h2>
              <b>
                IEEE Aswan SB reserves the right to take action against any
                person who breaches any of the above terms and conditions.
              </b>
            </h2>
          </div>
        </Typography>
      </Paper>
      {/* Form content */}
      <Paper
        className="myPaper"
        sx={{
          // background:
          //   "linear-gradient(180deg, rgba(106,106,106,.7) 0%, rgba(31,31,31,1) 75%, rgba(105,105,105,.5) 100%)",
          color: "white",

          p: "3ch",
        }}
        elevation={8}
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
          <Grid
            container
            sx={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
            }}
          >
            <Grid className="myGridLabel" item xs={0} sm={5}>
              <Typography className="myLabel" variant="p">
                Project name
              </Typography>
            </Grid>
            <Grid item xs={12} sm={7}>
              <TextField
                disabled={isSubmitting}
                color={!errors.projectName ? "success" : "success"}
                variant="outlined"
                fullWidth
                type="text"
                label={
                  errors.projectName
                    ? errors.projectName.message
                    : "Project Name"
                }
                {...register("projectName", {
                  required: "project name is required",
                })}
                error={!!errors.projectName}
                helperText={"The name of the project you are working on"}
              />
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
            <Grid className="myGridLabel" item xs={0} sm={5}>
              <Typography className="myLabel" variant="p">
                Number of Members
              </Typography>
            </Grid>
            <Grid item xs={12} sm={7}>
              <TextField
                disabled={isSubmitting}
                color={!errors.numberOfMembers ? "success" : "success"}
                variant="outlined"
                fullWidth
                type="number"
                label={
                  errors.numberOfMembers
                    ? errors.numberOfMembers.message
                    : "Number of Members"
                }
                {...register("numberOfMembers", {
                  required: "Number of members in the project is required",
                  // min 1, max 10
                  min: { value: 1, message: "Min is 1" },
                  max: { value: 10, message: "Max is 10" },
                })}
                error={!!errors.numberOfMembers}
                helperText={"The number of members in the project"}
              />
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
            <Grid className={"myGridLabel"} item sm={5} xs={0}>
              <Typography className={"myLabel"} variant="p">
                {" "}
                Project Brief Details{" "}
              </Typography>
            </Grid>

            <Grid item sm={7} xs={12}>
              <TextField
                disabled={isSubmitting}
                color={!errors.projectBrief ? "success" : "success"}
                variant="outlined"
                fullWidth
                label={
                  errors.projectBrief
                    ? errors.projectBrief.message
                    : "Project Brief Details"
                }
                {...register("projectBrief", {
                  required: "Project Brief Details is required",
                  minLength: { value: 10, message: "Min length is 10" },
                  maxLength: { value: 100, message: "Max length is 100" },
                })}
                error={!!errors.projectBrief}
                helperText={"Provide a brief description of your project"}
              />
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
            <Grid item xs={0} sm={5}>
              <Typography variant="p"> Project Cover image</Typography>
            </Grid>

            <Grid item sm={7} xs={12}>
              <p
                style={{
                  direction: "ltr",
                  textAlign: "left",
                }}
              >
                Project cover image that will be used to deemostrant your
                project
              </p>
              <br />
              <TextField
                fullWidth
                sx={{
                  // position: "absolute",
                  "& fieldset": {
                    border: "0",
                  },
                  "& .MuiButtonBase-root": {},

                  "& .MuiInputBase-input.MuiOutlinedInput-input.Mui-disabled.MuiInputBase-inputAdornedStart":
                    {
                      position: "absolute",
                      transform: "translateY(100%)",
                    },

                  "& label.MuiFormLabel-root": {
                    position: "relative",
                    color: "#f44336",
                  },
                }}
                value={paymentRef.current?.files[0]?.name || ""}
                {...register("paymentProof", {
                  required: "payment Proof is required",
                })}
                disabled
                label={errors.paymentProof ? errors.paymentProof.message : ""}
                error={!!errors.paymentProof}
                InputProps={{
                  startAdornment: (
                    <Button
                      variant="contained"
                      component="label"
                      disabled={isSubmitting}
                      fullWidth
                      color={
                        errors.paymentProof
                          ? "error"
                          : paymentRef.current?.files[0]
                          ? "success"
                          : "info"
                      }
                      startIcon={<CloudUploadIcon />}
                    >
                      Upload File
                      <input
                        {...register("paymentProof", {
                          required: "payment Proof is required",
                        })}
                        style={{
                          clip: "rect(0 0 0 0)",
                          clipPath: "inset(50%)",
                          height: 1,
                          overflow: "hidden",
                          position: "absolute",
                          bottom: 0,
                          left: 0,
                          whiteSpace: "nowrap",
                          width: 100,
                        }}
                        ref={paymentRef}
                        accept=".png, .jpg, .jpeg"
                        disabled={isSubmitting}
                        type="file"
                      />
                    </Button>
                  ),
                }}
              />
            </Grid>
          </Grid>
        </Grid>
        <br />
        <br />
        <br />

        <LoadingButton
          type="button"
          variant="contained"
          sx={{ display: "block" }}
          color="success"
          // loading={loading}
        >
          Next
        </LoadingButton>
      </Paper>
      <Info
        open={open}
        response={response}
        setOpen={setOpen}
        severity={severity}
      />

      {/* <ReCAPTCHA
          size="invisible"
          ref={recaptchaRef}
          sitekey=""
          badge="bottomright"
          theme="dark"
        /> */}
    </Box>
  );
}

function Closed() {
  return (
    <Box
      sx={{
        bgcolor: "#00000090",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Box bgcolor={"#000"}>
        <div className="test">
          Form closed
          <p className="small">– SEE YOU TOMORROW – </p>
          <p>BE IN</p>
        </div>
        <svg xmlns="http://www.w3.org/2000/svg" version="1.1">
          <defs>
            <filter id="squiggly-0">
              <feTurbulence
                id="turbulence"
                baseFrequency="0.02"
                numOctaves={3}
                result="noise"
                seed={0}
              />
              <feDisplacementMap
                id="displacement"
                in="SourceGraphic"
                in2="noise"
                scale={6}
              />
            </filter>
            <filter id="squiggly-1">
              <feTurbulence
                id="turbulence"
                baseFrequency="0.02"
                numOctaves={3}
                result="noise"
                seed={1}
              />
              <feDisplacementMap in="SourceGraphic" in2="noise" scale={8} />
            </filter>
            <filter id="squiggly-2">
              <feTurbulence
                id="turbulence"
                baseFrequency="0.02"
                numOctaves={3}
                result="noise"
                seed={2}
              />
              <feDisplacementMap in="SourceGraphic" in2="noise" scale={6} />
            </filter>
            <filter id="squiggly-3">
              <feTurbulence
                id="turbulence"
                baseFrequency="0.02"
                numOctaves={3}
                result="noise"
                seed={3}
              />
              <feDisplacementMap in="SourceGraphic" in2="noise" scale={8} />
            </filter>
            <filter id="squiggly-4">
              <feTurbulence
                id="turbulence"
                baseFrequency="0.02"
                numOctaves={3}
                result="noise"
                seed={4}
              />
              <feDisplacementMap in="SourceGraphic" in2="noise" scale={6} />
            </filter>
          </defs>
        </svg>
      </Box>
    </Box>
  );
}

export default function Main() {
  const theme = createTheme({
    palette: {
      mode: "dark",
    },
  });
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Form />
      {/* <Closed /> */}
    </ThemeProvider>
  );
}
