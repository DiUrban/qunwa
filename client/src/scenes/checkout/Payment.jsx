import "./payment.scss";
import { Box, Typography, TextField } from "@mui/material";
const Payment = ({
  values,
  errors,
  touched,
  handleBlur,
  handleChange,
  setFieldValue,
}) => {
  return (
    <Box className="paymentWrapper">
      {/*Contact Info*/}
      <Typography className="contactInfoText">Contact Info</Typography>
      <TextField
        fullWidth
        label="Email"
        type="text"
        onBlur={handleBlur}
        onChange={handleChange}
        value={values.email}
        name="email"
        error={!!touched.email && !!errors.email}
        helperText={touched.email && errors.emai}
        className="emailField"
      />
      <TextField
        fullWidth
        label="Phone Number"
        type="text"
        onBlur={handleBlur}
        onChange={handleChange}
        value={values.phoneNumber}
        name="phoneNumber"
        error={!!touched.phoneNumber && !!errors.phoneNumber}
        helperText={touched.phoneNumber && errors.phoneNumber}
        className="phoneNumberField"
      />
    </Box>
  );
};

export default Payment;
