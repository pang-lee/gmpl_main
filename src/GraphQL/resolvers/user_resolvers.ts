const userList = [
    {
      name:'Brain'
    },
    {
      name:'Jack'
    },
    {
      name:'Joe'
    },
    {
      name:'Kevin'
    },
    {
      name:'Allen'
    },
    {
      name:'Tony'
    },
    {
      name:'Lin'
    }
  ]


const resolvers = {
  Query: {
    users(){
      return userList
    }
  }
}

export default resolvers;