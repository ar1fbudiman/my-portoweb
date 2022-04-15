import Image from "next/image";

type Props = {
  url: string;
  children: any;
  classIcon: string;
};
const SocialMediaComponent: React.FC<Props> = ({
  url,
  children,
  classIcon,
}) => {
  return (
    <>
      <a href={url} target={"blank"} className={"mt-5 mr-5 " + classIcon}>
        <svg
          width={25}
          height={25}
          className="fill-current"
          role="img"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          {children}
        </svg>
      </a>
    </>
  );
};

export default SocialMediaComponent;
