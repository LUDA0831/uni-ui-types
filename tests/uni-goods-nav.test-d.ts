import { describe, expectTypeOf } from 'vitest';
import type {
  UniGoodsNavOption,
  UniGoodsNavOnClickEvent,
  UniGoodsNavOnClick,
  UniGoodsNavOnButtonClickEvent,
  UniGoodsNavOnButtonClick,
  UniGoodsNavButton,
  UniGoodsNavProps,
  UniGoodsNav,
  UniGoodsNavInstance,
} from '@/index';

describe('UniGoodsNav', () => {
  expectTypeOf<UniGoodsNavOption>().toBeObject();
  expectTypeOf<UniGoodsNavOption>().toEqualTypeOf<UniHelper.UniGoodsNavOption>();

  expectTypeOf<UniGoodsNavOnClickEvent>().toBeObject();
  expectTypeOf<UniGoodsNavOnClickEvent>().toEqualTypeOf<UniHelper.UniGoodsNavOnClickEvent>();

  expectTypeOf<UniGoodsNavOnClick>().toBeFunction();
  expectTypeOf<UniGoodsNavOnClick>().toEqualTypeOf<UniHelper.UniGoodsNavOnClick>();

  expectTypeOf<UniGoodsNavOnButtonClickEvent>().toBeObject();
  expectTypeOf<UniGoodsNavOnButtonClickEvent>().toEqualTypeOf<UniHelper.UniGoodsNavOnButtonClickEvent>();

  expectTypeOf<UniGoodsNavOnButtonClick>().toBeFunction();
  expectTypeOf<UniGoodsNavOnButtonClick>().toEqualTypeOf<UniHelper.UniGoodsNavOnButtonClick>();

  expectTypeOf<UniGoodsNavButton>().toBeObject();
  expectTypeOf<UniGoodsNavButton>().toEqualTypeOf<UniHelper.UniGoodsNavButton>();

  expectTypeOf<UniGoodsNavProps>().toBeObject();
  expectTypeOf<UniGoodsNavProps>().toEqualTypeOf<UniHelper.UniGoodsNavProps>();

  expectTypeOf<UniGoodsNav>().not.toBeAny();
  expectTypeOf<UniGoodsNav>().toEqualTypeOf<UniHelper.UniGoodsNav>();

  expectTypeOf<UniGoodsNavInstance>().not.toBeAny();
  expectTypeOf<UniGoodsNavInstance>().toEqualTypeOf<UniHelper.UniGoodsNavInstance>();
});
