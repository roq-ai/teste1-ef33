import { OrganizationInterface } from 'interfaces/organization';
import { GetQueryInterface } from 'interfaces';

export interface RtspStreamInterface {
  id?: string;
  stream_url: string;
  organization_id: string;
  created_at?: any;
  updated_at?: any;

  organization?: OrganizationInterface;
  _count?: {};
}

export interface RtspStreamGetQueryInterface extends GetQueryInterface {
  id?: string;
  stream_url?: string;
  organization_id?: string;
}
