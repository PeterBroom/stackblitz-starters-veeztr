import { createElement, FC } from 'react';
import { isDefined } from '../../utils/is-defined';
import { TitleComponentBlock } from './types';

export const TitleComponent: FC<TitleComponentBlock> = ({
  text,
  classname,
}) => {
  const tagName = 'h1';
  const attributes = { className: classname };
  return isDefined(text) ? createElement(tagName, attributes, text) : null;
};
