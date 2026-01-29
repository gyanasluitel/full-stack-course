import React from 'react';

interface CodeBlockProps {
  code: string;
  className?: string;
  style?: React.CSSProperties;
}

const CodeBlock: React.FC<CodeBlockProps> = ({ code, className = '', style }) => (
    <pre className='code-area' style={style}>
        <code className={`code-block ${className}`.trim()}>{code}</code>
    </pre>
);

export default CodeBlock;
