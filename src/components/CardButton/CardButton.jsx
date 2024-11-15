import './CardButton.css';

function CardButton({ id, children, className, ...props }) {
  const cl = 'card-button' + (className ? ' ' + className : '');
  return (
    <button {...props} className={cl} id={id}>
      {children}
    </button>
  );
}

export default CardButton;
