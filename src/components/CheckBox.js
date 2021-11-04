import { useField } from "formik";

const CheckBox = ({children, ...props}) => {
    const [field, meta] = useField({...props, type: 'checkbox'});
    return(
        <div>
            <label>
                {children}
                <input type='checkbox' {...field} />
            </label>
            {meta.error && meta.touched 
            ? <div>{meta.error}</div> : null}
        </div>
    )
};

export default CheckBox;