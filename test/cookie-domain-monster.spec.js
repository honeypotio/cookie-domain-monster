import expect from 'expect';
import cookieDomainMonster from '../src/cookie-domain-monster';

describe('cookie-domain-monster', () => {
  it('extracts cookie domains from list of hosts', () => {
    const hosts = [
      'www.honeypot.io',
      'www.herokuapp.com'
    ];
    const expected = hosts;
    const actual = cookieDomainMonster(hosts);
    expect(actual).toEqual(expected);
  });

  it('extracts intersection cookie domain from list of hosts', () => {
    const hosts = [
      'www.honeypot.io',
      'app.honeypot.io'
    ];
    const expected = ['.honeypot.io'];
    const actual = cookieDomainMonster(hosts);
    expect(actual).toEqual(expected);
  });


  it('extracts cookie domain from host', () => {
    const host = 'www.honeypot.io';
    const expected = host;
    const actual = cookieDomainMonster(host);
    expect(actual).toEqual(expected);
  });

  it('extracts cookie domain from url', () => {
    const url = 'https://staging-honeypot-pr-300.herokuapp.com';
    const expected = 'staging-honeypot-pr-300.herokuapp.com';
    const actual = cookieDomainMonster(url);
    expect(actual).toEqual(expected);
  });
});
