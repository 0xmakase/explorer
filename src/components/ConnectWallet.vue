<script setup lang="ts">
import { ref, computed } from 'vue';
import {
  WalletName,
  createWallet,
  readWallet,
  type Account,
  type ConnectedWallet,
  writeWallet,
} from '@/libs/wallet/Wallet';
import { Icon } from '@iconify/vue';

const props = defineProps({
  chainId: String,
  hdPath: String,
  addrPrefix: String, // address prefix
});

const emit = defineEmits(['connect', 'keplr-config']);

const sending = ref(false);
const open = ref(false);
const error = ref('');

const name = ref(WalletName.Keplr);
const list = [
  {
    wallet: WalletName.Keplr,
    logo: 'https://ping.pub/logos/keplr-logo.svg',
  },
  {
    wallet: WalletName.Ledger,
    logo: 'https://ping.pub/logos/ledger.webp',
  },
  {
    wallet: WalletName.Leap,
    logo: 'https://assets.leapwallet.io/logos/leap-cosmos-logo.svg',
  },
  {
    wallet: WalletName.Metamask,
    logo: 'https://ping.pub/logos/metamask.png',
  },
];

async function initData() {}

const walletList = computed(() => {
  // const l = list
  return list;
});

const connected = ref(readWallet(props.hdPath) as ConnectedWallet);

function selectWallet(wallet: WalletName) {
  name.value = wallet;
}

async function connect() {
  sending.value = true;
  error.value = '';
  let accounts = [] as Account[];
  try {
    const wa = createWallet(name.value, {
      chainId: props.chainId,
      hdPath: props.hdPath,
      prefix: props.addrPrefix,
    });
    await wa
      .getAccounts()
      .then((x) => {
        accounts = x;
        if (accounts.length > 0) {
          const [first] = accounts;
          connected.value = {
            wallet: name.value,
            cosmosAddress: first.address,
            hdPath: props.hdPath,
          };
          writeWallet(connected.value, props.hdPath);
          emit('connect', {
            value: connected.value,
          });
        }
        open.value = false;
      })
      .catch((e) => {
        error.value = e;
      });
  } catch (e: any) {
    error.value = e.message;
  }
  sending.value = false;
}

function keplr() {
  emit('keplr-config', {});
  open.value = false;
}

const customKeplr = computed(() => {
  return `${location.protocol}//${location.host}/wallet/keplr?chain=${props.chainId}`;
});
</script>
<template>
  <div class="mb-4">
    <!-- modal btn -->

    <label
      v-if="!connected.cosmosAddress"
      for="PingConnectWallet"
      class="btn btn-sm ping-connect-btn capitalize"
      >Connect Wallet</label
    >

    <!-- modal content -->
    <input
      v-model="open"
      type="checkbox"
      id="PingConnectWallet"
      class="modal-toggle"
      @change="initData()"
    />

    <label for="PingConnectWallet" class="modal cursor-pointer z-[999999]">
      <label class="modal-box rounded-lg" for="">
        <h3 class="text-xl font-semibold">Connect Wallet</h3>
        <ul
          role="list"
          class="bg-gray-100 dark:bg-gray-900 rounded-lg mt-4 px-3 py-3"
        >
          <li
            class="flex items-center px-2 py-3 hover:bg-gray-200 dark:hover:bg-gray-800 rounded-lg cursor-pointer"
            v-for="(i, k) of walletList"
            :key="k"
            @click="selectWallet(i.wallet)"
          >
            <img
              class="h-10 w-10 bg-gray-50 rounded-full mr-4"
              :src="i.logo"
              alt=""
            />
            <p class="text-base font-semibold flex-1 dark:text-gray-300">
              {{ i.wallet }}
            </p>
            <div>
              <div
                v-if="i.wallet === name"
                class="mr-4 rounded-full bg-green-200"
              >
                <Icon icon="mdi:check" class="font-bold text-green-600" />
              </div>
            </div>
          </li>
        </ul>
        <div v-show="error" class="text-error mt-3">
          <span>{{ error }}.</span>
          <div v-show="String(error).search('no chain info') > -1">
            <a :href="customKeplr" class="btn btn-link"
              >Suggest a chain to Keplr</a
            >
          </div>
        </div>
        <div class="mt-8 text-right flex">
          <label class="btn mr-1" @click="keplr">
            <Icon icon="mdi:cog-outline" />
          </label>
          <label
            class="btn btn-primary ping-connect-confirm grow"
            @click="connect()"
          >
            <span v-if="sending" class="loading loading-spinner"></span>
            Connect
          </label>
        </div>
      </label>
    </label>
  </div>
</template>
<script lang="ts">
export default {
  name: 'ConnectWallet',
  components: { Icon },
};
</script>

<style scoped></style>
