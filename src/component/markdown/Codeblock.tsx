import { CodeComponent } from 'react-markdown/lib/ast-to-react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { hopscotch } from 'react-syntax-highlighter/dist/cjs/styles/prism';
import { CodeBlockWrapper, CodeBlockTitle } from "./Styles";

const CodeBlock: CodeComponent = ({ inline, className, children }) => {
    if (inline) {
        return (
            <code
                style={{padding: '0.3em 0.5em', margin: '0 0.2em'}}
                className={className}
                children={children}
            />
        );
    }
    const match = /language-(\w+)(:.+)/.exec(className || '');
    const lang = match && match[1] ? match[1] : '';
    const name = match && match[2] ? match[2].slice(1) : '';
    return (
        <CodeBlockWrapper>
            <CodeBlockTitle>{name}</CodeBlockTitle>
            <SyntaxHighlighter
                style={hopscotch}
                language={lang}
                children={String(children).replace(/\n$/, '')}
            />
        </CodeBlockWrapper>
    );
};

export default CodeBlock;