export function FancyText({title, text}) {
    
    return title
    ? <h2 className="fancy-title">{text}</h2> // Main Heading
    : <section className="normal-title">{text}</section> // Secondary Text

}