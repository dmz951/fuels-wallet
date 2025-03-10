import { getWordsFromValue } from '../../utils';
import { MNEMONIC, PASSWORD } from '../config';

import { NetworkService } from '~/systems/Network';
import { SignUpService } from '~/systems/SignUp/services';

export async function mockVault() {
  const mnemonic = MNEMONIC;
  const password = PASSWORD;
  const account = await SignUpService.create({
    data: {
      mnemonic: getWordsFromValue(mnemonic),
      password,
    },
  });
  const network = await NetworkService.getSelectedNetwork();

  return {
    account: account!,
    network: network!,
    mnemonic,
    password,
  };
}

export type MockVaultData = Awaited<ReturnType<typeof mockVault>>;
