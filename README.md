# Link API Test
<p align="center">
<img alt="LinkApi" src="https://stileex.xyz/wp-content/uploads/2019/06/Pipedrive-1.png" width="10%">
  <img alt="LinkApi" src="https://www.linkapi.solutions/uploads/2019/10/LinkApi-Logo-2019.png" width="10%">
  <img alt="LinkApi" src="https://d26lpennugtm8s.cloudfront.net/apps/35-pt_BR-small-Logo-Bling-400x400px-com-fundo.png" width="10%">
  
</p>

An integration project between Pipedrive and Bling proposed by LinkApi

* Language - TypeScript (NodeJS)
* Database - Mongodb
* Database ODM - Mongoose

## Structure
```
├── .vscode
│   └── setting.json
├── src
│   ├── controllers 
│   ├── interfaces   
│   ├── models      
│   ├── services
│   ├── utils 
│   ├── routes.ts
│   └── server.ts
└── .env_example
└── .eslintrc.json
└── .gitignore
└── prettierrc
└── README.md
└── packge.json
└── tsconfig.json
└── yarn.lock
```

## Installation

Clone the project
```bash
yarn install
or
npm install
```

## Configuration
* Rename '.env_example' file to '.env' and put the necessary informations: tokens and database URI

## Usage
* `yarn start`  - Start server

## Routes (running on localhost:3333)
* GET /import - Exports the orders saved on database 
* POST /import - Import deals from Pipedrive and save to Bling as order
* GET /reports - Exports the order report grouped by date 
* DELETE /reports - Clean reports database

## License
MIT