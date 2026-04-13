interface ContainerProps {
  children: React.ReactNode;
}

export default function Container({ children }: ContainerProps) {
  return (
    <div className="max-w-container mx-auto px-6 md:px-8">
      {children}
    </div>
  );
}
