
exports.up = function(knex) {
    //change want to make to our schema
    return knex.schema.createTable("car-Info", tbl => {
        // id column, integer, primary key, auto-increment
        tbl.increments();

        tbl.integer("VIN");

        tbl.string("make");

        tbl.string("model",255).index();

        tbl.integer("mileage");
        

        // adds created_at and updated_at columns
        //tbl.timestamps(true, true);
    });
};

exports.down = function(knex) {
  //undoing that change
  return knex.schema.dropTableIfExists("car-Info")
};
