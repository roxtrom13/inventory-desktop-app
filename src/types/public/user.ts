export enum DocType {
  DNI = 'DNI',
  CARNE = 'CE',
}

export interface User {
  readonly id: number;
  username: string;
  first_name: string;
  last_name: string;
  email: string;
  photo: string;
  doc: string;
  degree: string;
  doc_type: DocType;
  phone: string | null;
  // groups: Array<Group | GroupID>
}
