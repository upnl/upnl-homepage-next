type FormGroupProps = {
  label: string
  htmlFor: string
  children: React.ReactNode
  className?: string
}

export default function FormGroup({ label, htmlFor, children, className = "" }: FormGroupProps) {
  return (
    <div className={`control-group ${className}`}>
      <label className="control-label" htmlFor={htmlFor}>{label}</label>
      <div className="controls">
        {children}
        <span className="help-inline" />
      </div>
    </div>
  )
}