export const spaceUtils = (props: any) => {
  const _style = {
    marginBottom: undefined,
    marginTop: undefined,
    marginHorizontal: undefined,
    marginVertical: undefined,
    marginRight: undefined,
    marginLeft: undefined,
    margin: undefined,

    padding: undefined,
    paddingBottom: undefined,
    paddingTop: undefined,
    paddingHorizontal: undefined,
    paddingVertical: undefined,
    paddingRight: undefined,
    paddingLeft: undefined,
  };

  if (props.mb) {
    if (typeof props.mb === 'string') {
      const space = props.theme.space[props.mb];

      if (space) {
        _style.marginBottom = space;
      }
    } else if (typeof props.mb === 'number') {
      _style.marginBottom = props.mb;
    }
  }

  if (props.mt) {
    if (typeof props.mt === 'string') {
      const space = props.theme.space[props.mt];

      if (space) {
        _style.marginTop = space;
      }
    } else if (typeof props.mt === 'number') {
      _style.marginTop = props.mt;
    }
  }

  if (props.mr) {
    if (typeof props.mr === 'string') {
      const space = props.theme.space[props.mr];

      if (space) {
        _style.marginRight = space;
      }
    } else if (typeof props.mr === 'number') {
      _style.marginRight = props.mr;
    }
  }

  if (props.ml) {
    if (typeof props.ml === 'string') {
      const space = props.theme.space[props.ml];

      if (space) {
        _style.marginLeft = space;
      }
    } else if (typeof props.ml === 'number') {
      _style.marginLeft = props.ml;
    }
  }

  if (props.my) {
    if (typeof props.my === 'string') {
      const space = props.theme.space[props.my];

      if (space) {
        _style.marginVertical = space;
      }
    } else if (typeof props.my === 'number') {
      _style.marginVertical = props.my;
    }
  }

  if (props.mx) {
    if (typeof props.mx === 'string') {
      const space = props.theme.space[props.mx];

      if (space) {
        _style.marginHorizontal = space;
      }
    } else if (typeof props.mx === 'number') {
      _style.marginHorizontal = props.mx;
    }
  }

  if (props.m) {
    if (typeof props.m === 'string') {
      const space = props.theme.space[props.m];

      if (space) {
        _style.margin = space;
      }
    } else if (typeof props.m === 'number') {
      _style.margin = props.m;
    }
  }

  if (props.pb) {
    if (typeof props.pb === 'string') {
      const space = props.theme.space[props.pb];

      if (space) {
        _style.paddingBottom = space;
      }
    } else if (typeof props.pb === 'number') {
      _style.paddingBottom = props.pb;
    }
  }

  if (props.pt) {
    if (typeof props.pt === 'string') {
      const space = props.theme.space[props.pt];

      if (space) {
        _style.paddingTop = space;
      }
    } else if (typeof props.pt === 'number') {
      _style.paddingTop = props.pt;
    }
  }

  if (props.pr) {
    if (typeof props.pr === 'string') {
      const space = props.theme.space[props.pr];

      if (space) {
        _style.paddingRight = space;
      }
    } else if (typeof props.pr === 'number') {
      _style.paddingRight = props.pr;
    }
  }

  if (props.pl) {
    if (typeof props.pl === 'string') {
      const space = props.theme.space[props.pl];

      if (space) {
        _style.paddingLeft = space;
      }
    } else if (typeof props.pl === 'number') {
      _style.paddingLeft = props.pl;
    }
  }

  if (props.py) {
    if (typeof props.py === 'string') {
      const space = props.theme.space[props.py];

      if (space) {
        _style.paddingVertical = space;
      }
    } else if (typeof props.py === 'number') {
      _style.paddingVertical = props.my;
    }
  }

  if (props.px) {
    if (typeof props.px === 'string') {
      const space = props.theme.space[props.px];

      if (space) {
        _style.paddingHorizontal = space;
      }
    } else if (typeof props.px === 'number') {
      _style.paddingHorizontal = props.px;
    }
  }

  if (props.p) {
    if (typeof props.p === 'string') {
      const space = props.theme.space[props.p];

      if (space) {
        _style.padding = space;
      }
    } else if (typeof props.p === 'number') {
      _style.padding = props.p;
    }
  }

  return _style;
};
