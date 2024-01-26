import './inputs.css';

export const CustomInput = ({ label, name, value, onChange }) => (
  <div className='input-container'>
    <label htmlFor={name}>{label}</label>
    <input aria-label={label} name={name} type='number' value={value} onChange={onChange} />
  </div>
);
