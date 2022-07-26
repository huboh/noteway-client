import '../../styles/button-link.scss';

import { FC, useMemo } from 'react';
import { Link, LinkProps } from 'react-router-dom';

import { ButtonProps } from "../Button";
import { Spinner } from "../../../../constants";
import { joinClassStrings } from "../../../../utils";

// components
import Text from "../../components/Text";
import Icon from "../../components/Icon";

export interface ButtonLinkProps extends LinkProps, Omit<ButtonProps, "type" | "onClick"> { }

const ButtonLink: FC<ButtonLinkProps> = ({ to, ...props }) => {
  const busyClass = props.isBusy ? "busy" : "";
  const classString = useMemo(() => joinClassStrings("button button-link", busyClass, props.className), [busyClass, props.className]);

  return (
    <Link { ...props } className={ classString } to={ to } title={ props.title }>
      <Icon icon={ props.isBusy ? <Spinner className="spinner" /> : props.icon } />
      <Text text={ props.text } />
    </Link>
  );
};

export {
  ButtonLink as default
};