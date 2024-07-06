import { IPageData } from "@/types";
const firstSection = {
    title: "webcome to experiment page",
    description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat, rerum.",
    img: "",
};

const secondSection = {
    title: "Features",
    cardData: [
        {
            id: 1,
            title: "Personalized Experience",
            description: "Tailored to fit your preferences and needs."
        },
        {
            id: 2,
            title: "Improved Performance",
            description: "Enhanced speed and efficiency for seamless usage."
        }
    ]
};




const pagedata: IPageData = {
    firstSection,
    // heroData,
    // reviewData: undefined,
    // scrollSpyData,
    // secondSection,
    // tabData,
    // thirdSection,
};

export { pagedata };
