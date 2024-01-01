<!-- Improved compatibility of back to top link: See: https://github.com/prince3339/bkash-webhook-validator/pull/73 -->
<a name="readme-top"></a>
<!--
*** Thanks for checking out the Best-README-Template. If you have a suggestion
*** that would make this better, please fork the repo and create a pull request
*** or simply open an issue with the tag "enhancement".
*** Don't forget to give the project a star!
*** Thanks again! Now go create something AMAZING! :D
-->



<!-- PROJECT SHIELDS -->
<!--
*** I'm using markdown "reference style" links for readability.
*** Reference links are enclosed in brackets [ ] instead of parentheses ( ).
*** See the bottom of this document for the declaration of the reference variables
*** for contributors-url, forks-url, etc. This is an optional, concise syntax you may use.
*** https://www.markdownguide.org/basic-syntax/#reference-style-links
-->
[![Contributors][contributors-shield]][contributors-url]
[![Forks][forks-shield]][forks-url]
[![Stargazers][stars-shield]][stars-url]
[![Issues][issues-shield]][issues-url]
[![MIT License][license-shield]][license-url]
[![LinkedIn][linkedin-shield]][linkedin-url]



<!-- PROJECT LOGO -->
<br />
<div align="center">
  <h3 align="center">Bkash Webhook Validator</h3>

  <p align="center">
    Bkash RPP subscription API webhook data signature validation package!
    <br />
    <a href="https://github.com/prince3339/bkash-webhook-validator"><strong>Explore the docs »</strong></a>
    <br />
    <br />
    <a href="https://github.com/prince3339/bkash-webhook-validator/issues">Report Bug</a>
    ·
    <a href="https://github.com/prince3339/bkash-webhook-validator/issues">Request Feature</a>
  </p>
</div>



<!-- TABLE OF CONTENTS -->
<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li>
      <a href="#Installation">Installation</a>
    </li>
    <li><a href="#usage">Usage</a></li>
    <li><a href="#roadmap">Roadmap</a></li>
    <li><a href="#contributing">Contributing</a></li>
    <li><a href="#license">License</a></li>
    <li><a href="#contact">Contact</a></li>
  </ol>
</details>



<!-- ABOUT THE PROJECT -->
## About The Project

It's a tiny package that under the hood uses other node packages to validate BKASH subscription API webhook signature validation.

Here's why:
* Validating Bkash subscription API webhook data signature in nodejs is not as straightforward as in Python or other languages
* This package helps to minimize the complexity of resolving Bkash signature validation for NodeJs Applications

<p align="right">(<a href="#readme-top">back to top</a>)</p>



### Built With

* [![Javascript][Javascript]][Javascript-url]
* [![NodeJs][NodeJs]][NodeJs-url]

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- GETTING STARTED -->
## Installation

Install NPM packages
   ```sh
   npm install bkash-webhook-validator
   ```

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- USAGE EXAMPLES -->
## Usage

Validate signature with the `validateSignature` method
   ```js
   import { validateSignature } from 'bkash-webhook-validator';

   const examplePayload = '{"message":null,"timeStamp":"2023-11-08T09:50:30.137987Z","subscriptionRequestId":"abc-request-123","subscriptionId":13757,"subscriptionStatus":"SUCCEEDED","nextPaymentDate":"2023-11-09","amount":5,"trxId":"AK840FVMME","payer":"01725010001","frequency":"DAILY","trxDate":"2023-11-08T09:50:29"}'

   const isValid = validateSignature({
    payload: examplePayload,
    apiKey: 'YOUR-BKASH-API-KEY',
    signature: 'SIGNATURE-EXTRACTED-FROM-REQUEST' // req.header('X-Signature')
   })

   ```
`isValid` will return boolean

> [!IMPORTANT]
<strong style="color:#EE4B2B">Bkash sends a webhook payload where the number includes two trailing zeros, ex: 50.00. But Javascript by default ignores trailing zero from numbers. In such case, directly passing the string data to `validateSignature` method will return `false`. You can resolve the issue by updating the string in the following hacky way:</strong>

```js
examplePayload.replace(`"amount":${amount}`, `"amount":${amount.toFixed(2)}`)
```
You need to update any number value with two trailing zeros before passing to the `validationSignature` method

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- ROADMAP -->
## Roadmap

- [ ] Add typescript support
- [ ] Add unit tests

See the [open issues](https://github.com/prince3339/bkash-webhook-validator/issues) for a full list of proposed features (and known issues).

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- CONTRIBUTING -->
## Contributing

Contributions are what makes the open-source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

If you have a suggestion that would make this better, please fork the repo and create a pull request. You can also simply open an issue with the tag "enhancement".
Don't forget to give the project a star! Thanks again!

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- LICENSE -->
## License

Distributed under the MIT License. See `LICENSE.txt` for more information.

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- CONTACT -->
## Contact

Sabbir Ahmed Siddiquee - sabbirprince39@gmail.com

Project Link: [https://github.com/prince3339/bkash-webhook-validator](https://github.com/prince3339/bkash-webhook-validator)

<p align="right">(<a href="#readme-top">back to top</a>)</p>


<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->
[contributors-shield]: https://img.shields.io/github/contributors/prince3339/bkash-webhook-validator.svg?style=for-the-badge
[contributors-url]: https://github.com/prince3339/bkash-webhook-validator/graphs/contributors
[forks-shield]: https://img.shields.io/github/forks/prince3339/bkash-webhook-validator.svg?style=for-the-badge
[forks-url]: https://github.com/prince3339/bkash-webhook-validator/network/members
[stars-shield]: https://img.shields.io/github/stars/prince3339/bkash-webhook-validator.svg?style=for-the-badge
[stars-url]: https://github.com/prince3339/bkash-webhook-validator/stargazers
[issues-shield]: https://img.shields.io/github/issues/prince3339/bkash-webhook-validator.svg?style=for-the-badge
[issues-url]: https://github.com/prince3339/bkash-webhook-validator/issues
[license-shield]: https://img.shields.io/github/license/prince3339/bkash-webhook-validator.svg?style=for-the-badge
[license-url]: https://github.com/prince3339/bkash-webhook-validator/blob/master/LICENSE.txt
[linkedin-shield]: https://img.shields.io/badge/-LinkedIn-black.svg?style=for-the-badge&logo=linkedin&colorB=555
[linkedin-url]: https://linkedin.com/in/prince3339
[product-screenshot]: images/screenshot.png
[Javascript]: https://img.shields.io/badge/Javascript-000000?style=for-the-badge&logo=Javascript&logoColor=yellow
[Javascript-url]: https://www.javascript.com/
[NodeJs]: https://img.shields.io/badge/nodejs-20232A?style=for-the-badge&logo=nodedotjs&logoColor=4FC08D
[NodeJs-url]: https://nodejs.org/
[Parcel]: https://img.shields.io/badge/Parcel-35495E?style=for-the-badge&logo=parceldotcom&logoColor=4FC08D
