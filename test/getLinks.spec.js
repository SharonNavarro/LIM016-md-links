jest.mock('../src/api')

const api = require('../src/api');

api.linkStatus.mockImplementation(() => Promise.resolve([
  {
    href: 'https://docs.npmjs.com/cli/install',
    text: 'docs oficiales de npm install acá',
    file: './tres.md',
    message: 'Fail',
    status: 'Error request'
  }
]));


describe('jjj', () => {
  it('nkkmk', () => {
    return api.linkStatus("./tres.md")
    .then((res) => expect(res).toEqual([
      {
        href: 'https://docs.npmjs.com/cli/install',
        text: 'docs oficiales de npm install acá',
        file: './tres.md',
        message: 'Fail',
        status: 'Error request'
      }
    ]))
  });
});
