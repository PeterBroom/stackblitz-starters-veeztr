import { ComponentGroupLabel } from '../ComponentBlock/types';
import { Maybe, Scalars } from '../../types/types';
export type MessageComponentBlock = {
  componentGroup: Maybe<ComponentGroupLabel>;
  text: Maybe<Scalars['String']>;
};
