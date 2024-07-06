import { pagedata } from "../detail";
import { IPageData } from "@/types";
interface IDetailsPageData {
    [key: string]: IPageData;
  }
  
  const pageData: IDetailsPageData = {
    // demo: demoData,
    "webcome": pagedata,
    // "sajilo-rms": sajiloRmsData,
    // "kyc-onboarding": onboardingSystem,
    // "buy-now-pay-later": bnpl,
    // "loan-management-system": lms,
    // "anti-money-laundering": aml,
    // "merchant-management-system": mms,
    // ai: aiData,
    // "cloud-solutions": cloud,
    // "secure-your-business": security,
    // consulting: consulting,
    // 'innovation-labs': innovationLabs,
  };
  
  export { pageData };