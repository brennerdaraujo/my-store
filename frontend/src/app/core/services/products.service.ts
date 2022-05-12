import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

import { Product } from '../models/product';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  private _lastId: number = 0;
  private products: Product[] = [];
  // private _personUpdated = new Subject<Person[]>();

  getProducts() {
    this.products = [
      {
        id: '1',
        description: 'Tênis Nike Revolution 6 Next Nature Masculino - Preto+Branco',
        imgPath: 'https://static.netshoes.com.br/produtos/tenis-nike-revolution-6-next-nature-masculino/26/2IC-4365-026/2IC-4365-026_zoom1.jpg?ts=1631636825&',
        name: 'Tênis Nike Revolution 6 Next Nature Masculino',
        price: {
          promotional: 0,
          normal: 249.99,
        },
        category: {
          id: '10',
          name: 'Calçados'
        },
        status: true,
        stock: 10
      },
      {
        id: '2',
        description: 'Tênis Olympikus Cyber 2 Feminino - Preto+Pink',
        imgPath: 'https://static.netshoes.com.br/produtos/tenis-olympikus-cyber-2-feminino/37/2I2-2746-937/2I2-2746-937_zoom1.jpg?ts=1632497296&',
        name: 'Tênis Olympikus Cyber 2 Feminino',
        price: {
          promotional: 0,
          normal: 129.99,
        },
        category: {
          id: '10',
          name: 'Calçados'
        },
        status: true,
        stock: 2
      },
      {
        id: '3',
        description: 'Camiseta Básica Masculina C/Logo Bordado Premium - Preto',
        imgPath: 'https://static.netshoes.com.br/produtos/camiseta-basica-masculina-clogo-bordado-premium/06/JWY-0438-006/JWY-0438-006_zoom1.jpg?ts=1651591956&',
        name: 'Camiseta Básica Masculina C/Logo Bordado Premium',
        price: {
          promotional: 0,
          normal: 42.99,
        },
        category: {
          id: '20',
          name: 'Camisetas'
        },
        status: false,
        stock: 0
      },
      {
        id: '4',
        description: 'Kit Calça Jogger + Blusa Moletom Flanelada Masculino Liso - Preto',
        imgPath: 'https://static.netshoes.com.br/produtos/kit-calca-jogger-blusa-moletom-flanelada-masculino-liso/06/FDQ-0050-006/FDQ-0050-006_zoom1.jpg?ts=1651761577&',
        name: 'Kit Calça Jogger + Blusa Moletom Flanelada Masculino Liso',
        price: {
          promotional: 0,
          normal: 139.90,
        },
        category: {
          id: '30',
          name: 'Kits'
        },
        status: true,
        stock: 50
      }
    ];
    return [...this.products];
    // this._people = [];
    // this._personUpdated.next([...this._people]);
  }

  /* getPersonUpdateListener() {
    return this._personUpdated.asObservable();
  }

  addPerson(name: string, phone: string) {
    const person: Person = {
      id: ++this._lastId,
      name,
      phone
    };
    this._people.push(person);
    this._personUpdated.next([...this._people]);
  }

  delPerson(id: number) {
    const index: number = this._people.findIndex((person: Person) => person.id === id);

    if (index >= 0) {
      this._people.splice(index, 1);
      this._personUpdated.next([...this._people]);
    }
  } */
}
