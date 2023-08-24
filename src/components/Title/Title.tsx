import * as React from 'react';
import { FC } from 'react';
import { TitleComponentBlock } from './types';

export const TitleComponent: FC<TitleComponentBlock> = ({
  text,
  classname,
}) => {
  return typeof text !== 'undefined' ? (
    <h1 className={classname}>{text}</h1>
  ) : null;
};
