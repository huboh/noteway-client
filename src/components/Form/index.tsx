import './form.scss';

import * as react from "react";
import * as types from "./types";
import * as utils from "./utils";


const FormContext = react.createContext(utils.defaultState);


const Form: react.FC<types.FormProps> = ({ fields, onSubmit, ...props }) => {
  const [state, setter] = react.useState({ ...utils.defaultState, fields: fields });

  const handleChange = react.useCallback(utils.changeHandler(setter), []);
  const handleSubmit = react.useCallback(utils.submitHandler({ setter, fields: state.fields, onSubmit: onSubmit }), [state.fields]);

  const providerValue = react.useMemo(() => ({ ...state, handleChange }), [state]);

  return (
    <FormContext.Provider value={ providerValue }>
      <form method="POST" { ...props } className={ `form ${props.className || ''}`.trim() } onSubmit={ handleSubmit } >
        { props.render?.(state) || props.children }
      </form>
    </FormContext.Provider>
  );
};


export { Form as default, FormContext };