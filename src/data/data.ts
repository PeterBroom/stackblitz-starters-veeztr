import { ComponentBlocks } from '../components/ComponentBlock/types';

export const data: ComponentBlocks = {
  titleComponent: {
    text: 'Maybe Type Patterns & Type Guards',
    classname: 'title',
  },
  blocks: [
    {
      componentGroup: 'HEADING_COMPONENT',
      classname: 'test-class',
      text: 'Typescript + React',
      tag: 'h2',
    },
    {
      componentGroup: 'HEADING_COMPONENT',
      text: 'Maybe Pattern',
      tag: 'h3',
    },
    {
      componentGroup: 'MESSAGE_COMPONENT',
      text: 'The Maybe Pattern allows null values so as not to break the code. Warnings by TypeScript in our code will convey what is available.',
    },
    {
      componentGroup: 'CODE_COMPONENT',
      code: [
        '// types/types.ts',
        '',
        'type Maybe<T> = T | null;',
        '',
        'type Scalars = {',
        '  ID: string;',
        '  String: string;',
        '  Boolean: boolean;',
        '  Int: number;',
        '  Float: number;',
        '};',
        '',
        'enum HeadingTags {',
        '  "h1",',
        '  "h2",',
        '  "h3",',
        '  "h4",',
        '}',
        '',
        'type HeadingTag = keyof typeof HeadingTags;',
        '',
        'type HeadingComponentBlock = {',
        '  tag: HeadingTag;',
        '  text: Maybe<Scalars["String"]>;',
        '  classname?: Maybe<Scalars["String"]>;',
        '};',
      ],
      language: 'javascript',
    },
    {
      componentGroup: 'MESSAGE_COMPONENT',
      text: 'This example allows the "text" and "tag" properties to be either "string" or "null". A null value is useful to then create a Type Guard in the component.',
    },
    {
      componentGroup: 'HEADING_COMPONENT',
      text: 'Type Guard / Type Narrowing Pattern',
      tag: 'h3',
    },
    {
      componentGroup: 'MESSAGE_COMPONENT',
      text: 'Type Narrowing can be used to observe if data is sufficient to render a component. By making use of Javascripts "typeof" operator variables can be checked against their type.',
    },
    {
      componentGroup: 'CODE_COMPONENT',
      code: [
        '// components/component.tsx',
        '',
        'export const HeadingComponent: FC<HeadingComponentBlock> = ({',
        '  text,',
        '  classname,',
        '  tag,',
        '}) => {',
        '  const tagElem = tag ? tag : "h2";',
        '  const attributes = { className: classname };',
        '  return isDefined(text) ? createElement(tagElem, attributes, text) : null;',
        '};,',
      ],
      language: 'javascript',
    },
    {
      componentGroup: 'MESSAGE_COMPONENT',
      text: 'In this case specified the variables with a value of "undefined" prevent rendering of the component unless it has sufficient data to do so.',
    },
  ],
};
