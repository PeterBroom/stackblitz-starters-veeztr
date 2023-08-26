import { componentTypeLabel } from '../ComponentBlock/types';
import { Maybe, Scalars } from '../../types/types';
export type DemoComponentBlock = {
  componentType: Maybe<componentTypeLabel>;
  text: Maybe<Scalars['String']>;
};
