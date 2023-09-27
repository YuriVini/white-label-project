export interface ProfileConfigs {
  id: string;
  title: string;
  icon: string;
  stack: {
    initialRouteName: string;
    routes: {
      [key: string]: () => React.JSX.Element;
    };
  };
}
