import type { ModalStoreDataType } from '../types/modal';
import { type Writable, writable } from 'svelte/store';

export const modalStore: Writable<ModalStoreDataType | undefined> = writable(undefined);
