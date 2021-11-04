import { Formik, Form, Field, ErrorMessage } from 'formik';
import Select from './components/Select';
import Radio from './components/Radio';
import CheckBox from './components/CheckBox';
import TextInput from './components/TextInput';

const validate = (values) => {
  const errors = {};

  if(!values.nombre) {
    errors.nombre = 'Requerido';
  } else if(values.nombre.length < 5) {
    errors.nombre = 'Nombre muy corto';
  }

  if(!values.apellido) {
    errors.apellido = 'Requerido';
  } else if(values.apellido.length < 5) {
    errors.apellido = 'Apellido muy corto';
  }

  if(!values.email) {
    errors.email = 'Requerido';
  } else if(values.email.length < 5) {
    errors.email = 'Email muy corto';
  }

  if(!values.radio) {
    errors.radio = 'Requerido';
  }

  return errors;
};

function App() {
  return (
    <Formik 
        initialValues={{nombre: '', apellido: '', email: '', select: '', radio: ''}}
        validate={validate}
        onSubmit={values => console.log(values)}
    >
      <Form>
        <TextInput name='nombre' label='Nombre1'/>
        {/* <label>Nombre</label>
        <Field name='nombre' type='text'/>
        <ErrorMessage name='nombre'/> */}
        <br/>
        <label>Apellido</label>
        <Field name='apellido' type='text'/>
        <ErrorMessage name='apellido'/>
        <br/>
        <label>Email</label>
        <Field name='email' type='text'/>
        <ErrorMessage name='email'/>
        <br/>
        <CheckBox name='check'>Aceptar terminos</CheckBox>
        <Select name='select' label='Tipo Emocion'>
          <option value="">Seleccione</option>
          <option value="triste">Triste</option>
          <option value="feliz">Feliz</option>
          <option value="contento">Contento</option>
        </Select>
        <Radio value='triste' name='radio' label='Triste'/>
        <Radio value='feliz' name='radio' label='Feliz'/>
        <Radio value='contento' name='radio' label='Contento'/>
        <ErrorMessage name='radio'/>
        <br/>
        <button type='submit'>Enviar</button>
      </Form>
    </Formik>
  );
}

export default App;