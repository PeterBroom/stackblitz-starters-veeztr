import { ComponentGroupLabel } from '../ComponentBlock/types';
import { Maybe, Scalars } from '../../types/types';
export type CodeComponentBlock = {
  componentGroup: Maybe<ComponentGroupLabel>;
  code: Maybe<Array<Scalars['String']>>;
  language: Maybe<Scalars['String']>;
};
