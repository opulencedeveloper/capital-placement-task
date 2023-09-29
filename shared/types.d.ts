type ChildrenProps = React.ReactNode;
type onChangeType = ChangeEvent<HTMLInputElement>;

export type QuestionResponseType = {
  [key: string]: {
    internalUse: boolean;
    show: boolean;
  };
};

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
  personalInfo: QuestionResponseType;
}

export interface ProfileProps {
  addQuestion?: () => void;
  profileInfo: QuestionResponseType;
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

export interface RequestConfigType {
  url: string;
  method?: string;
  body?: any;
}

export interface YesNoQuestion {
  type: string;
  question: string;
  disqualify: boolean;
}

export interface VideoQuestionProps {
  type: string,
  question: string,
  description: string,
  videoDuration: string,
}