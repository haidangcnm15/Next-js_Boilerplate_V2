// type of TypographyProps

type ITitleType = 'default' | 'locale' | 'phoneNumber' | 'date' | 'dateTime' | 'time' | 'thousand' | 'money' | 'numberDecimal' | 'number' | 'percent' | 'thousandDecimal';
type IConvertMethod = 'convert' | 'revert';

type ITypographyProps = {
  children?: React.FC | React.ReactNode | any;
  title?: string;
  titleType?: ITitleType;
  convertMethod?: IConvertMethod;
  errorKey?: any;
  uppercase?: boolean;
  lowercase?: boolean;
  wrap?: boolean;

  variant?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p' | 'error';
  thin?: boolean;
  medium?: boolean;
  semiBold?: boolean;
  bold?: boolean;

  italic?: boolean;
  underlined?: boolean;
  thoughLined?: boolean;
  unsetLightHeight?: boolean;
  align?: 'left' | 'center' | 'right' | 'justify';

  color?: string;
  style?: any;
  className?: string;

  numberOfLines?: number;
};

export type { ITypographyProps };
