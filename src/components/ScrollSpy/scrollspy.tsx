"use client";
import ScrollSpy from "react-scrollspy-navigation";
import classNames from "../../utils/className";
import { useRouter } from "next/navigation";

interface ScrollSpyProps {
  className?: string;
  data: {
    id: string;
    title: string;
    link: string;
  }[];
}

export default function ScrollSpyComponent({
  className,
  data,
}: ScrollSpyProps) {
  const router = useRouter();

  return (
    <ScrollSpy activeClass="!bg-primary" behavior="smooth">
      <nav
        className={classNames(
          className,
          `cursor-pointer sticky top-20 self-start`
        )}
      >
        <ul>
          {data &&
            data.map(({ link, title, id }) => (
              <li
                className="flex flex-row text-red-700 gap-3 items-center"
                key={id}
              >
                <a href={link} className={`bg-gray-300 w-1 h-14`}></a>
                <p onClick={() => router.push(link)} className="">
                  {title}
                </p>
              </li>
            ))}
        </ul>
      </nav>
    </ScrollSpy>
  );
}
