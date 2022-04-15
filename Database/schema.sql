CREATE TABLE IF NOT EXISTS airData (
    time TEXT NOT NULL,     -- Time of Recorded Data
    Date TEXT NOT NULL,      -- Date of Recorded Data
    sensor TEXT NOT NULL,   -- Sensor From Which Data Came
    NO2 REAL NOT NULL,
    O3 REAL NOT NULL,
    PM25 REAL NOT NULL,
    temperature REAL NOT NULL, -- Temp was a keyword
    RH REAL NOT NULL,
    DP REAL NOT NULL,
    inlet TEXT NOT NULL,
    PRIMARY KEY (time, Date, sensor)
);