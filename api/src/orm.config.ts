import { TypeOrmModuleOptions } from "@nestjs/typeorm";

export const config: TypeOrmModuleOptions={
    type:'postgres',
    username:'postgres',
    port:5432,
    host:'localhost',
    database:'user_management',
    synchronize:true,
    entities:['dist/**/*.entity{.ts,.js}'],
}

// import { TypeOrmModule } from "@nestjs/typeorm";
// import * as config from 'config' 

// const dbConfig = config.get('db')

// export const typeOrmConfig : TypeOrmModule =  {
//     type: dbConfig.type, 
//     host: process.env.RDS_HOSTNAME || dbConfig.host,
//     port: process.env.RDS_PORT || dbConfig.port,               // in the container we map = 5000:5432 
//     username : process.env.RDS_USERNAME || dbConfig.username, 
//     password: process.env.RDS_PASSWORD || dbConfig.password, 
//     database: process.env.RDS_DB_NAME || dbConfig.database, 
//     autoLoadEntities: true,
//     entities: [__dirname + '../**/*.entity.ts'],  //in typeORM we define entites that represent tables
//     synchronize: process.env.TYPEORM_SYNC || dbConfig.synchronize,    // set up synchronize to true when we deploy the app in production for the first time , then redeploy the app with synchronize as "false"
// }