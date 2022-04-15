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
                day: airArray[7],
                time: airArray[8],
                sensor: airArray[9]
            }

            const sql = `INSERT INTO airData (time, Date, sensor, 
                                              NO2, O3, PM25, temperature, 
                                              RH, DP, inlet)
                         VALUES (@time, @day, @sensor, 
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
}
let x = new DB(db);
console.log(x.getAllAirData())
exports.dbModel = new DB(db);