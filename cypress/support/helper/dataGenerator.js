import { fakerEN_US as faker } from '@faker-js/faker';
import Utils from '@helper/utils';
import { STATES } from '@fixtures/states';

export function gerarClienteDados() {
  let clienteDados = {
    empresa: {
      nome: `TA - ${faker.company.name()}`,
      telefone: faker.string.numeric({ length: 10, exclude: ['0'] }),
      endereco: faker.location.zipCode({ state: Utils.constRandomValue(STATES) }),
      segundoEndereco: faker.location.secondaryAddress(),
      valorNegocio: faker.string.numeric({ length: { min: 7, max: 10 } })
    },
    pessoal: {
      nome: faker.person.fullName(),
      telefone: faker.string.numeric({ length: 10, exclude: ['0'] }),
      endereco: faker.location.zipCode({ state: Utils.constRandomValue(STATES) }),
      segundoEndereco: faker.location.secondaryAddress()
    },
    credenciais: {
      email: generateEmail(),
      password: '123.Change'
    }
  };

  return clienteDados;
}

export function generateEmail(user, domain) {
  let userEmail = user ? user : 'company.testes';
  let domainEmail = domain ? domain : '@gmail.com';
  return `${userEmail}+${faker.string.uuid()}${domainEmail}`;
}


