import {
  queries,
  render,
  renderHook,
  type Queries,
  type RenderHookOptions,
  type RenderOptions,
} from '@testing-library/react';
import { userEvent } from '@testing-library/user-event';
import { type JSX, type PropsWithChildren } from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { AppStore, RootState, setupStore } from '../redux/store';

interface ExtendedRenderOptions extends Omit<RenderOptions, 'queries'> {
  preloadedState?: RootState;
  store?: AppStore;
  route?: string;
}

type ExtendedRenderHookOptions<
  Props,
  Q extends Queries,
  Container extends Element | DocumentFragment,
  BaseElement extends Element | DocumentFragment
> = RenderHookOptions<Props, Q, Container, BaseElement> &
  Pick<ExtendedRenderOptions, 'preloadedState' | 'store' | 'route'>;

export function RenderWrapper({
  children,
  preloadedState = undefined,
  store = setupStore(preloadedState),
}: PropsWithChildren<
  Pick<ExtendedRenderOptions, 'preloadedState' | 'store'>
>): JSX.Element {
  return (
    <Provider store={store}>
      <BrowserRouter>{children}</BrowserRouter>
    </Provider>
  );
}

/**
 This is used to render our tests with the need configuration like data and theme provider as normal app run
 */
function renderWithProviders(
  ui: React.ReactElement,
  {
    preloadedState = undefined,
    store = setupStore(preloadedState),
    route = '/',
    ...renderOptions
  }: ExtendedRenderOptions = {}
) {
  window.history.pushState({}, 'App', route);

  const Wrapper = ({ children }: PropsWithChildren) =>
    RenderWrapper({ children, preloadedState, store });

  return {
    store,
    userActor: userEvent.setup(),
    ...render(ui, { wrapper: Wrapper, ...renderOptions }),
  };
}

function renderHookWithProviders<
  Result,
  Props,
  Q extends Queries = typeof queries,
  Container extends Element | DocumentFragment = HTMLElement,
  BaseElement extends Element | DocumentFragment = Container
>(
  render: (initialProps: Props) => Result,
  {
    preloadedState = undefined,
    store = setupStore(preloadedState),
    route = '/',
    ...renderOptions
  }: ExtendedRenderHookOptions<Props, Q, Container, BaseElement> = {}
) {
  window.history.pushState({}, 'App', route);

  const Wrapper = ({ children }: PropsWithChildren) =>
    RenderWrapper({ children, preloadedState, store });

  return {
    store,
    userActor: userEvent.setup(),
    ...renderHook(render, { wrapper: Wrapper, ...renderOptions }),
  };
}

// eslint-disable-next-line import/export
export * from '@testing-library/react';
// eslint-disable-next-line import/export
export { renderWithProviders as render, renderHookWithProviders as renderHook };
