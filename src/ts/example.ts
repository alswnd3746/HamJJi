interface IExample {
  id: string;
  name: string;
  text: string;
  type: string;
}

export const ExampleData = [
  {
    id: 'name',
    name: 'userName',
    text: 'Name *',
    type: 'text',
  },
  {
    id: 'email',
    name: 'userEmail',
    text: 'Email(ID) *',
    type: 'text',
  },
  {
    id: 'password',
    name: 'userPassword',
    text: 'Password *',
    type: 'password',
  },
  {
    id: 'phoneNumber',
    name: 'userPhoneNumber',
    text: 'PhoneNumber *',
    type: 'text',
  },
  {
    id: 'address',
    name: 'userAddress',
    text: 'Address *',
    type: 'text',
  },
] as IExample[];
