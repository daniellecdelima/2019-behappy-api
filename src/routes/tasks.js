import knex from "../config/knex";

const table_name = "tasks";

class Task {
  static getAll() {
    return knex
      .from(table_name)
      .select()
      .then(results => Task.deserialize(results))
      .catch(err => err);
  }

  static deserialize(json) {
    return json.map(data => {
      let task = new Task();
      task.oid = data.oid ? data.oid : 0;
      task.title = data.title ? data.title : "";
      task.description = data.description ? data.description : "";
      task.done = data.done ? true : false;
      task.delete = data.delete ? data.delete : false;
      return task;
    });
  }
}

export default Task;