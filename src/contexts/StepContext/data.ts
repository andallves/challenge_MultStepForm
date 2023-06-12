export type State = {
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
export const initialState: State = {
  stepId: 0,
  status:'select',
  name: 'Andre',
  phoneNumber: 85992794032,
  email: 'andre@gmail.com',
  companyName: 'Empresa',
  employeesNumber: 1,
  aboutBusiness: 'Lorem ipsum atsk llk',
  projectGoal: 'Lorem ipsum atsk llk',
};
