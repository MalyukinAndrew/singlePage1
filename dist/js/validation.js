

const yup = require('yup');

let schema = yup.object().shape({
    name: yup.string().required(),
    email: yup.string().email().required(),
    createdOn: yup.date().default(function() {
      return new Date();
    }),
  });

  schema
  .isValid({
    name: 'jimmy',
    email: 'asd@mailw.asd',
  })
  .then(function(valid) {
    valid; // => true
  });