const mapping: Record<string, string> = {
  organizations: 'organization',
  'rtsp-streams': 'rtsp_stream',
  users: 'user',
};

export function convertRouteToEntityUtil(route: string) {
  return mapping[route] || route;
}
