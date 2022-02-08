var faker = require('faker')
var cpf = require('gerador-validador-cpf')

export default {
  deliver: function () {

    var firstName = faker.name.firstName()
    var lastName = faker.name.lastName()

    var data = {
      name: `${firstName} ${lastName}`,
      cpf: cpf.generate(),
      email: faker.internet.email(firstName),
      whatsapp: '47999999999',
      address: {
        postalcode: '89035429',
        street: 'Rua João Gomes da Nóbrega',
        number: '100',
        details: 'Ap 10',
        district: 'Itoupava Seca',
        city_state: 'Blumenau/SC'
      },
      delivery_method: 'Moto',
      cnh: 'cnh-digital.jpg'
    }

    return data
  }
}