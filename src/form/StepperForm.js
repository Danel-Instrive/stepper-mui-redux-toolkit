import { Button, TextField } from "@mui/material";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { useDispatch, useSelector } from "react-redux";
import * as Yup from "yup";
import { setActiveStep } from "../redux/Reducer/Dashboard/DashboardPageReducer";

const StepperForm = ({ formFields, forms, handleSubmit, setAllData }) => {
  const dispatch = useDispatch();
  const activeStep = useSelector((state) => state.dashboard.activeStep);
  console.log(activeStep, "activeStep");
  const initialValues = {};
  const validationSchema = {};
  formFields.forEach((field) => {
    initialValues[field.name] = "";
    if (field.validation) {
      validationSchema[field.name] = Yup.string().required(
        field.validation.errorMessage
      );
      if (field.validation.pattern) {
        validationSchema[field.name] = validationSchema[field.name].matches(
          field.validation.pattern,
          field.validation.patternErrorMessage
        );
      }
    }
  });

  const handleNext = () => {
    dispatch(setActiveStep(activeStep + 1));
  };
  return (
    <Formik
      enableReinitialize
      initialValues={initialValues}
      validationSchema={Yup.object(validationSchema)}
      onSubmit={(values, { setSubmitting, resetForm }) => {
        console.log(values);
        setAllData((prev) => [...prev, values]);
        resetForm();
        handleNext();
        if (activeStep === forms.length - 1) {
          handleSubmit();
        }
        setSubmitting(false);
      }}
    >
      {({ isSubmitting }) => (
        <Form autoComplete="off">
          {formFields?.map((field, index) => (
            <div key={index} style={{ marginBottom: 16, marginTop: 25 }}>
              <Field
                autoComplete="off"
                name={field.name}
                type={field.type}
                required={field.validation?.required}
                pattern={field.validation?.pattern}
                label={field.label}
                as={TextField}
                fullWidth
              />
              <ErrorMessage name={field.name}>
                {(msg) => <div style={{ color: "red" }}>{msg}</div>}
              </ErrorMessage>
            </div>
          ))}
          {activeStep === forms.length - 1 ? (
            <Button
              sx={{ m: 2 }}
              variant="contained"
              type="submit"
              disabled={isSubmitting}
            >
              Submit
            </Button>
          ) : (
            <Button
              sx={{ m: 2 }}
              variant="contained"
              type="submit"
              disabled={isSubmitting}
            >
              Next
            </Button>
          )}
        </Form>
      )}
    </Formik>
  );
};

export default StepperForm;
