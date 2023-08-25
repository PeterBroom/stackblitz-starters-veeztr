import { FC, createElement } from 'react';
import { isDefined } from '../../utils/is-defined';
import { HeadingComponentBlock } from './types';

export const HeadingComponent: FC<HeadingComponentBlock> = ({
  text,
  classname,
  tag,
}) => {
  const tagElem = tag ? tag : 'h2';
  const attributes = { className: classname };
  return isDefined(text) ? createElement(tagElem, attributes, text) : null;
};
