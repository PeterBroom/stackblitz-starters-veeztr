import * as React from 'react';
import { FC } from 'react';
import { MessageComponentBlock } from './types';

export const MessageComponent: FC<MessageComponentBlock> = ({ text }) => {
  return typeof text !== 'undefined' ? <p>{text}</p> : null;
};
