
const CustomInput = ({ width, type, value, onChange }) => (
    <input  type={type} value = {value} onChange = {onChange}
        style={{width: width,
            marginLeft: '15px'}
        }
    />
);

export default CustomInput;