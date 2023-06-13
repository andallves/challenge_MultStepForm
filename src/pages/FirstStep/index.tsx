import { InputField } from '../../Components/InputField';
import { useAppContext } from '../../contexts/AppContext';
import * as Styled from './styles';

export const FirstStep = () => {
  const {updateName, updateTel, updateEmail} = useAppContext();

  return (
    <Styled.Container>
      <InputField
        text={'Nome'}
        name={'nome'}
        type={'text'}
        placeholder={'Como prefere ser chamado'}
        handleChangeInput={(event: React.ChangeEvent<HTMLInputElement>): void => updateName(event.target.value)}
      />

      <InputField
        text={'Telefone'}
        name={'telefone'}
        type={'tel'}
        placeholder={'Digite seu número de WhatsApp '}
        handleChangeInput={(event: React.ChangeEvent<HTMLInputElement>): void => updateTel(event.target.value)}
      />

      <InputField
        text={'Email'}
        name={'email'}
        type={'email'}
        placeholder={'Digite seu e-mail'}
        handleChangeInput={(event: React.ChangeEvent<HTMLInputElement>): void => updateEmail(event.target.value)}
      />
    </Styled.Container>
  );
};
