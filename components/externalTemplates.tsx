// @/components/externalTemplates.tsx

/*
  in page.tsx, return like this:
  return (
    <Container>
      ...contents
    </Container>
  );
*/

// Style
import "@/styles/components/external-templates.css"

export function Container({ children }: { children: React.ReactNode }) {
  return (
    <div id="external-container" className="backboard">
      {children}
    </div>
  );
}