import * as yup from 'yup';

export const rtspStreamValidationSchema = yup.object().shape({
  stream_url: yup.string().required(),
  organization_id: yup.string().nullable().required(),
});
