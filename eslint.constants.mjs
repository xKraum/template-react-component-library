const PERFECTIONIST_SORT_OBJECT_CUSTOM_GROUPS = {
  id: {
    groupName: 'id',
    selector: 'property',
    elementNamePattern: '^(?:id|.+Id)$',
  },
  flag: {
    groupName: 'flag',
    selector: 'property',
    elementNamePattern: '^(?:is|should|has|can|did|will)[A-Z].*$',
  },
};

const PERFECTIONIST_SORT_TYPES = {
  type: 'natural',
  order: 'asc',
  ignoreCase: true,
  groups: [
    PERFECTIONIST_SORT_OBJECT_CUSTOM_GROUPS.id.groupName,
    'required-property',
    'required-multiline-property',
    'optional-property',
    'optional-multiline-property',
    'required-flag',
    'optional-flag',
    'required-method',
    'optional-method',
  ],
  customGroups: [
    PERFECTIONIST_SORT_OBJECT_CUSTOM_GROUPS.id,
    {
      ...PERFECTIONIST_SORT_OBJECT_CUSTOM_GROUPS.flag,
      groupName: `required-${PERFECTIONIST_SORT_OBJECT_CUSTOM_GROUPS.flag.groupName}`,
      modifiers: ['required'],
    },
    {
      ...PERFECTIONIST_SORT_OBJECT_CUSTOM_GROUPS.flag,
      groupName: `optional-${PERFECTIONIST_SORT_OBJECT_CUSTOM_GROUPS.flag.groupName}`,
      modifiers: ['optional'],
    },
  ],
};

const PERFECTIONIST_SORT_OBJECTS = {
  ...PERFECTIONIST_SORT_TYPES,
  objectDeclarations: true,
  destructuredObjects: {
    groups: true,
  },
  groups: [
    PERFECTIONIST_SORT_OBJECT_CUSTOM_GROUPS.id.groupName,
    'property',
    'multiline-property',
    PERFECTIONIST_SORT_OBJECT_CUSTOM_GROUPS.flag.groupName,
    'method',
  ],
  customGroups: [
    PERFECTIONIST_SORT_OBJECT_CUSTOM_GROUPS.id,
    PERFECTIONIST_SORT_OBJECT_CUSTOM_GROUPS.flag,
  ],
};

export { PERFECTIONIST_SORT_TYPES, PERFECTIONIST_SORT_OBJECTS };
