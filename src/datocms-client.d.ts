declare module "datocms-client" {
  export class SiteClient {
    constructor(apiToken: string);

    items: {
      all: (params?: AllItemsParams) => Promise<Item[]>;
      create: (data: CreateItemData) => Promise<Item>;
      update: (id: string, data: UpdateItemData) => Promise<Item>;
      delete: (id: string) => Promise<void>;
      find: (id: string) => Promise<Item>;
    };
  }

  // Tipo de parâmetros para `all`
  export interface AllItemsParams {
    filter?: { [key: string]: string | number | boolean };
    order?: string[];
    limit?: number;
  }

  // Exemplo de tipo para dados de criação de item
  export interface CreateItemData {
    title: string;
    description?: string;
    imageUrl?: string;
  }

  // Exemplo de tipo para dados de atualização de item
  export interface UpdateItemData {
    title?: string;
    description?: string;
    imageUrl?: string;
  }

  // Tipo para Item
  export interface Item {
    id: string;
    titlesection?: string;
    productName: string;
    productPrice?: number;
    description?: string;
    imageUrl?: string;
  }
}
