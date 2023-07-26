import axios from 'axios';
import queryString from 'query-string';
import { RtspStreamInterface, RtspStreamGetQueryInterface } from 'interfaces/rtsp-stream';
import { GetQueryInterface, PaginatedInterface } from '../../interfaces';

export const getRtspStreams = async (
  query?: RtspStreamGetQueryInterface,
): Promise<PaginatedInterface<RtspStreamInterface>> => {
  const response = await axios.get('/api/rtsp-streams', {
    params: query,
    headers: { 'Content-Type': 'application/json' },
  });
  return response.data;
};

export const createRtspStream = async (rtspStream: RtspStreamInterface) => {
  const response = await axios.post('/api/rtsp-streams', rtspStream);
  return response.data;
};

export const updateRtspStreamById = async (id: string, rtspStream: RtspStreamInterface) => {
  const response = await axios.put(`/api/rtsp-streams/${id}`, rtspStream);
  return response.data;
};

export const getRtspStreamById = async (id: string, query?: GetQueryInterface) => {
  const response = await axios.get(`/api/rtsp-streams/${id}${query ? `?${queryString.stringify(query)}` : ''}`);
  return response.data;
};

export const deleteRtspStreamById = async (id: string) => {
  const response = await axios.delete(`/api/rtsp-streams/${id}`);
  return response.data;
};
