const DatabaseConnectionString = `mongodb+srv://${process.env.DATABASE_USER}:${process.env.DATABASE_PASSWORD}@godam.zwhjiy4.mongodb.net/${process.env.DATABASE_NAME}?retryWrites=true&w=majority`
const AllowedLeadSources = ['linkedin', 'friend', 'job_portal', 'other']
const AllowedGenders = ['male', 'female', 'other']
const UnprotectedRoutes = ['/api/auth/register', '/api/auth/sign_in']

module.exports = {
  DatabaseConnectionString: DatabaseConnectionString,
  AllowedLeadSources: AllowedLeadSources,
  AllowedGenders: AllowedGenders,
  UnprotectedRoutes: UnprotectedRoutes
}
