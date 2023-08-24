import { ComponentGroupLabel } from '../ComponentBlock/types';
import { Maybe, Scalars } from '../../types/types';
export type TitleComponentBlock = {
  componentGroup?: Maybe<ComponentGroupLabel>;
  text?: Maybe<Scalars['String']>;
  classname?: Maybe<Scalars['String']>;
};
