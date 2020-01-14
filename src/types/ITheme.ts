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
    fonts: { [key: string]: string | null };
    lineHeight: {
      none: number;
      tight: number;
      normal: number;
      large: number;
    };
  };
  opacity: {
    none: number;
    low: number;
    demi: number;
    high: number;
    base: number;
  };
  borders: Array<{
    borderWidth: number;
    borderColor: string;
  }>;
}
