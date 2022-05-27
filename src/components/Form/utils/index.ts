import * as React from 'react';
import * as types from '../types';


export const defaultField: types.FormField = {
  value: '',
  name: ''
};

export const defaultState: types.FormState = {
  fields: [],
  isSubmitting: false,
};

export const hasError = (fields: types.FormState['fields']) => fields.some(field => (
  Boolean(field.error)
));

export const runFieldValidators = (fields: types.FormState['fields']) => fields.map((field) => ({
  ...field,
  ...field.validator?.(field.value, fields),
}));

export const changeHandler = (setter: types.FormStateSetter) => (event: React.FormEvent) => (
  setter((currState) => {
    const { name, value } = event.target as any;
    const fields = currState.fields.map((field) => {
      if (name !== field.name) return field;

      return {
        ...field,
        ...field.validator?.(value, currState.fields),
        value,
      };
    });

    return {
      ...currState,
      fields,
    };
  })
);

export const submitHandler = (props: types.SubmitHandlerProps) => async (event: React.FormEvent) => {
  if (!props.onSubmit) return;

  event.preventDefault();

  const { fields, setter, onSubmit } = props;
  const formFields = runFieldValidators(fields);
  const fieldsHasError = hasError(formFields);

  setter((currState) => ({ ...currState, fields: formFields, isSubmitting: true }));

  try {
    if (fieldsHasError) return;

    await onSubmit(
      formFields.reduce((fields, field) => ({ ...fields, [field.name]: field.value }), {})
    );

  } catch { } finally {
    setter((currState) => ({ ...currState, isSubmitting: false }));
  }
};