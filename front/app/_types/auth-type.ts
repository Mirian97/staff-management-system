export type TToken = {
  token: string;
  id: string;
};

export type TWhoAmi = {
  user: {
    id: number;
    first_name: string;
    last_name: string;
    email: string;
    phone: string;
    department_id: number;
    created_at: string;
    updated_at: string;
  };
};
