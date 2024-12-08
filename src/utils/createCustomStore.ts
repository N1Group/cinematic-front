import { Mutate, StateCreator, StoreApi, StoreMutatorIdentifier } from 'zustand';
import { devtools, DevtoolsOptions, persist, PersistOptions } from 'zustand/middleware';
import { createWithEqualityFn, UseBoundStoreWithEqualityFn } from 'zustand/traditional';

type TrimmedPersistOptions = Partial<Omit<PersistOptions<any>, 'name'>>;

interface CreateStoreOptions extends DevtoolsOptions {
  persistEnable?: boolean;
  persistOptions?: TrimmedPersistOptions;
}

const withDevtools = <T, Mos extends [StoreMutatorIdentifier, unknown][]>(
  initializer: StateCreator<T, [], Mos>,
  options?: DevtoolsOptions,
): StateCreator<T, [], [['zustand/devtools', never], ...Mos]> => {
  return devtools(initializer, options);
};

const withPersist = <T, Mos extends [StoreMutatorIdentifier, unknown][]>(
  initializer: StateCreator<T, [], Mos>,
  name?: string,
  persistOptions?: TrimmedPersistOptions,
): StateCreator<T, [], [['zustand/persist', unknown], ...Mos]> => {
  const defaultOptions = { name: name || 'root', ...persistOptions };
  return persist(initializer, defaultOptions);
};

export const createCustomStore = ({
  persistEnable = true,
  persistOptions,
  enabled = isProd,
  ...devtoolsOptions
}: CreateStoreOptions) => {
  return function <T, Mos extends [StoreMutatorIdentifier, unknown][] = []>(
    initializer: StateCreator<T, [], Mos>,
  ): UseBoundStoreWithEqualityFn<Mutate<StoreApi<T>, Mos>> {
    const name = devtoolsOptions.name || 'root';
    const enhancedInitializer = persistEnable
      ? withDevtools(withPersist(initializer, devtoolsOptions.name, persistOptions), { ...devtoolsOptions, name })
      : withDevtools(initializer, { ...devtoolsOptions, name });

    return createWithEqualityFn(enhancedInitializer as StateCreator<T, [], Mos>);
  };
};
