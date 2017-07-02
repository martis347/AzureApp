import { Injectable } from '@angular/core';

@Injectable()
export class StorageService {
  constructor() { }

  public GetItem(key: string): string {
    return localStorage.getItem(key);
  }

  public AddItem(key: string, item: string): void {
    localStorage.setItem(key, item);
  }

  public RemoveItem(key: string): void {
    localStorage.removeItem(key);
  }
}
