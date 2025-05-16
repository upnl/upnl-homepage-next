// @/components/externalTemplates.tsx

/*
  in page.tsx, return like this:
  return (
    <Container>
      ...contents
    </Container>
  );
*/


export function Container({ children }: { children: React.ReactNode }) {
  return (
    <div id="external-container" className="backboard" style={{padding: "15px"}}>
      {children}
    </div>
  );
}