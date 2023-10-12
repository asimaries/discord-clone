const AuthLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="grid h-full place-items-center bg-red-500">{children}</div>
  );
};

export default AuthLayout;
