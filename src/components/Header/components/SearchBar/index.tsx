import "./searchbar.scss";
import { FC } from "react";
import { TbSearch } from "react-icons/tb";

import Form from "../../../Form";
import * as formTypes from '../../../Form/types';
import FormField from "../../../Form/components/FormField";


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
        <FormField name="dashboard-searchbar" id="dashboard-searchbar" placeholder="search notes, tags & users" icon={ searchIcon } />
      </Form>
    </div>
  );
};


export {
  SearchBar as default
};