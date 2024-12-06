export const convertRoute = (m: any) => {
  const { clientLoader, clientAction, default: Component, ...rest } = m;
  return {
    ...rest,
    loader: clientLoader,
    action: clientAction,
    Component,
  };
};
