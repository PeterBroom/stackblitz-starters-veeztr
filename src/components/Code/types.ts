import { componentTypeLabel } from '../ComponentBlock/types';
import { Maybe, Scalars } from '../../types/types';
export type CodeComponentBlock = {
  componentType: Maybe<componentTypeLabel>;
  code: Maybe<Array<Scalars['String']>>;
  language: Maybe<Scalars['String']>;
};
