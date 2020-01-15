/** @format */

// /** @format */

// import React from "react";
// import { Form, Label } from "semantic-ui-react";

// //Other props is provided by us to use for example for semantic ui
// const TextAreas = ({
//   input,
//   width,
//   rows,
//   type,
//   placeholder,
//   meta: { touched, error }
// }) => {
//   return (
//     <Form.Field error={error && !!error}>
//       <textarea
//         {...input}
//         placeholder={placeholder}
//         type={type}
//         rows={rows}
//       ></textarea>
//       {touched && error && <Label basic="red">{error}</Label>}
//     </Form.Field>
//   );
// };

// export default TextAreas;

import React from "react";
import { Form, Label } from "semantic-ui-react";

const TextArea = ({
  input,
  rows,
  width,
  type,
  placeholder,
  meta: { touched, error }
}) => {
  return (
    <Form.Field error={touched && !!error}>
      <textarea {...input} placeholder={placeholder} type={type} rows={rows} />
      {touched && error && (
        <Label basic color="red">
          {error}
        </Label>
      )}
    </Form.Field>
  );
};

export default TextArea;
