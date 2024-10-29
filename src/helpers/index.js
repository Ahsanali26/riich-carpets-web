export const regex = {
  email: /^[\w-\\.]+@([\w-]+\.)+[\w-]{2,4}$/,
  number: /(\+\d{1,3}\s?)?((\(\d{3}\)\s?)|(\d{3})(\s|-?))(\d{3}(\s|-?))(\d{4})(\s?(([E|e]xt[:|.|]?)|x|X)(\s?\d+))?/g,
};

export const isEmpty = (value) => {
  return (
    value === undefined ||
    value === null ||
    (typeof value === "object" &&
      (Object.keys(value).length === 0 ||
        Object.keys(value).every((key) => isEmpty(value[key])))) ||
    (typeof value === "string" && value.trim().length === 0)
  );
};

export const isFormValid = (form, setForm) => {
  return Object.keys(form).map((key) => {
    const regexValue = key.replace(/([a-z](?=[A-Z]))/g, "$1 ");
    if (regex[key]) {
      let value;
      let success;
      if (isEmpty(form[key]) || !regex[key].test(form[key])) {
        value = `Invalid ${
          regexValue.charAt(0).toUpperCase() + regexValue.slice(1)
        }`;
        success = false;
      } else {
        value = null;
        success = true;
      }
      setForm((prev) => ({
        ...prev,
        errors: {
          ...prev.errors,
          [key]: value,
        },
      }));
      return success;
    } else {
      let value;
      let success;
      if (isEmpty(form[key])) {
        value = `Invalid ${
          regexValue.charAt(0).toUpperCase() + regexValue.slice(1)
        }`;
        success = false;
      } else {
        value = null;
        success = true;
      }
      setForm((prev) => ({
        ...prev,
        errors: {
          ...prev.errors,
          [key]: value,
        },
      }));
      return success;
    }
  });
};
