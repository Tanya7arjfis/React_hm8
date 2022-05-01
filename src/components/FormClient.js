import { useFormik, Formik, Form, Field, ErrorMessage } from 'formik';
import Submitbutton from '../components/Submitbutton';
import FormSchema from '../validation/FormSchema';

export default function FormClient() {
  const initvalue = {
    nameuser: '',
    email: '',
    tel: ''
  }
  
  function onFormSubmit(values) {
    console.log(values);
  }

  return (
    initvalue && (
      <Formik
        initialValues={initvalue}
        onSubmit={onFormSubmit}
        validationSchema={FormSchema}
      >
        <Form>
          <div>
            <label>
              Name:
              <Field name='nameuser' />
              <ErrorMessage name='nameuser' className='error' component='span' />
            </label>
          </div>
          <div>
            <label>
              Email:
              <Field name='email' type='email' />
              <ErrorMessage name='email' className='error' component='span' />
            </label>
          </div>
          <div>
            <label>
              Phone:
              <Field name='tel' type='tel' />
              <ErrorMessage name='tel' className='error' component='span' />
            </label>
          </div>
          <Submitbutton />
        </Form>
      </Formik>
    )
  )
}
