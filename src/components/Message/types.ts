import { componentTypeLabel } from '../ComponentBlock/types';
import { Maybe, Scalars } from '../../types/types';
export type MessageComponentBlock = {
  componentType: Maybe<componentTypeLabel>;
  text: Maybe<Scalars['String']>;
};
