export interface PostureAdviceDetails {
  summary: string;
  details: string;
}

export interface PostureAdvice {
  advice: {
    [postureQuality: string]: {
      [postureClass: string]: PostureAdviceDetails;
    };
  };
}

// postureAdvice.json の型を強制
import postureAdviceJson from './postureAdvice.json';

const postureAdvice = postureAdviceJson as PostureAdvice;
export default postureAdvice;
