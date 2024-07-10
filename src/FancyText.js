export function FancyText({title, text}) {
    
    return title
    ? <h1 className="fancy-title">{text}</h1> // Main Heading
    : <section className="normal-title">{text}</section> // Secondary Text

}