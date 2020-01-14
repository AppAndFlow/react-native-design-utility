import get from 'lodash.get';

import { ITheme } from '../types/ITheme';

type Props = {
  theme: ITheme;
} & Partial<{
  m: number | string;
  mb: number | string;
  mt: number | string;
  mr: number | string;
  ml: number | string;
  my: number | string;
  mx: number | string;

  p: number | string;
  pb: number | string;
  py: number | string;
  pt: number | string;
  pr: number | string;
  pl: number | string;
  px: number | string;
}>;

export const spaceUtils = (props: Props) => {
  const _style: {
    marginBottom?: number;
    marginTop?: number;
    marginHorizontal?: number;
    marginVertical?: number;
    marginRight?: number;
    marginLeft?: number;
    margin?: number;

    padding?: number;
    paddingBottom?: number;
    paddingTop?: number;
    paddingHorizontal?: number;
    paddingVertical?: number;
    paddingRight?: number;
    paddingLeft?: number;
  } = {};

  const themeSpace = get(props, ['theme', 'space']);

  if (themeSpace) {
    const mb = get(props, 'mb');

    if (mb) {
      if (typeof mb === 'string') {
        const space = themeSpace[mb];

        if (space) {
          _style.marginBottom = space;
        }
      } else if (typeof mb === 'number') {
        _style.marginBottom = mb;
      }
    }

    const mt = get(props, 'mt');

    if (mt) {
      if (typeof mt === 'string') {
        const space = themeSpace[mt];

        if (space) {
          _style.marginTop = space;
        }
      } else if (typeof mt === 'number') {
        _style.marginTop = mt;
      }
    }

    const mr = get(props, 'mr');

    if (mr) {
      if (typeof mr === 'string') {
        const space = themeSpace[mr];

        if (space) {
          _style.marginRight = space;
        }
      } else if (typeof mr === 'number') {
        _style.marginRight = mr;
      }
    }

    const ml = get(props, 'ml');

    if (ml) {
      if (typeof ml === 'string') {
        const space = themeSpace[ml];

        if (space) {
          _style.marginLeft = space;
        }
      } else if (typeof ml === 'number') {
        _style.marginLeft = ml;
      }
    }

    const my = get(props, 'my');

    if (my) {
      if (typeof my === 'string') {
        const space = themeSpace[my];

        if (space) {
          _style.marginVertical = space;
        }
      } else if (typeof my === 'number') {
        _style.marginVertical = my;
      }
    }

    const mx = get(props, 'mx');

    if (mx) {
      if (typeof mx === 'string') {
        const space = themeSpace[mx];

        if (space) {
          _style.marginHorizontal = space;
        }
      } else if (typeof mx === 'number') {
        _style.marginHorizontal = mx;
      }
    }

    const m = get(props, 'm');

    if (m) {
      if (typeof m === 'string') {
        const space = themeSpace[m];

        if (space) {
          _style.margin = space;
        }
      } else if (typeof m === 'number') {
        _style.margin = m;
      }
    }

    const pb = get(props, 'pb');

    if (pb) {
      if (typeof pb === 'string') {
        const space = themeSpace[pb];

        if (space) {
          _style.paddingBottom = space;
        }
      } else if (typeof pb === 'number') {
        _style.paddingBottom = pb;
      }
    }

    const pt = get(props, 'pt');

    if (pt) {
      if (typeof pt === 'string') {
        const space = themeSpace[pt];

        if (space) {
          _style.paddingTop = space;
        }
      } else if (typeof pt === 'number') {
        _style.paddingTop = pt;
      }
    }

    const pr = get(props, 'pr');

    if (pr) {
      if (typeof pr === 'string') {
        const space = themeSpace[pr];

        if (space) {
          _style.paddingRight = space;
        }
      } else if (typeof pr === 'number') {
        _style.paddingRight = pr;
      }
    }

    const pl = get(props, 'pl');

    if (pl) {
      if (typeof pl === 'string') {
        const space = themeSpace[pl];

        if (space) {
          _style.paddingLeft = space;
        }
      } else if (typeof pl === 'number') {
        _style.paddingLeft = pl;
      }
    }

    const py = get(props, 'py');

    if (py) {
      if (typeof py === 'string') {
        const space = themeSpace[py];

        if (space) {
          _style.paddingVertical = space;
        }
      } else if (typeof py === 'number') {
        _style.paddingVertical = py;
      }
    }

    const px = get(props, 'px');

    if (px) {
      if (typeof px === 'string') {
        const space = themeSpace[px];

        if (space) {
          _style.paddingHorizontal = space;
        }
      } else if (typeof px === 'number') {
        _style.paddingHorizontal = px;
      }
    }

    const p = get(props, 'p');

    if (p) {
      if (typeof p === 'string') {
        const space = themeSpace[p];

        if (space) {
          _style.padding = space;
        }
      } else if (typeof p === 'number') {
        _style.padding = p;
      }
    }
  }

  return _style;
};
