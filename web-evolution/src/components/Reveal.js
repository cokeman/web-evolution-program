import useScrollReveal from '../hooks/useScrollReveal';

export default function Reveal({ children, delay = 0, direction = 'up', className = '', as: Tag = 'div', style = {} }) {
  const [ref, isVisible] = useScrollReveal(0.12);

  const dirClass = `reveal-${direction}`;

  return (
    <Tag
      ref={ref}
      className={`reveal ${dirClass} ${isVisible ? 'revealed' : ''} ${className}`}
      style={{ transitionDelay: `${delay}ms`, ...style }}
    >
      {children}
    </Tag>
  );
}
