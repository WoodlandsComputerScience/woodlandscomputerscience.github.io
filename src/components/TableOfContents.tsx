export interface Heading {
    text: string;
    slug: string;
    children: Heading[];
}

export interface TableOfContentsProps {
    heading: Heading;
}

export default function TableOfContents({heading} : TableOfContentsProps) {
    const {text, slug, children} = heading;

    return <li>
        <a href={`#${slug}`}>{text}</a>
        <ol>
            {children.map(c => <TableOfContents key={c.slug} heading={c} />)}
        </ol>
    </li>
}