import { Box, Button, Typography } from "@mui/material";
import StepperComponent from "../stepper/Stepper";
import React, { useEffect, useState } from "react";
import StepperForm from "../form/StepperForm";
import { step1Fields, step2Fields, step3Fields, step4Fields } from "../fields";
import { useDispatch, useSelector } from "react-redux";
import { setActiveStep } from "../redux/Reducer/Dashboard/DashboardPageReducer";

const forms = [step1Fields, step2Fields, step4Fields, step3Fields];

const DashboardFile = () => {
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
    <Box
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        height: "100vh",
      }}
    >
      <Box style={{ width: "50%" }}>
        <StepperComponent activeStep={activeStep} />
        {isSubmitted ? (
          <>
            <Typography
              variant="h5"
              style={{
                display: "flex",
                alignContent: "center",
                justifyContent: "center",
                border: "2px solid black",
                padding: 10,
                marginTop: 20,
              }}
            >
              Form submitted!
            </Typography>
            {allData.map((data, index) => (
              <Box
                style={{
                  border: "2px solid black",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignContent: "center",
                }}
                key={index}
              >
                {Object.entries(data).map(([key, value]) => (
                  <Typography style={{ marginTop: 10 }} key={key}>
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
