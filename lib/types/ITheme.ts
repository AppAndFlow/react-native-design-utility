export interface ITheme {
  space: {
    xs: number;
    sm: number;
    md: number;
    lg: number;
    xl: number;
  };
  color: { [key: string]: string };
  text: {
    size: {
      sm: number;
      base: number;
      md: number;
      lg: number;
      xl: number;
    };
    weight: {
      light: string;
      normal: string;
      bold: string;
    };
    spacing: {
      tight: number;
      normal: number;
      wide: number;
    };
    font: null | string;
    lineHeight: {
      none: number;
      tight: number;
      normal: number;
      large: number;
    };
  };
  borders: Array<{
    borderWidth: number;
    borderColor: string;
  }>;
}
