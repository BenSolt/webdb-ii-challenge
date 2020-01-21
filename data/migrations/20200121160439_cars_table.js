
exports.up = function(knex) {
    return knex.schema.createTable("songs", tbl => {
        // id column, integer, primary key, auto-increment
        tbl.increments();

        tbl.integer("VIN");

        tbl.string("make", 255).index();

        tbl.string("model",255).index();

        tbl.integer("mileage");
        

        // adds created_at and updated_at columns
        //tbl.timestamps(true, true);
    });
};

exports.down = function(knex) {
  
};
