/** @format */

// /** @format */

// import React from "react";
// import { Form, Label, Select } from "semantic-ui-react";

// const SelectInput = ({
//   input,
//   width,
//   multiple,
//   options,
//   type,
//   placeholder,
//   meta: { touched, error }
// }) => {
//   return (
//     <Form.Field error={error && !!error}>
//       {/* For this we have to override some properties the redux form gave us so will provide our own change so that whatever the user will select will get update
//       2. Remember that the on first argument represent the event type
//       */}
//       <Select
//         value={input.value || null}
//         onChange={(e, data) => input.onChange(data.value)}
//         placeholder={placeholder}
//         options={options}
//         multiple={multiple}
//       />
//       {touched && error && <Label basic="red">{error}</Label>}
//     </Form.Field>
//   );
// };

// export default SelectInput;

import React from "react";
import { Form, Label, Select } from "semantic-ui-react";

const SelectInput = ({
  input,
  type,
  placeholder,
  multiple,
  options,
  meta: { touched, error }
}) => {
  return (
    <Form.Field error={touched && !!error}>
      <Select
        value={input.value || null}
        onChange={(e, data) => input.onChange(data.value)}
        placeholder={placeholder}
        options={options}
        multiple={multiple}
      />
      {touched && error && (
        <Label basic color="red">
          {error}
        </Label>
      )}
    </Form.Field>
  );
};

export default SelectInput;
