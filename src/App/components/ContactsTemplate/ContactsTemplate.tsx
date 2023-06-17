type TProps = {
  content: string;
  path: string;
  alt: string;
};

const ContactsTemplate = ({ content, path, alt }: TProps) => {
  return (
    <div className="flex items-center">
      {path && (
        <img
          src={path}
          alt={alt}
          className="mr-4 min-[320px]:max-lg:mr-[10px] min-[320px]:max-lg:w-[15px] min-[320px]:max-lg:h-[15px] min-[320px]:max-lg:object-cover"
        />
      )}
      <span className="text-white font-bold">{content}</span>
    </div>
  );
};
export default ContactsTemplate;
