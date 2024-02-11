import { Button, TextField } from "@mui/material";
import { useForm } from "react-hook-form";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DateField } from "@mui/x-date-pickers/DateField";

export default function Form() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({});

  const validateAge = (value) => {
    const birthDate = new Date(value);
    const currentDate = new Date();
    const age = currentDate.getFullYear() - birthDate.getFullYear();

    const minAge = 18;
    const maxAge = 60;

    return (
      (age >= minAge && age <= maxAge) ||
      `Age must be between ${minAge} and ${maxAge} years`
    );
  };

  const onSubmit = (data) => {
    console.log(data);
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <TextField
        label="Id"
        {...register("id", {
          required: "ID is required",
          pattern: {
            value: /^[0-9]{14}$/,
            message: "Invalid ID",
          },
        })}
        margin="normal"
        variant="outlined"
        required
        error={!!errors.id}
        helperText={errors.id ? errors.id.message : ""}
        sx={{ display: "block" }}
      />
      <TextField
        label="Name"
        {...register("name", {
          required: "Name is required",
          minLength: { value: 3, message: "Min length is 3" },
        })}
        error={!!errors.name}
        helperText={errors.name ? errors.name.message : ""}
        margin="normal"
        variant="outlined"
        sx={{ display: "block" }}
      />
      <TextField
        label="Certificate Name"
        {...register("certificateName", {
          required: "Certificate Name is required",
        })}
        error={!!errors.certificateName}
        helperText={
          errors.certificateName ? errors.certificateName.message : ""
        }
        margin="normal"
        variant="outlined"
        sx={{ display: "block" }}
      />
      <TextField
        label="Email"
        {...register("email", {
          required: "Email is required",
          pattern: {
            value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
            message: "Invalid email address",
          },
        })}
        error={!!errors.email}
        helperText={errors.email ? errors.email.message : ""}
        margin="normal"
        variant="outlined"
        sx={{ display: "block" }}
      />
      <TextField
        label="Phone"
        {...register("phone", {
          required: "Phone is required",
          pattern: {
            value: /^(01[0-2]|01[5-9]|02|03|010|011|012)[0-9]{8}$/,
            message: "Invalid Egyptian phone number",
          },
        })}
        margin="normal"
        variant="outlined"
        sx={{ display: "block" }}
      />
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <DemoContainer components={["DateField"]}>
          <DateField
            label="Birth"
            {...register("birth", {
              required: "Birthday is required",
              validate: validateAge,
            })}
            error={!!errors.birthday}
            helperText={errors.birth ? errors.birth.message : ""}
          />
        </DemoContainer>
      </LocalizationProvider>
      <TextField
        label="University"
        {...register("university", {
          required: "University is required",
        })}
        margin="normal"
        variant="outlined"
        sx={{ display: "block" }}
      />

      <Button
        type="submit"
        variant="outlined"
        sx={{ display: "block" }}
        color="primary"
      >
        Submit
      </Button>
    </form>
  );
}
