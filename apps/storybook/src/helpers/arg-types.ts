import type { StrictInputType } from "storybook/internal/types";

type AugmentedInputType = Partial<StrictInputType> & { childKeys?: string[] };
type ArgTypes<T> = Partial<Record<keyof T, AugmentedInputType>> &
  Record<string, AugmentedInputType>;

type GlobalOptions = {
  category?: string;
  subcategory?: string;
};

export function argTypesBuilder<T>(argTypes: ArgTypes<T>, globalOptions?: GlobalOptions) {
  return Object.entries(argTypes).reduce(
    (acc, [parentKey, value]) => {
      if (!value) return acc;

      const { childKeys, ...options } = value;

      const overrideOptions: Partial<StrictInputType> = globalOptions
        ? {
            ...options,
            table: {
              ...options?.table,
              category: options?.table?.category ?? globalOptions?.category,
              subcategory: options?.table?.subcategory ?? globalOptions?.subcategory,
            },
          }
        : options;

      if (childKeys) {
        childKeys.forEach((childKey) => {
          acc[`${parentKey}.${childKey}`] = overrideOptions;
        });
      } else {
        acc[`${parentKey}`] = overrideOptions;
      }

      return acc;
    },
    {} as Record<string, Partial<StrictInputType>>,
  );
}
