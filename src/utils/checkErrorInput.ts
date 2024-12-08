import { FormikProps, FormikValues } from 'formik';

export const checkInput = <T extends FormikValues>(formik: FormikProps<T>, name: keyof T) => {
  if (name in formik.errors && name in formik.touched) return formik.errors[name];

  return '';
};
