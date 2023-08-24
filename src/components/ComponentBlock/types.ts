import { Maybe } from '../../types/types';
import { TitleComponentBlock } from '../Title';
import { HeadingComponentBlock } from '../Heading';
import { MessageComponentBlock } from '../Message';
import { CodeComponentBlock } from '../Code';

enum ComponentGroupLabels {
  'TITLE_COMPONENT',
  'HEADING_COMPONENT',
  'MESSAGE_COMPONENT',
  'CODE_COMPONENT',
}

export type ComponentGroupLabel = keyof typeof ComponentGroupLabels;

export type ComponentBlocks = {
  titleComponent?: Maybe<TitleComponentBlock>;
  headingComponent?: Maybe<HeadingComponentBlock>;
  messageComponent?: Maybe<MessageComponentBlock>;
  codeComponent?: Maybe<CodeComponentBlock>;
  blocks?: Maybe<
    Array<MessageComponentBlock | HeadingComponentBlock | CodeComponentBlock>
  >;
};
