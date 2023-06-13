import * as Styled from './styles';

interface Button {
  nameofClass: string;
  type: 'button' | 'submit';
  btnText: string;
  onButtonClicked?: () => void;
}

export const Button = ({
  nameofClass,
  type,
  btnText,
  onButtonClicked,
}: Button) => {
  return (
    <Styled.Container>
      <button type={type} className={nameofClass} onClick={onButtonClicked}>
        <span>{btnText}</span>
      </button>
    </Styled.Container>
  );
};
