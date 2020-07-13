const schema = `
type User{
    name: String
  }

  type Query{
    users: [User]
  }
`

export default schema;