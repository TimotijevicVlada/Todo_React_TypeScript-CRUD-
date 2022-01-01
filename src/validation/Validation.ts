 type ValidationProps = {
     title: string
     description: string
     date: string
 }
 

 //Custom form validation
 export const validate = (values: ValidationProps) => {
    //Here I need other solution for the inital value of error!!!!!
    const errors: any = {}

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