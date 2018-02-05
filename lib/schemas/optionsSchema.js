export default [
  {
    key: 'id',
    types: ['string', 'number'],
    required: true,
  },
  {
    key: 'inputTrigger',
    types: ['string'],
    required: false,
  },
  {
    key: 'options',
    types: ['object'],
    required: true,
  },
  {
    key: 'end',
    types: ['boolean'],
    required: false,
  },
];
