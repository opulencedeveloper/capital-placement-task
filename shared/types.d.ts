type ChildrenProps = React.ReactNode;
type onChangeType = ChangeEvent<HTMLInputElement>;

export interface CommonLayoutProps {
  children: ChildrenProps;
  title: string;
}

export type PortalPropType = {
  children: ChildrenProps;
};

export interface IconButtonProps {
  iconUrl: string;
  title: string;
  titleStyle: string;
  onClick?: () => void;
}

export interface ButtonLayoutProps {
  layoutStyle: string;
  iconUrl: string;
  iconButtonTitleStyle: string;
  iconTitle: string;
  deleteQuestion?: () => void;
  saveQuestion?: () => void;
}

export interface ImagePreviewProps {
  imageFile: File;
  // onChange: (event: ChangeEvent<HTMLInputElement>) => void;
  deleteImage: () => void;
}

export interface QuestionTypeProps {
  questionsType: string[];
}

export interface TextRadioButtonProps {
  label: string;
  layoutStyle?: string;
  checkboxHandler?: (event: onChangeType) => void;
  isChecked?: boolean;
}

export interface InputTextProps {
  label: string;
  inputPlaceHolder: string;
  onChange?: (event: onChangeType) => void;
}

export interface CommonQuestionLayoutProps {
  layoutStyle?: string;
  onChange?: (index: number, event: onChangeType) => void;
}

export interface CommonProps {
  deleteQuestion?: () => void;
}

export interface PersonalInfoProps {
  addQuestion?: () => void;
}

export interface ProfileProps {
  addQuestion?: () => void;
}

export interface AdditionalQuestionsProps {
  addQuestion?: () => void;
}

export interface ToggleButtonProps {
  buttonStateValue: boolean;
  id: string;
}

export interface RadioButtonProps {
  onChange?: (event: onChangeType) => void;
  isChecked?: boolean;
}

export interface DropdownQuestion {
  type: string;
  question: string;
  other: boolean;
  choices: string[];
}

export interface ParagraphQuestion {
  type: string;
  question: string;
}

export interface YesNoQuestion {
  type: string;
  question: string;
  disqualify: boolean;
}
