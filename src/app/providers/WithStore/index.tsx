import { FC, PropsWithChildren } from 'react';

import { store } from '@app/store';
import { Provider } from 'react-redux';

const WithStore: FC<PropsWithChildren> = ({ children }) => (
  <Provider store={store}>{children}</Provider>
);

export default WithStore;
