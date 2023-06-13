export interface InputFieldProps {
  text: string;
  name: string;
  type?: string;
  placeholder: string;
  handleChangeInput?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  handleChangeTextArea?: (event: React.ChangeEvent<HTMLTextAreaElement>) => void;
}
