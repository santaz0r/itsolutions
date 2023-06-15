type TProps = {
  content: string;
  path: string;
  alt: string;
};

const ContactsTemplate = ({ content, path, alt }: TProps) => {
  return (
    <div className="flex items-center">
      <img src={path} alt={alt} className="mr-4" />
      <span className="text-white font-bold text-sm">{content}</span>
    </div>
  );
};
export default ContactsTemplate;
