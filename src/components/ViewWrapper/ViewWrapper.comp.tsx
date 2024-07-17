interface Props {
  children: React.ReactNode;
  pageTitle?: string;
}

export const ViewWrapper = ({ children, pageTitle }: Props) => {
  return (
    <>
      {pageTitle ? (
        <h1 className="text-4xl font-bold mb-4">{pageTitle}</h1>
      ) : null}
      {children}
    </>
  );
};
