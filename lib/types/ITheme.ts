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
      xs: number;
      sm: number;
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
  };
}
