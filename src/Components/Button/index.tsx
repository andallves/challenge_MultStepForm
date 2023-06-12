import * as Styled from './styles';
interface Button {
  nameofClass: string;
  type: 'button' | 'submit';
  btnText: string;
  isDark: boolean;
  isUppercase: boolean;
  isBold: boolean;
  disabled: boolean;
  onButtonClicked: () => {};
}

export const Button = ({
  nameofClass,
  type,
  btnText,
  disabled,
  onButtonClicked,
}: Button) => {
  return (
    <Styled.Container nameofClass={nameofClass}>
      <button
        type={type}
        className={nameofClass}
        disabled={disabled}
        onClick={onButtonClicked}
      >
        <span>{btnText}</span>
      </button>
    </Styled.Container>
  );
};
