import { useField } from "formik";

const Radio = ({label, ...props}) => {
    const [field] = useField({...props, type: 'radio'});
    console.log(field);
    return(
        <div>
            <label>{label}</label>
            <input type='radio' {...field} {...props}/>
        </div>
    )
};

export default Radio;