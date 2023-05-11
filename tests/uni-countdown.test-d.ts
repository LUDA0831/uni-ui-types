import { describe, expectTypeOf } from 'vitest';
import type {
  UniCountdownOnUpdate,
  UniCountdownOnTimeup,
  UniCountdownProps,
  UniCountdown,
  UniCountdownInstance,
} from '@/index';

describe('UniCountdown', () => {
  expectTypeOf<UniCountdownOnUpdate>().toBeFunction();
  expectTypeOf<UniCountdownOnUpdate>().toEqualTypeOf<UniHelper.UniCountdownOnUpdate>();

  expectTypeOf<UniCountdownOnTimeup>().toBeFunction();
  expectTypeOf<UniCountdownOnTimeup>().toEqualTypeOf<UniHelper.UniCountdownOnTimeup>();

  expectTypeOf<UniCountdownProps>().toBeObject();
  expectTypeOf<UniCountdownProps>().toEqualTypeOf<UniHelper.UniCountdownProps>();

  expectTypeOf<UniCountdown>().not.toBeAny();
  expectTypeOf<UniCountdown>().toEqualTypeOf<UniHelper.UniCountdown>();

  expectTypeOf<UniCountdownInstance>().not.toBeAny();
  expectTypeOf<UniCountdownInstance>().toEqualTypeOf<UniHelper.UniCountdownInstance>();
});
