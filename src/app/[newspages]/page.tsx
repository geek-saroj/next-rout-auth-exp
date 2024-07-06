"use client"
import { notFound } from "next/navigation";
import { pageData } from "../../data/details/data";
import ScrollSpy from "../../components/ScrollSpy/scrollspy";

const data = [
  {
    id: "1",
    title: "Home",
    link: "/",
  },
  {
    id: "2",
    title: "About",
    link: "/about",
  },
  {
    id: "3",
    title: "Services",
    link: "/services",
  },
  {
    id: "4",
    title: "Contact",
    link: "/contact",
  },
];
const Details = ({ params }: { params: { newspages: string } }) => {
  const page = params.newspages;

  const data1 = pageData[page as keyof typeof pageData];

  if (!data1) {
    notFound();
  }

  console.log(params);
  return (
    <div>
      <div className="div">{data1.firstSection?.title}</div>

      {data && (
        <ScrollSpy data={data} className="hidden lg:flex lg:basis-1/5" />
      )}

      <div className="div">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore assumenda explicabo et necessitatibus praesentium nostrum quae ipsum. Quibusdam excepturi modi nostrum ea nobis praesentium, iusto eligendi numquam, veniam dolorem facere.
        
      </div>
    </div>
  );
};
export default Details;
