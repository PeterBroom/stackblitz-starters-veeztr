import * as React from 'react';
import { FC } from 'react';
import { isDefined } from '../../utils/is-defined';
import { TitleComponentBlock } from './types';

export const TitleComponent: FC<TitleComponentBlock> = ({
  text,
  classname,
}) => {
  return isDefined(text) ? <h1 className={classname}>{text}</h1> : null;
};
