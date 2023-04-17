export const step1Fields = [
  {
    name: "firstName",
    label: "First Name",
    type: "text",
    validation: {
      required: true,
    },
  },
  {
    name: "lastName",
    label: "Last Name",
    type: "text",
    validation: {
      required: true,
    },
  },
  {
    name: "email",
    label: "Email",
    type: "email",
    validation: {
      required: true,
      pattern: "^\\S+@\\S+$",
    },
  },
];
export const step2Fields = [
  {
    name: "addressLine1",
    label: "Address Line 1",
    type: "text",
    validation: {
      required: true,
    },
  },
  {
    name: "addressLine2",
    label: "Address Line 2",
    type: "text",
  },
  {
    name: "city",
    label: "City",
    type: "text",
    validation: {
      required: true,
    },
  },
  {
    name: "state",
    label: "State",
    type: "text",
    validation: {
      required: true,
    },
  },
  {
    name: "zipCode",
    label: "Zip Code",
    type: "text",
    validation: {
      required: true,
      pattern: "^[0-9]{5}(?:-[0-9]{4})?$",
    },
  },
];
export const step4Fields = [
  {
    name: "other",
    label: "Extra Info",
    type: "text",
  },
];

export const step3Fields = [
  {
    name: "creditCardNumber",
    label: "Credit Card Number",
    type: "text",
    validation: {
      required: true,
      pattern: "^[0-9]{16}$",
    },
  },
  {
    name: "expirationDate",
    label: "Expiration Date",
    type: "text",
    validation: {
      required: true,
      pattern: "^(0[1-9]|1[0-2])\\/?([0-9]{4}|[0-9]{2})$",
    },
  },
  {
    name: "cvv",
    label: "CVV",
    type: "text",
    validation: {
      required: false,
    },
  },
];
