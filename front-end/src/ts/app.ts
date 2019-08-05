import { consoleMsj } from './actions/alert-message';
import { IUser } from './models/IUser';

const userTest : IUser = { name: 'Tester', age: 12 };
consoleMsj(userTest);