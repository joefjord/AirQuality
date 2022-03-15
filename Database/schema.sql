CREATE TABLE IF NOT EXISTS airData (
    time TEXT NOT NULL,     -- Time of Recorded Data
    day TEXT NOT NULL,      -- Date of Recorded Data
    sensor TEXT NOT NULL,   -- Sensor From Which Data Came
    NO2 TEXT NOT NULL,
    O3 TEXT NOT NULL,
    PM25 TEXT NOT NULL,
    temperature TEXT NOT NULL, -- Temp was a keyword
    RH TEXT NOT NULL,
    DP TEXT NOT NULL,
    inlet TEXT NOT NULL
    PRIMARY KEY (time, day, sensor)
);