const test = require('ava');

const nestedArrayString = require('../../../lib/stringify/lang/csharp/nested-array-string');

test('With external class', t => {
  const arrayString = nestedArrayString({
    type: 'arrayOf',
    children: { type: 'arrayOf', children: { type: 'Link' } }
  });

  t.is('IList<IList<Link>>', arrayString);
});

test('With reference to class defined in the current file', t => {
  const arrayString = nestedArrayString(
    {
      type: 'arrayOf',
      children: {
        type: 'arrayOf',
        children: { type: 'someProp', hasClassDefinition: true }
      }
    },
    { name: 'Component' }
  );

  t.is('IList<IList<Component_SomeProp>>', arrayString);
});
