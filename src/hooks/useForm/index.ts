import { useContext, useCallback } from 'react';
import Form, { FormContext } from '../../components/Form';

import * as formUtils from '../../components/Form/utils';
import * as formTypes from '../../components/Form/types';


const useForm = () => {
  const contextValue = useContext(FormContext);

  const getField = useCallback((fields: formTypes.FormField[], name: string) => (
    fields.find(field => field.name === name) || formUtils.defaultField
  ), []);

  return {
    ...contextValue,
    getField,
    Form,
  };
};


export default useForm;