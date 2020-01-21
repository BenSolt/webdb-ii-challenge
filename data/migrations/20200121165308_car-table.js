
exports.up = function(knex) {
    return knex.schema.createTable("car-info", tbl => {
        // id column, integer, primary key, auto-increment
        tbl.increments();

        tbl.integer("VIN");

        tbl.string("make").index();

        tbl.string("model").index();

        tbl.integer("milage").index();

        // adds created_at and updated_at columns
        //tbl.timestamps(true, true);
    });
};

exports.down = function(knex) {
    return knex.schema.dropTableIfExists("car-info");
};
