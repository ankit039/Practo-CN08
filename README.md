# CN08

## About 
Assignment is made using Gatsby. Implemented a Github O-Auth to Fetch User Activity.

## Getting Started 

### Prerequisites

```
node.js
gatsby command line interface(CLI)
```

### Installing

Please follow below steps to get app running.

##### Install gatsby cli globally using
```
npm install -g gatsby-cli
```

##### Further
```
git clone https://github.com/ankitrPracto/CN08.git
cd CN08
npm install
```
* if you weren’t able to install the Gatsby command line interface globally, you can start your development server using the following command instead:
 ```
 npm run develop
 ```
* else
 ```
 gatsby develop
 ```

check on localhost with port number- 8000

##### Create file in root directory named `.env.development`
add following parameter
```
GATSBY_CLIENT_ID = <github client id here>
GATSBY_CLIENT_SECRET = <github secret key here>
```

### Routes
`/login` - Login with Github Page

`/afterlogin` - Shows the user activity

