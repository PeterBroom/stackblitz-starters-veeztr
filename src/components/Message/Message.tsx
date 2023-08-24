import * as React from 'react';
import { FC } from 'react';
import { isDefined } from '../../utils/is-defined';
import { MessageComponentBlock } from './types';

export const MessageComponent: FC<MessageComponentBlock> = ({ text }) => {
  return isDefined(text) ? <p>{text}</p> : null;
};
