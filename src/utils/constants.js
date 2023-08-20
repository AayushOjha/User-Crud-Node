const DatabaseConnectionString = `mongodb+srv://${process.env.DATABASE_USER}:${process.env.DATABASE_PASSWORD}@godam.zwhjiy4.mongodb.net/${process.env.DATABASE_NAME}?retryWrites=true&w=majority`

module.exports = {
  DatabaseConnectionString: DatabaseConnectionString
}
