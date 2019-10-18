import {injectable} from "inversify";
import {createConnection, Connection, Repository} from "typeorm";

@injectable()
export class ConnectionService {

    private _conn;

    getRepo<T>(target:string | (new () =>{})):Promise<Repository<T>> {
        return this._getConn().then((conn)=>conn.getRepository<T>(target));
    }


    private _getConn(): Promise<Connection>{

        if(this._conn){
            return this._conn;
        } else {
            console.log("error")
        }

        return this._conn= createConnection({
            type: 'mongodb',
            host: 'localhost',
            port: 27017,
            username: 'root',
            password: 'pass',
            logging: true,
            database: 'geekshubs',
            entities: []
        });
    }
}