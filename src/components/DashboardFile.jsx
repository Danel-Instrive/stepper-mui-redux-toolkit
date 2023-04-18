import { Box, Button, Typography } from "@mui/material";
import StepperComponent from "../stepper/Stepper";
import React, { useEffect, useState } from "react";
import StepperForm from "../form/StepperForm";
import { step1Fields, step2Fields, step3Fields, step4Fields } from "../fields";
import { useDispatch, useSelector } from "react-redux";
import { setActiveStep } from "../redux/Reducer/Dashboard/DashboardPageReducer";
import { makeStyles } from "@mui/styles";

const forms = [step1Fields, step2Fields, step4Fields, step3Fields];

const useStyles = makeStyles((theme) => ({
  boxContainer: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    height: "100vh",
  },
  typographyContainer: {
    display: "flex",
    alignContent: "center",
    justifyContent: "center",
    border: "2px solid black",
    padding: 10,
    marginTop: 20,
  },
  mapStyle: {
    border: "2px solid black",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignContent: "center",
  },
}));

const DashboardFile = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [allData, setAllData] = useState([]);
  const activeStep = useSelector((state) => state.dashboard.activeStep);
  console.log(activeStep);
  const handleBack = () => {
    dispatch(setActiveStep(activeStep - 1));
  };

  const handleSubmit = () => {
    setIsSubmitted(true);
  };

  useEffect(() => {
    console.log(allData, "allData");
  }, [allData]);
  return (
    <Box className={classes.boxContainer}>
      <Box sx={{ width: "50%" }}>
        <StepperComponent activeStep={activeStep} />
        {isSubmitted ? (
          <>
            <Typography variant="h5" className={classes.typographyContainer}>
              Form submitted!
            </Typography>
            {allData.map((data, index) => (
              <Box className={classes.mapStyle} key={index}>
                {Object.entries(data).map(([key, value]) => (
                  <Typography sx={{ mt: 10 }} key={key}>
                    <strong>{key}:</strong> {value}
                  </Typography>
                ))}
              </Box>
            ))}
          </>
        ) : (
          <>
            <StepperForm
              setAllData={setAllData}
              formFields={forms[activeStep]}
              forms={forms}
              handleSubmit={handleSubmit}
            />
            {activeStep === 0 ? null : (
              <Button sx={{ m: 2 }} variant="contained" onClick={handleBack}>
                Back
              </Button>
            )}
          </>
        )}
      </Box>
    </Box>
  );
};

export default DashboardFile;
