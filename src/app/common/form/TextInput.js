/** @format */

// /** @format */

// import React from "react";
// import { Form, Label } from "semantic-ui-react";

// //Since this componet will render by redux Form Field it injects a lot of props so we will destructure it

// //The input prop has many property like onChange, onBlur so we have to spread to the input field
// const TextInput = ({
//   input,
//   width,
//   type,
//   placeholder,
//   meta: { touched, error }
// }) => {
//   return (
//     //The error prop is from semantic ui. !!error means boolean

//     //We are returning semantic ui form field
//     <Form.Field error={error && !!error}>
//       {/* Input field */}
//       <input {...input} placeholder={placeholder} type={type} />
//       {touched && error && <Label basic="red">{error}</Label>}
//     </Form.Field>
//   );
// };

// export default TextInput;

import React from "react";
import { Form, Label } from "semantic-ui-react";

const TextInput = ({
  input,
  width,
  type,
  placeholder,
  meta: { touched, error }
}) => {
  return (
    <Form.Field error={touched && !!error}>
      <input {...input} placeholder={placeholder} type={type} />
      {touched && error && (
        <Label basic color="red">
          {error}
        </Label>
      )}
    </Form.Field>
  );
};

export default TextInput;
