import { Box, TextField } from "@mui/material";
import "./addressForm.scss";
import { getIn } from "formik";

const AddressForm = ({
  type,
  values,
  errors,
  touched,
  handleBlur,
  handleChange,
}) => {
  const formattedName = (field) => `${type}.${field}`;
  const formattedError = (field) =>
    Boolean(
      getIn(touched, formattedName(field)) &&
        getIn(errors, formattedName(field))
    );
  const formattedHelper = (field) =>
    getIn(touched, formattedName(field)) && getIn(errors, formattedName(field));
  return (
    <Box className="addressFormWrapper">
      <TextField
        fullWidth
        label="First Name"
        type="text"
        onBlur={handleBlur}
        onChange={handleChange}
        value={values.firstName}
        name={formattedName("firstName")}
        error={formattedError("firstName")}
        helperText={formattedHelper("firstName")}
        className="twoSpanTextField"
      />
      <TextField
        fullWidth
        label="Last Name"
        type="text"
        onBlur={handleBlur}
        onChange={handleChange}
        value={values.lastName}
        name={formattedName("lastName")}
        error={formattedError("lastName")}
        helperText={formattedHelper("lastName")}
        className="twoSpanTextField"
      />
      <TextField
        fullWidth
        label="Country"
        type="text"
        onBlur={handleBlur}
        onChange={handleChange}
        value={values.country}
        name={formattedName("country")}
        error={formattedError("country")}
        helperText={formattedHelper("country")}
        className="fourSpanTextField"
      />
      <TextField
        fullWidth
        label="Street Address 1"
        type="text"
        onBlur={handleBlur}
        onChange={handleChange}
        value={values.street1}
        name={formattedName("street1")}
        error={formattedError("street1")}
        helperText={formattedHelper("street1")}
        className="twoSpanTextField"
      />
      <TextField
        fullWidth
        label="Street Address 2 (optional)"
        type="text"
        onBlur={handleBlur}
        onChange={handleChange}
        value={values.street2}
        name={formattedName("street2")}
        error={formattedError("street2")}
        helperText={formattedHelper("street2")}
        className="twoSpanTextField"
      />
      <TextField
        fullWidth
        label="City"
        type="text"
        onBlur={handleBlur}
        onChange={handleChange}
        value={values.city}
        name={formattedName("city")}
        error={formattedError("city")}
        helperText={formattedHelper("city")}
        className="twoSpanTextField"
      />
      <TextField
        fullWidth
        label="State"
        type="text"
        onBlur={handleBlur}
        onChange={handleChange}
        value={values.state}
        name={formattedName("state")}
        error={formattedError("state")}
        helperText={formattedHelper("state")}
        className="oneSpanTextField"
      />
      <TextField
        fullWidth
        label="Zip Code"
        type="text"
        onBlur={handleBlur}
        onChange={handleChange}
        value={values.zipCode}
        name={formattedName("zipCode")}
        error={formattedError("zipCode")}
        helperText={formattedHelper("zipCode")}
        className="oneSpanTextField"
      />
    </Box>
  );
};

export default AddressForm;
