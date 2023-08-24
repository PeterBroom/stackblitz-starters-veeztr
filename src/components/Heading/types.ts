import { ComponentGroupLabel } from '../ComponentBlock/types';
import { Maybe, Scalars } from '../../types/types';

enum HeadingTags {
  'h1',
  'h2',
  'h3',
  'h4',
}

export type HeadingTag = keyof typeof HeadingTags;

export type HeadingComponentBlock = {
  componentGroup: Maybe<ComponentGroupLabel>;
  tag: HeadingTag;
  text?: Maybe<Scalars['String']>;
  classname?: Maybe<Scalars['String']>;
};
