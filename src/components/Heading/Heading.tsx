import { FC, createElement } from 'react';
import { isDefined } from '../../utils/is-defined';
import { HeadingComponentBlock } from './types';

export const HeadingComponent: FC<HeadingComponentBlock> = ({
  text,
  classname,
  tag,
}) => {
  const attributes = { className: classname };
  return isDefined(tag) && isDefined(text)
    ? createElement(tag, attributes, text)
    : null;
};
