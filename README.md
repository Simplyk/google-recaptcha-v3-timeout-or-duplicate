# Getting Started google-recaptcha-v3-timeout-or-duplicate

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Install

- run `npm install`

- Replaces the variables
  - `GOOGLE_RECAPTCHA_PUBLIC_KEY` in src/App.js
  - `GOOGLE_RECAPTCHA_SECRET_KEY` in server/index.js by your keys
- Add the recaptcha public key in the `<script />` of index.html after "render="

```
src/App.js
const GOOGLE_RECAPTCHA_PUBLIC_KEY = "your recaptcha public key"

server/index.js
const GOOGLE_RECAPTCHA_SECRET_KEY = "your recaptcha secret key"

index.html
<script src="https://www.google.com/recaptcha/api.js?render=yourRecaptchaPublicKey"></script>
```

### Launch application

- 1st console : `npm run start-client` // react application should start on http://localhost:3000/
- 2nd console : `npm run start-server` // node application should start on http://localhost:3001/

### To reproduce the bug

- Open you we browser on http://localhost:3000/, with the console opened
- Click on "submit" button -> see log containing { success: true }
- Click on "submit" button again -> see log containing { success: false, error-codes: ['timeout-or-duplicate'] }
- Click on "submit" button again -> see log containing { success: false, error-codes: ['timeout-or-duplicate'] }

### To fix the bug

- Remove the line `<div>$ 20.00</div>` in App.js
- Click on "submit" button -> see log containing { success: true }
- Click on "submit" button -> see log containing { success: true }
- Click on "submit" button -> see log containing { success: true }
- ...

## Details

The bug is that the recaptcha token sent on the second submission is "timeout-or-duplicate", but is neither a duplicate, neither a too old token
It looks like the bug happen when the code contains a long `<div />` of text containing the string "id ", followed by a div containing the string "$ 20.00", or any price with symbol $
Removing one of the div will completely fix the problem

Checks already made

- Our recaptcha keys are valid and working
- The token is a different token every time, no cache's problem
- The token is not expired, as it is generate just before the request to the server
- The bug happen in every browser, incognito mode too

see screen share demonstration https://www.loom.com/share/ba6930861d97479caa6a5763826cc80b
