import { Injectable } from '@nestjs/common';
import { AsyncLocalStorage } from 'async_hooks';

@Injectable()
export class AppService {
  private localStore: AsyncLocalStorage<{ field: string }>;

  constructor() {
    this.localStore = new AsyncLocalStorage<{ field: string }>();
  }

  setLocalStore() {
    this.localStore.enterWith({ field: 'set' });
    console.log('local store set');
  }

  changeLocalStore() {
    const store = this.localStore.getStore();
    store.field = 'thing';
  }

  printLocalStore() {
    const store = this.localStore.getStore();
    console.log(store);
  }

  getHello(): string {
    this.changeLocalStore();
    return 'Hello World!';
  }
}
