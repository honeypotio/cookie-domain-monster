cookie-domain-monster
=============
[![Build Status](https://travis-ci.org/honeypotio/cookie-domain-monster.svg)][travis]

A library that extracts high level cookie domains from a list of urls. Useful in cases where you want to set a cookie for several subdomains to guarantee it's set at the highest possible domain/subdomain while still available in all subdomains provided.


Install
-------

```bash
$ npm install cookie-domain-monster
```

Usage
-----


```javascript
import CookieDomainMonster from 'cookie-domain-monster';

var urls = ['http://www.honeypot.io', 'https://blog.honeypot.io']
var cookieDomains = CookieDomainMonster(urls) // ['.honeypot.io']
```

for more examples checkout [the tests](/test/cookie-domain-monster.spec.js)


Contributin
------------

1. Add some tests
1. Add some code
1. Run `npm test`
1. Send a pull request

License
-------

Copyright © 2016 [Honeypot GmbH][honeypotio]. It is free software, and may be
redistributed under the terms specified in the [LICENSE](/LICENSE) file.

About Honeypot
--------------

[![Honeypot](https://www.honeypot.io/logo.png)][honeypotio]

Honeypot is a developer focused job platform.
The names and logos for Honeypot are trademarks of Honeypot GmbH.

[travis]: https://travis-ci.org/honeypotio/cookie-domain-monster
[honeypotio]: https://www.honeypot.io?utm_source=github
