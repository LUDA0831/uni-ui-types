import { describe, expectTypeOf } from 'vitest';
import type {
  UniListItemEllipsis,
  UniListItemThumbSize,
  UniListItemLink,
  UniListItemDirection,
  UniListItemSwitchChecked,
  UniListItemExtraIcon,
  UniListItemOnClick,
  UniListItemOnSwitchChangeDetail,
  UniListItemOnSwitchChange,
  UniListItemProps,
  UniListItem,
} from '@/UniListItem';

describe('UniListItem', () => {
  expectTypeOf<UniListItemEllipsis>().toBeNumber();
  expectTypeOf<UniListItemEllipsis>().toEqualTypeOf<UniHelper.UniListItemEllipsis>();

  expectTypeOf<UniListItemThumbSize>().toBeString();
  expectTypeOf<UniListItemThumbSize>().toEqualTypeOf<UniHelper.UniListItemThumbSize>();

  expectTypeOf<UniListItemLink>().toBeString();
  expectTypeOf<UniListItemLink>().toEqualTypeOf<UniHelper.UniListItemLink>();

  expectTypeOf<UniListItemDirection>().toBeString();
  expectTypeOf<UniListItemDirection>().toEqualTypeOf<UniHelper.UniListItemDirection>();

  expectTypeOf<UniListItemSwitchChecked>().toBeBoolean();
  expectTypeOf<UniListItemSwitchChecked>().toEqualTypeOf<UniHelper.UniListItemSwitchChecked>();

  expectTypeOf<UniListItemExtraIcon>().toBeObject();
  expectTypeOf<UniListItemExtraIcon>().toEqualTypeOf<UniHelper.UniListItemExtraIcon>();

  expectTypeOf<UniListItemOnClick>().toBeFunction();
  expectTypeOf<UniListItemOnClick>().toEqualTypeOf<UniHelper.UniListItemOnClick>();

  expectTypeOf<UniListItemOnSwitchChangeDetail>().toBeObject();
  expectTypeOf<UniListItemOnSwitchChangeDetail>().toEqualTypeOf<UniHelper.UniListItemOnSwitchChangeDetail>();

  expectTypeOf<UniListItemOnSwitchChange>().toBeFunction();
  expectTypeOf<UniListItemOnSwitchChange>().toEqualTypeOf<UniHelper.UniListItemOnSwitchChange>();

  expectTypeOf<UniListItemProps>().toBeObject();
  expectTypeOf<UniListItemProps>().toEqualTypeOf<UniHelper.UniListItemProps>();

  expectTypeOf<UniListItem>().not.toBeAny();
  expectTypeOf<UniListItem>().toEqualTypeOf<UniHelper.UniListItem>();
});
