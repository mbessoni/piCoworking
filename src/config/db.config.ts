export const config = {
    HOST: "localhost",
    PORT: 3306,
    USER: "coworking",
    PASSWORD: "@Coworking",
    DB: "picoworking",
    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
    }
};

export const dialect = "mysql";