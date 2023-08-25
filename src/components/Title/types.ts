import { componentTypeLabel } from '../ComponentBlock/types';
import { Maybe, Scalars } from '../../types/types';
export type TitleComponentBlock = {
  componentType?: Maybe<componentTypeLabel>;
  text?: Maybe<Scalars['String']>;
  classname?: Maybe<Scalars['String']>;
};
