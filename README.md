# xshare

<p>
  <a href="https://www.npmjs.com/package/xshare" target="_blank">
    <img alt="Version" src="https://img.shields.io/npm/v/xshare.svg">
  </a>
  <a href="#" target="_blank">
    <img alt="License: MIT" src="https://img.shields.io/badge/License-MIT-yellow.svg" />
  </a>
</p>

> Quickly shares files from your command line

<br/>

  <div align="center">

<a href='mailto:iamkamalkumar@proton.me'>![Gmail](https://img.shields.io/badge/Gmail-D14836?style=for-the-badge&logo=gmail&logoColor=white)</a> <a href='https://www.linkedin.com/in/thekamalkashyap'>![LinkedIn](https://img.shields.io/badge/linkedin-%230077B5.svg?style=for-the-badge&logo=linkedin&logoColor=white)</a>

</div>

<br/>

```sh
$ xshare https://avatars.githubusercontent.com/u/104472541

File uploaded successfully!
Token: 9H_u7UwNvHRmmiCcwreSDBG2d4h0cllaBmXSIl6lz-o
URL: https://0x0.st/Xcds.jpg
```

## 📑 Table of Contents

- [xshare](#xshare)
  - [📑 Table of Contents](#-table-of-contents)
    - [Features](#features)
  - [Installation And Setup](#installation-and-setup)
    - [Usage](#usage)
    - [Installation](#installation)
      - [Using pnpm](#using-pnpm)
      - [development environment](#development-environment)
  - [Author](#author)

### Features

- Quickly shares files from your command line
- create a shareable link for the file
- share local or remote files
- create secret links for sensitive files
- set expiration time for the link
- delete the file after sharing

## Installation And Setup

### Usage

1. Share a file

```sh
xshare <file-path/url>
```

2. Share a file with secret link

```sh
xshare -s <file-path/url>
```

3. Delete a file

```sh
xshare -t token -d https://0x0.st/file-url
```

4. Share a file with expiration time

```sh
xshare -e <hours/epoch-miliseconds> <file-path/url>
```

5. For help

```sh
xshare -h

Usage: xshare [options] <file-path/url>

Options:
  -t, --token <token>                       token to use for upload
  -d, --delete                              delete the file immediately
  -s, --secret                              generate a URL which is not easily guessable
  -e, --expires <hours/epoch milliseconds>  set an expiration date for the file
  -h, --help                                display help for command
```

<br/>

### Installation

#### Using pnpm

```sh
pnpm install -g xshare
```

or

```sh
npx xshare <file-path/url>
```

#### development environment

To get a development environment running:

1. Clone the project and install its dependencies using pnpm

```sh
git clone https://github.com/thekamalkashyap/xshare.git
```

2. Navigate to the project's directory:

```sh
cd xshare
```

3. Install the project's dependencies:

```sh
pnpm install
```

4. make th desired changes in the code

<br/>

5. Running The Application

```sh
pnpm start
```

## Author

👤 **thekamalkashyap**
