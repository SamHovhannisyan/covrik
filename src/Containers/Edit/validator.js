import * as Yup from 'yup';

export default Yup.object().shape({
  email: Yup.string()
      .email("Խնդրում ենք մուտքագրել ճիշտ էլ․ հասցե")
      .required("խնդրում ենք լրացնել Նշված դաշտը"),
  cupe: Yup.string()
      .max(15, 'Must be 15 characters or less')
      .required('Required'),
  model: Yup.string()
      .max(15, 'Must be 15 characters or less')
      .required('Required'),
  seria: Yup.string()
      .max(15, 'Must be 15 characters or less')
      .required('Required'),
  year: Yup.string()
      .max(15, 'Must be 15 characters or less')
      .required('Required'),
  radio1: Yup.string()
      .max(15, 'Must be 15 characters or less')
      .required('Required'),
  radio2: Yup.string()
      .max(15, 'Must be 15 characters or less')
      .required('Required'),
  radio3: Yup.string()
      .max(15, 'Must be 15 characters or less')
      .required('Required'),
  Left: Yup.string()
      .max(15, 'Must be 15 characters or less')
      .required('Required'),
  Right: Yup.string()
      .max(15, 'Must be 15 characters or less')
      .required('Required'),
});
