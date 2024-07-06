interface IPageData {
    heroData?: {
      title: string;
      img: any;
      children: JSX.Element;
    };
    firstSection?: {
      title: string;
      description: string;
      img: string;
    };
    secondSection?: {
      title: string;
      cardData: {
        id: number;
        title: string;
        description: string;
        link: {
          title: string;
          href: string;
        };
      }[];
    };
    thirdSection?: {
      title: string;
      subtitle: string;
      cardData: {
        id: number;
        title: string;
        description: string;
        img: any;
      }[];
    };
    tabData?: {
      tabHeaders: TabHeader[];
      tabBody: TabBody[];
    };
    reviewData?: (IReviewProps & { id: number })[];
    scrollSpyData?: {
      id: number;
      link: string;
      title: string;
    }[];
  }
  
  export type { IPageData };