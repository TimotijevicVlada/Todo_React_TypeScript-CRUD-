//I need optional keys inside this object
import { ValidationProps } from "../types/types";

//Custom form validation
export const validate = (values: ValidationProps) => {
  //Or it can be const errors = <ValidationProps>{}
  const errors = {} as ValidationProps;

  if (!values.title) {
    errors.title = "Title is required!";
  } else if (values.title.length < 2 || values.title.length > 15) {
    errors.title = "Must be beteween 2 and 15 caracters!";
  }

  if (!values.description) {
    errors.description = "Description is required!";
  } else if (
    values.description.length < 5 ||
    values.description.length > 20
  ) {
    errors.description = "Must be beteween 5 and 20 caracters!";
  }

  if (!values.date) {
    errors.date = "Date is required!";
  }

  return errors;
};