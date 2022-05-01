import * as yup from 'yup';

export default yup.object().shape({
  nameuser: yup.string().required().label('Name').max(20).matches(/^[A-Z]/g, 'First letter uppercase'),
  email: yup.string().required().label('Email').email().matches(/^[-.\w]+@([\w-]+\.)+[\w-]{2,4}$/gi, 'Not valid email'),
  tel: yup.string().required().label('Phone').max(12).matches(/^380[\d]{0,9}$/, 'Enter correct pnone format: 380xxxxxxxxx')
})

