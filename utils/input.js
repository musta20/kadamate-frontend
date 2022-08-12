import { FormControl,Input,InputLabel, FormHelperText } from "@mui/material";

const InputField = ({...props}) => {
  return (
    <FormControl>
      <InputLabel htmlFor={props.id}>{props.lable}</InputLabel>
      <Input {...props} />
      {props.helpe && (
        <FormHelperText id={props.id}>{props.helpe}</FormHelperText>
      )}
    </FormControl>
  );
};

export default InputField;
