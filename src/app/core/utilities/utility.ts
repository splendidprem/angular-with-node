import { environment } from '../../../environments/environment';

export const getUrl = (url: string) => {
  return environment.baseApiUrl + '/' + url;
}
