import * as Styled from './styles';
import { InputField } from '../../Components/InputField';
import { TextAreaField } from '../../Components/TextAreaField';
import { useAppContext } from '../../contexts/AppContext';

export const SecondStep = () => {
  const { updateNameBusiness, updateQtdFuncionarios, updateAboutBusiness } = useAppContext();

  return (
    <Styled.Container>
      <InputField
        text={'Nome da empresa'}
        name={'nomedaempresa'}
        type={'text'}
        placeholder={'Qual é o nome da empresa'}
        handleChangeInput={(event: React.ChangeEvent<HTMLInputElement>): void =>
          updateNameBusiness(event.target.value)
        }
      />

      <InputField
        text={'Número de funcionários'}
        name={'qtdfuncionarios'}
        type={'number'}
        placeholder={'Digite o número de colaboradores'}
        handleChangeInput={(event: React.ChangeEvent<HTMLInputElement>): void =>
          updateQtdFuncionarios(event.target.value)
        }
      />

      <TextAreaField
        text={'Sobre seu negócio'}
        name={'aboutnegocio'}
        placeholder={'Fale um pouco sobre seus produtos e serviços'}
        handleChangeTextArea={(event: React.ChangeEvent<HTMLTextAreaElement>): void =>
          updateAboutBusiness(event.target.value)
        }
      />
    </Styled.Container>
  );
};
