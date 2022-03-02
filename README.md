# Sanmdlinks

## Index

* [1. About](#1-about)
* [2. Installation](#2-installation)
* [3. Usage](#3-usage)
* [4. Program flow](#4-program-flow)
* [5. More about](#5-more-about)

## 1. About

![image](https://user-images.githubusercontent.com/91855816/156288187-31e67392-eeae-4013-8ab1-833532ace144.png)

`Sanmdlinks` is a library that allows you to know the status of the links contained within your markdown (.md) files. You can enter the path for files and directories.

Also, it allows you to know some statistics that could help you, such as knowing the total number of links, how many are broken and the unique links.

## 2. Installation

Enter the following commands to install it.

```js
npm  install @sharonavarro/md-links
```

## 3. Usage
<<<<<<< HEAD

`sanmdlinks <path> [option]`

You have two options at your disposal and more than one way to use it! Here you will see the following cases

### `sanmdlinks`

* If you just enter the command `sanmdlinks` it will show you an introductory message

![image](https://user-images.githubusercontent.com/91855816/156296008-953767cb-82da-427d-9aba-4b8fc9b3a308.png)

### `sanmdlinks <path>`

* If you add the path, either file or directory, it will give you information such as the link, the text that represents it in the Markdown file and its absolute path.

![image](https://user-images.githubusercontent.com/91855816/156296195-c7169ba8-c56a-49c8-a285-ea8d82907864.png)

### `sanmdlinks <path> --validate`

* Whether the request returns an optimal status code and no errors from either the client or the server, it will let you know that it is "ok", otherwise it will return "Fail".

![image](https://user-images.githubusercontent.com/91855816/156298213-d6761cac-4200-44f3-b576-160845c084ee.png)

### `sanmdlinks <path> --stats`

* Total links in a file as well as the number of unique links contained in it.

![image](https://user-images.githubusercontent.com/91855816/156296472-16126368-ecf1-40f1-b509-890991f8a2c0.png)
  
### `sanmdlinks <path> --validate --stats`

* Apart from the other two statistics seen above, there is a plus, which is knowing how many links are broken.

![image](https://user-images.githubusercontent.com/91855816/156297300-3959965a-8ca5-45b7-89f0-cf81ce3cf938.png)

### `sanmdlinks <path> --help`

![image](https://user-images.githubusercontent.com/91855816/156297502-5d081782-7671-41eb-9fa2-014a67da5398.png)

## 4. Program flow

### API

This flowchart can help you understand how the library works and what principles the responses follow.

![image](https://user-images.githubusercontent.com/91855816/156291962-be93e904-3692-4a49-ba30-1917670050d6.png)

## 5. More about

This project was implemented with...

* Javascript.
* Node.js.
* Npm.
* Jest.
* ESlint.

Its dependencies were...

* node-fetch.
* marked.
* jsdom.
* figlet.
* chalk.

Thank you!
=======

`sanmdlinks <path> [option]`

You have two options at your disposal and more than one way to use it! Here you will see the following cases

### `sanmdlinks`

* If you just enter the command `sanmdlinks` it will show you an introductory message

![image](https://user-images.githubusercontent.com/91855816/156296008-953767cb-82da-427d-9aba-4b8fc9b3a308.png)

### `sanmdlinks <path>`

* If you add the path, either file or directory, it will give you information such as the link, the text that represents it in the Markdown file and its absolute path.

![image](https://user-images.githubusercontent.com/91855816/156296195-c7169ba8-c56a-49c8-a285-ea8d82907864.png)

### `sanmdlinks <path> --validate`

* Whether the request returns an optimal status code and no errors from either the client or the server, it will let you know that it is "ok", otherwise it will return "Fail".

![image](https://user-images.githubusercontent.com/91855816/156298213-d6761cac-4200-44f3-b576-160845c084ee.png)

### `sanmdlinks <path> --stats`

* Total links in a file as well as the number of unique links contained in it.

![image](https://user-images.githubusercontent.com/91855816/156296472-16126368-ecf1-40f1-b509-890991f8a2c0.png)
  
### `sanmdlinks <path> --validate --stats`

* Apart from the other two statistics seen above, there is a plus, which is knowing how many links are broken.

![image](https://user-images.githubusercontent.com/91855816/156297300-3959965a-8ca5-45b7-89f0-cf81ce3cf938.png)

### `sanmdlinks <path> --help`

![image](https://user-images.githubusercontent.com/91855816/156297502-5d081782-7671-41eb-9fa2-014a67da5398.png)

## 4. Program flow

### API

This flowchart can help you understand how the library works and what principles the responses follow.

![image](https://user-images.githubusercontent.com/91855816/156291962-be93e904-3692-4a49-ba30-1917670050d6.png)

## 5. More about

This project was implemented with...

* Javascript.
* Node.js.
* Npm.
* Jest.
* ESlint.

Its dependencies were...

* node-fetch.
* marked.
* jsdom.
* figlet.
* chalk.

Thank you!

>>>>>>> f5c13857b65b214c8bc6853e77ab81145b8216b9
