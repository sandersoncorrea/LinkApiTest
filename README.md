# Link API Test

An integration project between Pipedrive and Glimp proposed by LinkApi

* Language - TypeScript (NodeJS)
* Database - Mongodb
* Database ODM - Mongoose

## Installation


```bash
yarn install
or
npm install
```

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

## Configuration
* Rename '.env_example' file to '.env' and put the necessary informations: tokens and database URI

## Usage
* `yarn start`  - Start server

## Routes (running on localhost:3333)
* GET /import - Exports the orders saved on database 
* POST /import - Import deals from Pipedrive and save to Glimp as order
* GET /reports - Exports the order report grouped by date 
* DELETE /reports - Clean reports database

## License
MIT