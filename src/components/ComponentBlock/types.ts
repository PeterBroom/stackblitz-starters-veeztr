import { Maybe } from '../../types/types';
import { CodeComponentBlock } from '../Code';
import { TitleComponentBlock } from '../Title';
import { HeadingComponentBlock } from '../Heading';
import { MessageComponentBlock } from '../Message';
import { DemoComponentBlock } from '../Demo';

enum componentTypeLabels {
  'TITLE_COMPONENT',
  'HEADING_COMPONENT',
  'MESSAGE_COMPONENT',
  'CODE_COMPONENT',
  'DEMO_COMPONENT',
}

export type componentTypeLabel = keyof typeof componentTypeLabels;

export type ComponentBlocks = {
  titleComponent?: Maybe<TitleComponentBlock>;
  headingComponent?: Maybe<HeadingComponentBlock>;
  messageComponent?: Maybe<MessageComponentBlock>;
  demoComponent?: Maybe<DemoComponentBlock>;
  codeComponent?: Maybe<CodeComponentBlock>;
  blocks?: Maybe<
    Array<MessageComponentBlock | HeadingComponentBlock | CodeComponentBlock>
  >;
};
