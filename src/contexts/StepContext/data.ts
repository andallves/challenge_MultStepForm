export interface UserData {
  stepId: number;
  status: string;
  name: string;
  phoneNumber: number;
  email: string;
  companyName: string;
  employeesNumber: number;
  aboutBusiness: string;
  projectGoal: string;

}
export const initialState: UserData = {
  stepId: 1,
  status:'select',
  name: 'Andre',
  phoneNumber: 85992794032,
  email: 'andre@gmail.com',
  companyName: 'Empresa',
  employeesNumber: 1,
  aboutBusiness: 'Lorem ipsum atsk llk',
  projectGoal: 'Lorem ipsum atsk llk',
};
