export interface AdministrativeDocumentFieldsProps {
  prefix: string;
  values: {
    no: string;
    level: string;
    date: string;
    pursuant_to_dec_tct_id: string;
    pursuant_to_dec_ttmn_id: string;
  };
  onChange: (field: string, value: string) => void;
}
