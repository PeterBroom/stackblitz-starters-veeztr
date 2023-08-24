import { FC, createElement } from 'react';
import { HeadingComponentBlock } from './types';

export const HeadingComponent: FC<HeadingComponentBlock> = ({
  text,
  classname,
  tag,
}) => {
  const attributes = { className: classname };
  return typeof tag !== 'undefined' && typeof text !== 'undefined'
    ? createElement(tag, attributes, text)
    : undefined;
};
