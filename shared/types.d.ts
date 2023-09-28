type ChildrenProps = React.ReactNode;

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
}

export interface InputTextProps {
  label: string;
  inputPlaceHolder: string;
}

export interface CommonQuestionLayoutProps {
  layoutStyle?: string;
}

export interface QuestionProps {
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
