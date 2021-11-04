import { useFormik } from 'formik';

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

  return errors;
};

function App() {

  const formik = useFormik({
    initialValues: {
      nombre: '',
      apellido: '',
      email: ''
    },
    validate,
    onSubmit: values => console.log(values)
  });

  return (
    <form onSubmit={formik.handleSubmit}>
      <label>Nombre</label>
      <input 
        type="text"
        {...formik.getFieldProps('nombre')}
      />
      {formik.touched.nombre && formik.errors.nombre 
        ? <div>{formik.errors.nombre}</div> 
        : null
      }
      <br/>
      <label>Apellido</label>
      <input 
        type="text"
        {...formik.getFieldProps('apellido')}
      />
      {formik.touched.apellido && formik.errors.apellido 
        ? <div>{formik.errors.apellido}</div> 
        : null
      }
      <br/>
      <label>Email</label>
      <input 
        type="text"
        {...formik.getFieldProps('email')}
      />
      {formik.touched.email && formik.errors.email 
        ? <div>{formik.errors.nombre}</div>
        : null
      }
      <br/>
      <button type='submit'>Enviar</button>
    </form>
  );
}

export default App;
