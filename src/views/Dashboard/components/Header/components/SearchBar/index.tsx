import "../../styles/searchbar.scss";

import { FC } from "react";
import { TbSearch } from "react-icons/tb";
import * as formTypes from '../../../../../../components/Form/types';

// components
import Form from "../../../../../../components/Form";
import FormField from "../../../../../../components/Form/components/FormField";

const SearchBar: FC = () => {
  const fields: formTypes.FormField[] = [
    { name: "dashboard-searchbar", value: "" },
  ];

  const searchIcon = (
    <label htmlFor="dashboard-searchbar">
      <TbSearch className="searchbar-icon" />
    </label>
  );

  return (
    <div className="searchbar-wrapper">
      <Form fields={ fields } className="searchbar-form">
        <FormField name="dashboard-searchbar" id="dashboard-searchbar" placeholder="Search users, notes and tags." icon={ searchIcon } />
      </Form>
    </div>
  );
};

export {
  SearchBar as default
};