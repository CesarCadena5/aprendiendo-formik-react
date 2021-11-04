import { useField } from "formik";

const Select = ({label, ...props}) => {
    const [field, meta] = useField(props);
    return(
        <div>
            <label>{label}</label>
            <select {...field} {...props}/>
            {meta.error && meta.touched 
            ? <div>{meta.error}</div>
            : null}
        </div>
    );
};

export default Select;