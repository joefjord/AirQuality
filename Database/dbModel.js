const { db } = require("../Database/db");

class DB {
    constructor(db){
        this.db = db;
    }

    insertAirData(airArray){
        try {
            let airObj = {
                NO2: airArray[0],
                O3: airArray[1],
                PM25: airArray[2],
                temperature: airArray[3],
                RH: airArray[4],
                DP: airArray[5],
                inlet: airArray[6],
                datetime: airArray[7],
                sensor: airArray[8]
            }

            const sql = `INSERT INTO airData (datetime, sensor, 
                                              NO2, O3, PM25, temperature, 
                                              RH, DP, inlet)
                         VALUES (@datetime, @sensor, 
                                @NO2, @O3, @PM25, @temperature, 
                                @RH, @DP, @inlet)`;
            db.prepare(sql).run(airObj);
            return true;
        } catch (e){
            console.error(e);
            return false;
        }
    }

    getAllAirData(){
        try{
            const sql = "SELECT * FROM airData";
            return db.prepare(sql).all();
        } catch(e){
            console.error(e);
            return false;
        }
    }

    getAirData_5Hour(){
        try{
            const sql = "SELECT * FROM airData ORDER BY datetime DESC LIMIT 300";
            return db.prepare(sql).all();
        } catch(e){
            console.error(e);
            return false;
        }
    }
}
let x = new DB(db);
//console.log(x.getAllAirData()) //This took me *way* too long to find. -Cameron.
exports.dbModel = new DB(db);